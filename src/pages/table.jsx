import React from 'react';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';

import TABLE_DATA from '../data/table-data.json';

function TablePage() {
  return (
    <div>
      <NavBar />
      <div class="container">
          <div className="row">
            <div className="col-lg-12">
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
