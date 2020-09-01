import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';
import EceType from '../components/ece-type/ece-type';

import DECISIONTREE_DATA from '../data/decision-tree.json';
import TABLE_DATA from '../data/table-data.json';
import KINDERGARTEN_DATA from '../data/ece-types/kindergarten.json';

function CombinedPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <EceType data={KINDERGARTEN_DATA} />
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
