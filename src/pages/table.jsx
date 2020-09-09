import React from 'react';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';
import EceType from '../components/ece-type/ece-type';

import TABLE_DATA from '../data/table-data.json';

import KINDY_DATA from '../data/ece-types/kindergarten.json';
import KOHANGA_DATA from '../data/ece-types/kohanga.json';

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
      <div className="container">
        <div className="row">
          <div className="col-6">
            <EceType data={ KINDY_DATA } />
          </div>
          <div className="col-6">
            <EceType data={ KOHANGA_DATA } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
