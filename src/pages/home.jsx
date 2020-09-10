import React from 'react';
import ProcessGroup from '../components/process-group/process-group';
import NavBar from '../components/navbar/navbar';

import CHECKLIST_DATA from '../data/checklist-data.json';

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="mb-4">How do we sign up for an early learning service?</h1>
            <p>Not sure where to start? It is here.</p>
          </div>
        </div>
        <ProcessGroup checklists={ CHECKLIST_DATA } />
      </div>
    </div>
  );
}

export default HomePage;
