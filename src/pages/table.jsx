import React from 'react';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';

import TABLE_DATA from '../data/table-data.json';

function TablePage() {
  return (
    <div>
      <NavBar />
      <div className="container-responsive px-4 mt-4 overflow-hidden">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mb-4">Comparison table</h1>
            <p>This is a table to compare different types of ECE.</p>
            <ComparisonTable
            data={TABLE_DATA}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
