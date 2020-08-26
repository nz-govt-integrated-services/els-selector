import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import NavBar from '../components/navbar/navbar';

import DECISIONTREE_DATA from '../data/decision-tree.json';

function DecisionTreePage() {
  return (
    <div>
      <NavBar />
      <div class="container">
          <DecisionTree
                  data={DECISIONTREE_DATA}
                  resultHeading={"Based on your results..."}
                />
      </div>
    </div>
  );
}

export default DecisionTreePage;
