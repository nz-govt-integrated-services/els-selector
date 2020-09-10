import React from 'react';
import PropTypes from 'prop-types';

import EceAttribute from '../ece-attribute/ece-attribute';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function EceType(props) {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>{props.data.title}</h2>
        <FontAwesomeIcon icon={faTimes} onClick={()=>props.handleClick(null)} />
      </div>
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

EceType.defaultProps = {
  handleClick: null
}

EceType.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    attributes: PropTypes.array,
    links: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  handleClick: PropTypes.func
};
