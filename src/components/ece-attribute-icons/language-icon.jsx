import React from 'react';
import PropTypes from 'prop-types';

import './language-icon.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function LanguageIcon(props) {
  const baseSize = 3;
  return (
    <div class="language-icon__container">
      {
        props.data.languages.map((language, index) => (
          <div class={`language-icon language-icon--${index}`}>
            <span class="language-icon__bubble">
              <FontAwesomeIcon icon={faComment} style={{"font-size": `${(baseSize*language.proportion)}em`}} />
            </span>
            <span class="language-icon__name">
              {language.name}
            </span>
          </div>
        ))
      }
    </div>
  )
}

LanguageIcon.propTypes = {
  data: PropTypes.shape({
    languages: PropTypes.array
  }).isRequired
};

// [{ "name": "nz-mi", "proportion": "0.8" }, { "name": "nz-en", "proportion": "0.2" }]
