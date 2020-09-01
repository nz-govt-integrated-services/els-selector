import React from 'react';
import PropTypes from 'prop-types';

export default function SessionLengthIcon(props) {
  return (
    <div>{props.data.always && props.data.always.from}</div>
  )
}

SessionLengthIcon.propTypes = {
  data: PropTypes.shape({
    always: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number
    }),
    sometimes: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number
    })
  }).isRequired
};
