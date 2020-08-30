import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Link(props) {
  const linkClasses = classNames(
    'external',
    props.class
  );
  return (
    <span>
      {' '}
      <a
        href={props.href}
        className={linkClasses}
        title="Open external link"
        target="_blank"
        rel="noopener noreferrer"
        style={{"whiteSpace": "nowrap"}}
      >
        {props.text}
        <FontAwesomeIcon icon={ faExternalLinkAlt } className="ml-1" />
      </a>
      <span className="sr-only">
        (external link)
      </span>
      {' '}
    </span>
  );
}

Link.defaultProps = {
  class: ''
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  class: PropTypes.string
};
