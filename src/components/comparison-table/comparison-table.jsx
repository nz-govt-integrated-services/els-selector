import React from 'react';
import PropTypes from 'prop-types';
import ComparisonCell from '../comparison-cell/comparison-cell'

export default function ComparisonTable(props) {
  const typeOrder = () => {
    const categoryMemberIds = props.data.categories.map((category) => (category.members)).flat();
    const allTypeIds = Object.keys(props.data.types);
    const typesWithNoCategory = allTypeIds.filter(x => !categoryMemberIds.includes(x));
    return categoryMemberIds.concat(typesWithNoCategory)
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered border-0 table-hover">
        <thead>
          <tr>
            <th className="border-0" />
            {
              props.data.categories.map((category, index) => (
                <th colSpan={category.members.length}
                    className="text-center"
                    key={`category-${category.name}`}>
                  {category.name}
                </th>
              ))
            }
          </tr>
          <tr>
            <th />
            {
              typeOrder().map((type, index) => (
                <th className={`text-center ${props.selectedType === type ? 'table-info' : ''}`}
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
