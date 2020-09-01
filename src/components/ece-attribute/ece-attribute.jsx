import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../external-link/external-link';

import AgesIcon from '../ece-attribute-icons/ages-icon';
import CostIcon from '../ece-attribute-icons/cost-icon';
import LanguageIcon from '../ece-attribute-icons/language-icon';
import NumberOfCentresIcon from '../ece-attribute-icons/number-of-centres-icon';
import ParentInvolvementIcon from '../ece-attribute-icons/parent-involvement-icon';
import SessionLengthIcon from '../ece-attribute-icons/session-length-icon';
import TeacherQualificationsIcon from '../ece-attribute-icons/teacher-qualifications-icon';

export default function EceAttribute(props) {
  const typeMap = {
    ages: {heading: "Ages", icon: AgesIcon},
    cost: {heading: "Cost", icon: CostIcon},
    "number-of-centres": {heading: "Number of centres in New Zealand", icon: NumberOfCentresIcon},
    "parent-involvement": {heading: "Expectations of you and your whānau", icon: ParentInvolvementIcon},
    "session-length": {heading: "Session length", icon: SessionLengthIcon},
    "teacher-qualifications": {heading: "Teacher qualifications", icon: TeacherQualificationsIcon}
  }

  const mappedType = typeMap[props.type]

  return (
    <div class="row">
      <div class="col-3 d-flex justify-content-center">
        { <mappedType.icon data={props.data} /> }
      </div>
      <div class="col-9">
        <h3>{ mappedType.heading }</h3>
        <p>{ props.text }</p>
      </div>
    </div>
  )
}

EceAttribute.defaultProps = {
  heading: '',
  text: ''
};

EceAttribute.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  text: PropTypes.string
};
