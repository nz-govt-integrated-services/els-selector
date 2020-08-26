import React from 'react';
import PropTypes from 'prop-types';
import ComparisonCell from '../comparison-cell/comparison-cell'

export default function ComparisonTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <th />
        {
          props.data.types.map((type, index) => (
            <th>{type.name}</th>
          ))
        }
      </thead>
      <tbody>
        {
          props.data.attributes.map((attribute, index) => (
            <tr>
              <td>{attribute.name}</td>
              {
                props.data.types.map((type, index) => (
                  <ComparisonCell value = { attribute.values[type.id] } />
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
    types: PropTypes.array.isRequired,
    attributes: PropTypes.array.isRequired
  }).isRequired
};
