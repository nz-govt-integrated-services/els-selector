import React from 'react';
import PropTypes from 'prop-types';
import ComparisonCell from '../comparison-cell/comparison-cell'

export default function ComparisonTable(props) {
  const typesWithNoCategory = () => {
    const categoryMemberIds = props.data.categories.map((category) => (category.members)).flat();
    const allTypeIds = Object.keys(props.data.types);
    return allTypeIds.filter(x => !categoryMemberIds.includes(x));
  }

  const typeOrder = () => {
    const categoryMemberIds = props.data.categories.map((category) => (category.members)).flat();
    const allTypeIds = Object.keys(props.data.types);
    const typesWithNoCategory = allTypeIds.filter(x => !categoryMemberIds.includes(x));
    return categoryMemberIds.concat(typesWithNoCategory)
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th />
          {
            props.data.categories.map((category, index) => (
              <th colspan={category.members.length} className="text-center">
                {category.name}
              </th>
            ))
          }
        </tr>
        <tr>
          <th />
          {
            typeOrder().map((type, index) => (
              <th className="text-center">
                { props.data.types[type].name }
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          props.data.attributes.map((attribute, index) => (
            <tr>
              <td>{attribute.name}</td>
              {
                typeOrder().map((type, index) => (
                  <ComparisonCell
                    value = { attribute.values[type] && attribute.values[type].value }
                    notes = { attribute.values[type] && attribute.values[type].notes }
                  />
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

ComparisonTable.propTypes = {
  data: PropTypes.shape({
    types: PropTypes.object.isRequired,
    attributes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  }).isRequired
};
