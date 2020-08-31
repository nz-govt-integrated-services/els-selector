import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../external-link/external-link';
import Option from '../option/option';
import idSafeString from '../utils/idSafeString';

export default function Result(props) {
  return (
    <div className="result" id={`result-${props.id}`}>
      {
        props.text && (
          <p dangerouslySetInnerHTML={{ __html: props.text }} />
        )
      }
      {
        props.conditions.length >= 1
        && (
          <div className="result__conditions">
            <ul>
              {props.conditions.map((condition, index) => (
                <li key={index}>
                  <p dangerouslySetInnerHTML={{ __html: condition }} />
                </li>
              ))}
            </ul>
          </div>
        )
      }
      {
        props.links.length >= 1
        && (
          <ul className="result__links">
            {props.links.map((link, index) => (
              <li key={index}>
                <p>
                  <ExternalLink href={link.href} text={link.text} />
                </p>
              </li>
            ))}
          </ul>
        )
      }
      {
        props.options.length >= 1 && (
          <div className="result__options">
            {props.options.map((option) => (
              <Option
                heading={option.heading}
                text={option.text}
                links={option.links}
                conditions={option.conditions}
                id={`result-option-${idSafeString(option.heading)}`}
              />
            ))}
          </div>
        )
      }
    </div>
  );
}

Result.defaultProps = {
  links: [],
  conditions: [],
  options: [],
  text: '',
  id: ''
};

Result.propTypes = {
  text: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  conditions: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string
};
