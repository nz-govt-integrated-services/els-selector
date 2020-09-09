import React from 'react';
import PropTypes from 'prop-types';

import EceAttribute from '../ece-attribute/ece-attribute';

export default function EceType(props) {
  return (
    <div className="card">
      <h2 className="card-header">{props.data.title}</h2>
      <div className="card-body">
        <p>{props.data.text}</p>
        <div className="small">
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
