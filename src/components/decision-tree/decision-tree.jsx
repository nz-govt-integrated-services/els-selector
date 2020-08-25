import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import smoothscroll from 'smoothscroll-polyfill';

import Layer from '../layer/layer';
import Result from '../result/result';
import idSafeString from '../utils/idSafeString';

export default function DecisionTree(props) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [layerCount, setLayerCount] = useState(1);
  const calculatorResultRef = useRef(null);
  const calculatorRowRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [delayShowResults] = useDebouncedCallback(
    () => {
      setShowResults(true);
    },
    600
  );

  const handleClick = (answer, layerLevel) => {
    setLayerCount(layerCount + 1);
    let newSelectedAnswers = selectedAnswers;
    if (selectedAnswers.length >= (layerLevel + 1)) {
      // if this is selecting an answer at an earlier level than what we've already selected
      // cut out the later level answers and results
      newSelectedAnswers = selectedAnswers.slice(0, layerLevel);
      setShowResults(false);
    }
    setSelectedAnswers([...newSelectedAnswers, { answer, layerCount }]);
  };

  const results = selectedAnswers.filter((answer) => (answer.answer.result))
    .map((a) => a.answer.result);

  if (selectedAnswers.length >= 1 && results.length >= 1) {
    delayShowResults();
  }

  const scrollToSection = () => {
    let whichToScroll = null;
    let scrollOption = window.innerWidth < 576 ? 'center' : 'nearest';
    smoothscroll.polyfill();

    if (showResults) {
      whichToScroll = calculatorResultRef;
      if (window.innerWidth < 576) scrollOption = 'start';
    } else if (selectedAnswers.length >= 1) {
      whichToScroll = calculatorRowRef;
    }
    if (whichToScroll !== null && whichToScroll.current !== null) {
      whichToScroll.current.scrollIntoView({ behaviour: 'smooth', block: scrollOption });
    }
  };

  useEffect(scrollToSection, [selectedAnswers, showResults]);

  const concatenateAnswers = () => {
    const answers = selectedAnswers.map((a) => idSafeString(a.answer.answer));
    return answers.join('__');
  };

  return (
    <div className="row decision-tree-wrapper">
      <section className="col-lg-12 page-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Layer
                question={props.data.question}
                answers={props.data.answers}
                moreInfo={props.data.moreInfo}
                index={0}
                onClick={handleClick}
                layerCount={0}
                key="0"
              />
            </div>
          </div>
        </div>
      </section>

      {
        selectedAnswers.map((answer, index) => {
          const isLastItem = index + 1 === selectedAnswers.length;
          return answer.answer.subquestion
              && (
                <section className="col-lg-12 page-section" key={answer.layerCount}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12" ref={isLastItem ? calculatorRowRef : null}>
                        <Layer
                          question={answer.answer.subquestion.question}
                          answers={answer.answer.subquestion.answers}
                          index={index + 1}
                          layerCount={answer.layerCount}
                          onClick={handleClick}
                          moreInfo={answer.answer.subquestion.moreInfo}
                          text={answer.answer.subquestion.text}
                          question_details={answer.answer.subquestion.question_details}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              );
        })
      }

      <section className="col-lg-12 mt-4 pt-4" aria-live="polite" aria-atomic="true">
        {
          showResults && (
            <div className="container" ref={calculatorResultRef}>
              {
                props.resultHeading && (
                  <h2>{ props.resultHeading }</h2>
                )
              }
              {
                results.map((result, index) => (
                  <div className="row pb-4" key={index}>
                    <div className="col-12 mb-4">
                      <Result
                        text={result.text}
                        links={result.links}
                        conditions={result.conditions}
                        options={result.options}
                        id={concatenateAnswers()}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </section>
      {
        props.lastUpdated && (
          <section className="col-lg-12 mb-4">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-4">
                  <p>
                    Last updated:
                    { props.lastUpdated }
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
      }
    </div>
  );
}

DecisionTree.defaultProps = {
  lastUpdated: '',
  resultHeading: ''
};

DecisionTree.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string,
    answers: PropTypes.array.isRequired,
    moreInfo: PropTypes.object
  }).isRequired,
  lastUpdated: PropTypes.string,
  resultHeading: PropTypes.string
};
