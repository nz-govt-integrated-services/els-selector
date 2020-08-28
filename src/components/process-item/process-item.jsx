import React from 'react';
import PropTypes from 'prop-types';

export default function ProcessItem(props) {
  return (
    <div>
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
  )
}

ProcessItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string,
    lists: PropTypes.array,
    links: PropTypes.array
  }).isRequired
};
