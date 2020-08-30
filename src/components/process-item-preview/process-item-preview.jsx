import React from 'react';
import PropTypes from 'prop-types';

export default function ProcessItemPreview(props) {
  return (
    <div className={`card process-item-preview ${props.active && 'process-item-preview--active'}`} onClick={ () => props.onClick(props.index) }>
      <div className={`card-header ${props.active && 'bg-lavender'}`}>
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <p>{props.data.blurb}</p>
      </div>
    </div>
  )
}

ProcessItemPreview.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string,
    lists: PropTypes.array,
    links: PropTypes.array
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
