import React from 'react';
import PropTypes from 'prop-types';

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
                  <td>{attribute.values[type.id]}</td>
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
