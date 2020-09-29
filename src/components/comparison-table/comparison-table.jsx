import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import ComparisonCell from '../comparison-cell/comparison-cell'

import TABLE_DATA from '../../data/table-data.json';

import './comparison-table.scss';

export default function ComparisonTable(props) {
  const columnsWithRenderFunctions = (data) => {
    return data.map((column, index) => {
      let render_text = (text) => (text)
      let render_comparison_cell = (values) => (
        values && (
        <ComparisonCell value = { values.value }
                        text = { values.text }
                        notes = { values.notes }
                        links = { values.links }
                        level = { values.level }
        />
        )
      )
      return {
        key: column.key,
        dataIndex: column.key,
        fixed: column.fixed,
        width: column.width,
        title: (column.title && <div className={`clickable h-100 text-center ${column.key === props.selectedType ? 'active' : ''}`} onClick={() => (props.handleClick(column.key))}>{column.title}</div>),
        render: (values) => (
          typeof(values) === "string" ? render_text(values) : render_comparison_cell(values)
        )
      }
    })
  }

  return (
    <Table
      columns={ columnsWithRenderFunctions(TABLE_DATA.columns) }
      dataSource={ TABLE_DATA.rows }
      scroll={{ x: 800, y: 400 }}
      pagination={false}
      size="small"
    />
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
