import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../external-link/external-link';

import EceAttribute from '../ece-attribute/ece-attribute';

export default function EceType(props) {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <p>{props.data.text}</p>
      <div>
        {
          props.data.attributes.map((attribute, index) => (
            <EceAttribute type={attribute.type}
                          data={attribute.data}
                          text={attribute.text}
                          key={`${props.title}-${attribute.type}`}/>
          ))
        }
      </div>
    </div>
  )
}

EceType.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    attributes: PropTypes.array,
    links: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};
