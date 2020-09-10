import React from 'react';
import PropTypes from 'prop-types';

import './process-item.scss';

export default function ProcessItem(props) {
  return (
    <div id={props.id}>
      <h3>{ props.data.title }</h3>
      <p className="lead">{ props.data.blurb }</p>
      {
        props.data.lists.map((list, index) => (
          <div key={ list.title }>
            <h5>{list.title}</h5>
            <ul>
              {
                list.items.map((item, index) => (
                  <li key={ item } dangerouslySetInnerHTML={{ __html: item }} />
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
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    blurb: PropTypes.string,
    lists: PropTypes.array,
    links: PropTypes.array
  }).isRequired
};
