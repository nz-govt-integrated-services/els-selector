import React from 'react';
import PropTypes from 'prop-types';

export default function AgesIcon(props) {
  return (
    <div>{props.data.always.from}</div>
  )
}

AgesIcon.defaultProps = {
  data: {}
};

AgesIcon.propTypes = {
  data: PropTypes.shape({
    always: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number
    }),
    sometimes: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number
    })
  })
};
