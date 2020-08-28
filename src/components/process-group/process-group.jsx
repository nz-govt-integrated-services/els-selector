import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checklist from '../checklist/checklist';

export default function ProcessGroup(props) {
  const [activeChecklist, setActiveChecklist] = useState(null);

  const handleClick = (checklistIndex) => {
    setActiveChecklist(checklistIndex);
  };

  return (
    <div class="row">
      {
        props.checklists.map((checklist, index) => (
          <div className="col checklist" key={ checklist.title }>
            <Checklist
              data={ checklist }
              index={ index }
              onClick={ handleClick }
              active={ index == activeChecklist }
            />
          </div>
        ))
      }
    </div>
  )
}

ProcessGroup.propTypes = {
  checklists: PropTypes.array.isRequired
};
