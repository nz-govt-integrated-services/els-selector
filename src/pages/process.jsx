import React from 'react';
import ProcessGroup from '../components/process-group/process-group';
import NavBar from '../components/navbar/navbar';

import CHECKLIST_DATA from '../data/checklist-data.json';

function ProcessPage() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4 pt-4">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <ProcessGroup checklists={ CHECKLIST_DATA } />
      </div>
    </div>
  );
}

export default ProcessPage;
