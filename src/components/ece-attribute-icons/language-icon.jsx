import React from 'react';
import PropTypes from 'prop-types';

export default function LanguageIcon(props) {
  return (
    <div>{props.data.languages}</div>
  )
}

LanguageIcon.propTypes = {
  data: PropTypes.shape({
    languages: PropTypes.array
  }).isRequired
};

// [{ "language": "nz-mi", "proportion": "0.8" }, { "language": "nz-en", "proportion": "0.2" }]
