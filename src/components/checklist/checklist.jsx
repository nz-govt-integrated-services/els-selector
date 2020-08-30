import React from 'react';
import PropTypes from 'prop-types';

export default function Checklist(props) {
  return (
    <div className={`card ${props.active && 'checklist--active'}`} onClick={ () => props.onClick(props.index) }>
      <div className={`card-header ${props.active && 'bg-lavender'}`}>
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <p>{props.data.blurb}</p>
      </div>
    </div>
  )
}

Checklist.propTypes = {
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
