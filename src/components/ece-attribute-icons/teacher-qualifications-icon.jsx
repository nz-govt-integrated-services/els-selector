import React from 'react';
import PropTypes from 'prop-types';

export default function TeacherQualificationsIcon(props) {
  return (
    <div>{props.data.always && props.data.always.minimum_percent_qualified}</div>
  )
}

TeacherQualificationsIcon.propTypes = {
  data: PropTypes.shape({
    always: PropTypes.shape({
      minimum_percent_qualified: PropTypes.number
    }),
    sometimes: PropTypes.shape({
      minimum_percent_qualified: PropTypes.number
    })
  }).isRequired
};
