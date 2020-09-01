import React from 'react';
import PropTypes from 'prop-types';

export default function ParentInvolvementIcon(props) {
  return (
    <div>{props.data.always && props.data.always.minimum_percent}</div>
  )
}

ParentInvolvementIcon.propTypes = {
  data: PropTypes.shape({
    always: PropTypes.shape({
      minimum_percent: PropTypes.number
    }),
    sometimes: PropTypes.shape({
      minimum_percent: PropTypes.number
    })
  }).isRequired
};
