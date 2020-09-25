import React from 'react';
import PropTypes from 'prop-types';

import './process-item-preview.scss';

export default function ProcessItemPreview(props) {
  return (
    <li className={`nav-item process-item-preview process-item-preview--${props.index}`} onClick={ () => props.onClick(props.index) }>
      <span className={`nav-link clickable mb-1 ${props.active && 'active'}`}>
        {props.data.title}
      </span>
    </li>
  )
}

ProcessItemPreview.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
