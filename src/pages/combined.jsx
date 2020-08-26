import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';

import DECISIONTREE_DATA from '../data/decision-tree.json';
import TABLE_DATA from '../data/table-data.json';

function CombinedPage() {
  return (
    <div>
      <NavBar />
      <div class="container">
          <DecisionTree
                  data={DECISIONTREE_DATA}
                  resultHeading={"Based on your results..."}
                />
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

export default CombinedPage;
