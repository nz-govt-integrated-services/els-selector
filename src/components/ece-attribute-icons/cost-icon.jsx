import React from 'react';
import PropTypes from 'prop-types';

import './cost-icon.scss';

export default function CostIcon(props) {
  const inRange = (number, range) => {
    return(range && (range.from <= number) && (range.to >= number))
  }

  return (
    <div className="cost-icon__container">
      {
        [5,4,3,2,1].map(costLevel => (
          <span
            className={`cost-icon cost-icon--${inRange(costLevel, props.data.always) ? 'always' : (inRange(costLevel, props.data.sometimes) ? 'sometimes' : 'never')}`}
          >
          </span>
        ))
      }
    </div>
  )
}

CostIcon.defaultProps = {
  always: {},
  sometimes: {}
};

// rating of 0-5
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
