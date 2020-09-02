import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';
import EceType from '../components/ece-type/ece-type';

import DECISIONTREE_DATA from '../data/decision-tree.json';
import TABLE_DATA from '../data/table-data.json';
import KINDERGARTEN_DATA from '../data/ece-types/kindergarten.json';
import KOHANGA_DATA from '../data/ece-types/kohanga.json';
import PLAYGROUP_DATA from '../data/ece-types/playgroup.json';
import TEMPLATE_DATA from '../data/ece-types/template.json';

function CombinedPage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <EceType data={KINDERGARTEN_DATA} />
        <EceType data={KOHANGA_DATA} />
        <EceType data={PLAYGROUP_DATA} />
        <EceType data={TEMPLATE_DATA} />
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
