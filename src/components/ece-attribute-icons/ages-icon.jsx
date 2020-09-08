import React from 'react';
import PropTypes from 'prop-types';

import './ages-icon.scss';

export default function AgesIcon(props) {
  const inRange = (number, range) => {
    return(range && (range.from <= number) && (range.to >= number))
  }

  return (
    <div className="ages-circle__container scale-small pt-4 pr-2 pl-0">
      {
        [0,1,2,3,4,5,6].map(startAge => (
          <span
            className={`ages-circle ages-circle--${inRange(startAge, props.data.always) ? 'always' : (inRange(startAge, props.data.sometimes) ? 'sometimes' : 'never')}`}
          >
          </span>
        ))
      }
    </div>
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
