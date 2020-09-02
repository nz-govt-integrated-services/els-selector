import React from 'react';
import PropTypes from 'prop-types';

import './session-length-icon.scss';

export default function SessionLengthIcon(props) {
  const outerDiameter = 70;

  const getSectorPath = (x, y, outerDiameter, a1, a2) => {
    const degtorad = Math.PI / 180;
    const halfOuterDiameter = outerDiameter / 2;
    const cr = halfOuterDiameter - 5;
    const cx1 = (Math.cos(degtorad * a2) * cr) + x;
    const cy1 = (-Math.sin(degtorad * a2) * cr) + y;
    const cx2 = (Math.cos(degtorad * a1) * cr) + x;
    const cy2 = (-Math.sin(degtorad * a1) * cr) + y;

    return "M" + x + " " + y + " " + cx1 + " " + cy1 + " A" + cr + " " + cr + " 0 0 1 " + cx2 + " " + cy2 + "Z";
  }

  const startDegreeForHour = (hour) => (
    60 - (hour * (360/12))
  )

  const endDegreeForHour = (hour) => (
    startDegreeForHour(hour) + (360/12)
  )

  const inRange = (number, range) => {
    return(range && (range.from <= number) && (range.to >= number))
  }

  return (
    <div>
      <svg width={outerDiameter} height={outerDiameter}>
      {
        [0,1,2,3,4,5,6,7,8,9,10,11].map(startHour => (
          <path
            d={getSectorPath(outerDiameter / 2, outerDiameter / 2, outerDiameter, startDegreeForHour(startHour), endDegreeForHour(startHour))}
            class={`session-length-icon session-length-icon--${inRange(startHour, props.data.always) ? 'always' : (inRange(startHour, props.data.sometimes) ? 'sometimes' : 'never')}`}
            id={`session-${startHour}-${startDegreeForHour(startHour)}__${endDegreeForHour(startHour)}`}
            />
        ))
      }
      </svg>
    </div>
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
