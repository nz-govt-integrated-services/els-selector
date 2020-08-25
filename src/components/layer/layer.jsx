import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Layer(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMoreInfo = () => {
    setIsExpanded(!isExpanded);
  };
  const moreInfoClasses = classNames(
    'more-info__content',
    'pl-5',
    isExpanded ? 'block' : 'hidden'
  );
  const iconClasses = classNames(
    'fas',
    'pr-2',
    isExpanded ? 'fa-minus' : 'fa-plus'
  );

  const removeWhitespaces = (string) => string.replace(/ /g, '');

  return (
    <fieldset>
      {
        props.text
        && (
          <div className="pb-5 text-section" dangerouslySetInnerHTML={{ __html: props.text }} />
        )
      }
      {
        props.question && (
          <div>
            <legend className="w-auto d-inline h3">{props.question}</legend>
          </div>
        )
      }
      {
        props.question_details && (
          <div className="pb-5 question-details-section" dangerouslySetInnerHTML={{ __html: props.question_details }} />
        )
      }
      <div className="pb-5 more-info-section">
        { props.moreInfo.preview
          && (
            <button
              type="button"
              className="more-info__button ml-5 py-3"
              aria-expanded={isExpanded}
              onClick={() => toggleMoreInfo()}
            >
              <i className={iconClasses} />
              { props.moreInfo.preview }
            </button>
          )}
        <div className={moreInfoClasses}>
          <p dangerouslySetInnerHTML={{ __html: props.moreInfo.fullText }} />
        </div>
      </div>
      <div className="row">
        {
          props.answers.map((answer, index) => (
            <div className="position-relative col-xs-12 col-sm-6 col-lg-3 mb-2 border">
              <input
                type="radio"
                id={`${removeWhitespaces(answer.answer)}-${props.layerCount}-${props.index}`}
                name={props.layerCount}
                value={index}
                onClick={() => props.onClick(answer, props.index)}
                className="answer"
              />
              <label htmlFor={`${removeWhitespaces(answer.answer)}-${props.layerCount}-${props.index}`} className="answer__label">
                <span className="answer__inner">
                  {answer.answer}
                </span>
              </label>
              <span className="radio-custom" />
            </div>
          ))
        }
      </div>
    </fieldset>
  );
}

Layer.defaultProps = {
  question: '',
  text: '',
  question_details: '',
  moreInfo: {}
};

Layer.propTypes = {
  question: PropTypes.string,
  moreInfo: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    fullText: PropTypes.string.isRequired
  }),
  text: PropTypes.string,
  question_details: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  layerCount: PropTypes.number.isRequired,
};
