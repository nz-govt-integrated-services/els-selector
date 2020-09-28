import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../external-link/external-link';
import { Tooltip } from 'antd';

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
      <div className="d-flex flex-column align-items-center">
        <div>
        {
          props.value && (
            <FontAwesomeIcon icon={ mappedValue.icon } color={`var(--${mappedValue.color})`} className="mb-1" />
          )
        }
        {
          props.text && (
            <small>{ props.text }</small>
          )
        }
        {
          props.notes && (
            <Tooltip title={ props.notes }>
              <sup className="">&nbsp;*</sup>
            </Tooltip>
          )
        }
        </div>
        {
          props.links && (
            <div className="small">
              {
                props.links.map((link, index) => (
                  <ExternalLink href={ link.href } text={ link.text } key={ `${link.href}-${link.text}` } />
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
  text: '',
  links: []
};

ComparisonCell.propTypes = {
  value: PropTypes.string,
  notes: PropTypes.string,
  links: PropTypes.array,
  text: PropTypes.string,
};
