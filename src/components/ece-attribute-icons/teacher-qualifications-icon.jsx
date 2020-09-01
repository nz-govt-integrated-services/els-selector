import React from 'react';
import PropTypes from 'prop-types';

import './teacher-qualifications-icon.scss';

export default function TeacherQualificationsIcon(props) {
  return (
    <div className="teacher-qualifications-icon__container">
      {
        [100,90,80,70,60,50,40,30,20,10,0].map(qualificationLevel => (
          <span
            className={`teacher-qualifications-icon teacher-qualifications-icon--${(qualificationLevel <= props.data.always.minimum_percent_qualified) ? 'always' : (props.data.sometimes && qualificationLevel <= props.data.sometimes.minimum_percent_qualified ? 'sometimes' : 'never')}`}>
          </span>
        ))
      }
    </div>
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
