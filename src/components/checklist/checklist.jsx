import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Checklist(props) {
  return (
    <div className="card" onClick={ () => props.onClick(props.index) }>
      <div className={`card-header ${props.active && 'bg-lavender'}`}>
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <p>{props.data.blurb}</p>
        {
          props.data.lists.map((list, index) => (
            <div key={ list.title }>
              <h4>{list.title}</h4>
              <ul>
                {
                  list.items.map((item, index) => (
                    <li key={ item }>{ item }</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
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
