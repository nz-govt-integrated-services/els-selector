import React from 'react';
import PropTypes from 'prop-types';

export default function CostIcon(props) {
  return (
    <div>{props.data.always && props.data.always.from}</div>
  )
}

CostIcon.defaultProps = {
  always: {},
  sometimes: {}
};

CostIcon.propTypes = {
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
