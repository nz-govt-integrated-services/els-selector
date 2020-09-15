import React from 'react';
import PropTypes from 'prop-types';

import './process-item.scss';

export default function ProcessItem(props) {
  return (
    <div id={props.id}>
      <h3>{ props.data.title }</h3>
      <p className="lead">{ props.data.blurb }</p>
      {
        props.data.sections && props.data.sections.map((section, index) => (
          <div key={ section.heading }>
            <h5>{section.heading}</h5>
            <p key={ section.text } dangerouslySetInnerHTML={{ __html: section.text }} />
            {
              section.items && (
                <ul>
                {
                  section.items.map((item, index) => (
                    <li key={ item } dangerouslySetInnerHTML={{ __html: item }} />
                  ))
                }
                </ul>
              )
            }
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
    links: PropTypes.array,
    sections: PropTypes.array
  }).isRequired
};
