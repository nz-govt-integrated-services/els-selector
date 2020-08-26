import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faQuestionCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export default function ComparisonCell(props) {
  const valueMap = {
    true: {color: "green", icon: faCheckCircle},
    false: {color: "red", icon: faTimesCircle},
    partial: {color: "yellow", icon: faMinusCircle},
    unknown: {color: "orange", icon: faQuestionCircle}
  }
  const mappedValue = valueMap[props.value]

  return (
    <td>
      <FontAwesomeIcon icon={ mappedValue.icon } color={`var(--${mappedValue.color})`} />
    </td>
  )
}

ComparisonCell.defaultProps = {
  notes: ''
};

ComparisonCell.propTypes = {
  value: PropTypes.string.isRequired,
  notes: PropTypes.string
};
