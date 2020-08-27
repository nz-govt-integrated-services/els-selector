import React from 'react';
import PropTypes from 'prop-types';

export default function Checklist(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.data.title}</h2>
      </div>
      <div className="card-body">
        <p>{props.data.blurb}</p>
        {
          props.data.lists.map((list, index) => (
            <div>
              <h4>{list.title}</h4>
              <ul>
                {
                  list.items.map((item, index) => (
                    <li>{ item }</li>
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
  }).isRequired
};
