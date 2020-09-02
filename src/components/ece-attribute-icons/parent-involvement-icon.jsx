import React from 'react';
import PropTypes from 'prop-types';

import './parent-involvement-icon.scss';

export default function ParentInvolvementIcon(props) {
  const inRange = (number, minimum) => {
    return(minimum && minimum >= number)
  }

  return (
    <div class="involvement-icon__container">
      {
        [100,80,60,40,20,0].map(involvementLevel => (
          <span
            class={`involvement-icon involvement-icon--${inRange(involvementLevel, props.data.always.minimum_percent) ? 'always' : (inRange(involvementLevel, props.data.sometimes.minimum_percent) ? 'sometimes' : 'never')}`}
          >
          </span>
        ))
      }
    </div>
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
