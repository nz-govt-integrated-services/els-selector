import React from 'react';
import PropTypes from 'prop-types';

export default function NumberOfCentresIcon(props) {
  return (
    <div>{props.data.number}</div>
  )
}

NumberOfCentresIcon.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string,
    colour: PropTypes.string
  }).isRequired
};
