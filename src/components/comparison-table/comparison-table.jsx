import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import ComparisonCell from '../comparison-cell/comparison-cell'

import ANTD_TABLE_DATA from '../../data/table-data-antd.json';
import ANTD_TABLE_DATA_FLIPPED from '../../data/table-data-antd-flipped.json';

import './comparison-table.scss';

export default function ComparisonTable(props) {
  const columnsWithRenderFunctions = (data) => {
    let columns = data.columns;
    return columns.map((column, index) => {
      let basic_render_function = (text) => (text)

      let fancy_render_function = (values) => (
        values && (
        <ComparisonCell value = { values.value }
                        text = { values.text }
                        notes = { values.notes }
                        links = { values.links }
        />
        )
      )
      return {
        key: column.key,
        dataIndex: column.key,
        fixed: column.fixed,
        width: column.width,
        title: column.title,
        render: (values) => (
          typeof(values) === "string" ? basic_render_function(values) : fancy_render_function(values)
        )
      }
    })
  }

  const typeOrder = () => {
    const categoryMemberIds = props.data.categories.map((category) => (category.members)).flat();
    const allTypeIds = Object.keys(props.data.types);
    const typesWithNoCategory = allTypeIds.filter(x => !categoryMemberIds.includes(x));
    return categoryMemberIds.concat(typesWithNoCategory)
  }

  return (
    <div style={{width: '100%'}}>
      <Table
        columns={ columnsWithRenderFunctions(ANTD_TABLE_DATA) }
        dataSource={ ANTD_TABLE_DATA.rows }
        scroll={{ x: 800, y: 400 }}
        />
      <Table
        columns={ columnsWithRenderFunctions(ANTD_TABLE_DATA_FLIPPED) }
        dataSource={ ANTD_TABLE_DATA_FLIPPED.rows }
        scroll={{ x: 800, y: 400 }}
        pagination={false}
        />
      <table className="table table-bordered border-0 table-hover">
        <thead>
          <tr>
            <th className="border-0" />
            {
              props.data.categories.map((category, index) => (
                <th colSpan={category.members.length}
                    className="text-center"
                    key={`category-${category.name}`}>
                  <p>{category.name}</p>
                </th>
              ))
            }
          </tr>
          <tr>
            <th />
            {
              typeOrder().map((type, index) => (
                <th className={`text-center clickable ${props.selectedType === type ? 'active' : ''}`}
                    key={`type-${props.data.types[type].name}`}
                    onClick={() => props.handleClick(type)}>
                  { props.data.types[type].name }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.data.attributes.map((attribute, index) => (
              <tr key={`attribute-${attribute.name}`}>
                <td className="font-weight-bold">
                  {attribute.name}
                </td>
                {
                  typeOrder().map((type, index) => (
                    <ComparisonCell
                      value = { attribute.values[type] && attribute.values[type].value }
                      notes = { attribute.values[type] && attribute.values[type].notes }
                      links = { attribute.values[type] && attribute.values[type].links }
                      key = { `attribute-${attribute.name}-type-${props.data.types[type].name}` }
                    />
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

ComparisonTable.defaultProps = {
  selectedType: null
}

ComparisonTable.propTypes = {
  data: PropTypes.shape({
    types: PropTypes.object.isRequired,
    attributes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedType: PropTypes.string
};
