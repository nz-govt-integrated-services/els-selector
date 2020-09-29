import React from 'react';
import PropTypes from 'prop-types';

import './level.scss';

export default function Level(props) {
  const inRange = (number, range) => {
    return(range && (range.from <= number) && (range.to >= number))
  }

  return (
    props.data.always ? (
      <div className="level__container">
        {
          [5,4,3,2,1].map(level => (
            <span
              className={`level level--${inRange(level, props.data.always) ? 'always' : (inRange(level, props.data.sometimes) ? 'sometimes' : 'never')}`}
            >
            </span>
          ))
        }
      </div>
    )
    : (
      <span></span>
    )
  )
}

// rating of 0-5
Level.propTypes = {
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
