import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link/link';

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
            <FontAwesomeIcon icon={ mappedValue.icon } color={`var(--${mappedValue.color})`} className="mb-1" />
          )
        }
        {
          props.notes && (
            <span class="small text-center">{props.notes}</span>
          )
        }
        {
          props.links && (
            <div className="small">
              {
                props.links.map((link, index) => (
                  <Link href={ link.href } text={ link.text } />
                ))
              }
            </div>
          )
        }
      </div>
    </td>
  )
}

ComparisonCell.defaultProps = {
  notes: '',
  value: '',
  links: []
};

ComparisonCell.propTypes = {
  value: PropTypes.string,
  notes: PropTypes.string,
  links: PropTypes.array
};
