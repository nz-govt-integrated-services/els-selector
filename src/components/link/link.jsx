import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      >
        {props.text}
      </a>
      <span className="nonvisual-indicator">(external link)</span>
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
