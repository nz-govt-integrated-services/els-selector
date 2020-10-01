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
            <p>Finding an early learning service can be a tricky journey to begin but is ultimately incredibly rewarding for your whole family. On this site, you will learn about the process to follow for enrolment, the types of service that you can choose from and their similarities/differences, and see what financial support you can receive from the government. </p>
          </div>
        </div>
        <ProcessGroup checklists={ CHECKLIST_DATA } />
      </div>
    </div>
  );
}

export default HomePage;
