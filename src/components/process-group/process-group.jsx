import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProcessItemPreview from '../process-item-preview/process-item-preview';
import ProcessItem from '../process-item/process-item';
import smoothscroll from 'smoothscroll-polyfill';

import './process-group.scss';

export default function ProcessGroup(props) {

  const [activeItem, setActiveItem] = useState(null);
  const activeItemRef = useRef(null);

  const handleClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  const scrollToSection = () => {
    smoothscroll.polyfill();
    if(activeItemRef.current !== null) {
      activeItemRef.current.scrollIntoView({ behaviour: 'smooth', block: 'start' });
    }
  };

  useEffect(scrollToSection, [activeItem]);

  return (
    <div className="row">
      <div className="col-3 align-items-stretch">
        <ul className="nav nav-pills flex-column sticky-top">
          {
            props.checklists.map((checklist, index) => (
              <ProcessItemPreview
                data={ checklist }
                index={ index }
                onClick={ handleClick }
                active={ index === activeItem }
                key={ checklist.title }
              />
            ))
          }
        </ul>
      </div>
      <div className="col-9">
      {
        props.checklists.map((checklist, index) => (
          <div ref={index === activeItem ? activeItemRef : null}>
          <ProcessItem
            data={ checklist }
            key={ `process-item-${index}` }
            id={ `process-item-${index}` }
          />
          </div>
        ))
      }
      </div>
    </div>
  )
}

ProcessGroup.propTypes = {
  checklists: PropTypes.array.isRequired
};
