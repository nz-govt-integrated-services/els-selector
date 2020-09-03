import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProcessItemPreview from '../process-item-preview/process-item-preview';
import ProcessItem from '../process-item/process-item';

import './process-group.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function ProcessGroup(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div>
      <div className="row align-items-stretch">
        {
          props.checklists.map((checklist, index) => (
            <div className="col checklist" key={ checklist.title }>
              <ProcessItemPreview
                data={ checklist }
                index={ index }
                onClick={ handleClick }
                active={ index === activeItem }
              />
              {
                index !== (props.checklists.length - 1) && (
                  <div class="checklist__arrow">
                    <FontAwesomeIcon icon={faGreaterThan} />
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
      {
        (activeItem !== null) && (
          <div className="row">
            {
              <div className="col-12">
                <ProcessItem data={ props.checklists[activeItem] } />
              </div>
            }
          </div>
        )
      }
    </div>
  )
}

ProcessGroup.propTypes = {
  checklists: PropTypes.array.isRequired
};
