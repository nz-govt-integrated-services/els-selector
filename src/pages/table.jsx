import React from 'react';
import NavBar from '../components/navbar/navbar';
import Tupac from '../components/tupac/tupac';

function TablePage() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid px-4 mt-4 overflow-hidden">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-4">Comparison table</h1>
            <p>This table provides an overview of what different services offer so you can easily compare features at a glance. Click on a service type to learn more about it.</p>
            <Tupac />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
