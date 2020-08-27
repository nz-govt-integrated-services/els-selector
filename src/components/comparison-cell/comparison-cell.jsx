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
      <div class="d-flex flex-column align-items-center">
        {
          props.value && (
            <FontAwesomeIcon icon={ mappedValue.icon } color={`var(--${mappedValue.color})`} />
          )
        }
        {
          props.notes && (
            <span class="small">{props.notes}</span>
          )
        }
      </div>
    </td>
  )
}

ComparisonCell.defaultProps = {
  notes: '',
  value: ''
};

ComparisonCell.propTypes = {
  value: PropTypes.string,
  notes: PropTypes.string
};
