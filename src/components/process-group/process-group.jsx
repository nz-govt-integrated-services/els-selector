import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checklist from '../checklist/checklist';
import ProcessItem from '../process-item/process-item';

export default function ProcessGroup(props) {
  const [activeChecklist, setActiveChecklist] = useState(null);

  const handleClick = (checklistIndex) => {
    setActiveChecklist(checklistIndex);
  };

  return (
    <div>
      <div className="row">
        {
          props.checklists.map((checklist, index) => (
            <div className="col checklist" key={ checklist.title }>
              <Checklist
                data={ checklist }
                index={ index }
                onClick={ handleClick }
                active={ index === activeChecklist }
              />
            </div>
          ))
        }
      </div>
      {
        activeChecklist && (
          <div className="row">
            {
              <div className="col-12">
                <ProcessItem data={ props.checklists[activeChecklist] } />
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
