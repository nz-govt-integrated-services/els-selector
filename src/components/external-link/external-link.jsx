import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import './external-link.scss';

export default function ExternalLink(props) {
  const linkClasses = classNames(
    'external-link',
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
      </a>
      <span className="sr-only">
        (external link)
      </span>
      {' '}
    </span>
  );
}

ExternalLink.defaultProps = {
  class: ''
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  class: PropTypes.string
};
