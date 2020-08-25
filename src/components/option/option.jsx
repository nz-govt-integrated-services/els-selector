import React from 'react';
import PropTypes from 'prop-types';
import Link from '../link/link';

export default function Option(props) {
  return (
    <div className="option" id={props.id}>
      {
        props.heading && (
          <h3 className="option__heading">{props.heading}</h3>
        )
      }
      {
        props.text && (
          <p className="option__text" dangerouslySetInnerHTML={{ __html: props.text }} />
        )
      }
      {
        props.conditions.length >= 1 && (
          <ul className="option__conditions">
            {
              props.conditions.map((condition, index) => (
                <li key={index}>
                  <p dangerouslySetInnerHTML={{ __html: condition }} />
                </li>
              ))
            }
          </ul>
        )
      }
      {
        props.links.length >= 1
        && (
          <ul className="option__links">
            {props.links.map((link, index) => (
              <li key={index}>
                <p>
                  <Link href={link.href} text={link.text} />
                </p>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}

Option.defaultProps = {
  heading: '',
  text: '',
  links: [],
  conditions: [],
  id: ''
};

Option.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  conditions: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string
};
