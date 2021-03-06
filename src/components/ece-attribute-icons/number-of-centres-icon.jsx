import React from 'react';
import PropTypes from 'prop-types';

import './number-of-centres-icon.scss';

export default function NumberOfCentresIcon(props) {
  return (
    <div className="number-of-centres-icon">
      <span className="number-of-centres-icon__number">
        {props.data.number}
      </span>
    </div>
  )
}

NumberOfCentresIcon.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string
  }).isRequired
};
