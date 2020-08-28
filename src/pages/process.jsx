import React from 'react';
import Checklist from '../components/checklist/checklist';
import NavBar from '../components/navbar/navbar';

import CHECKLIST_DATA from '../data/checklist-data.json';

function ProcessPage() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4 pt-4">
        <div className="row">
          <div className="col-12">
            <h1>Process</h1>
          </div>
        </div>
        <div className="row">
          {
            CHECKLIST_DATA.map((checklist, index) => (
              <div className="col checklist" key={ checklist.title }>
                <Checklist data={ checklist }/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;
