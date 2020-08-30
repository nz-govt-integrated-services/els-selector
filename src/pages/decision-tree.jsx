import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import NavBar from '../components/navbar/navbar';

import DECISIONTREE_DATA from '../data/decision-tree.json';

function DecisionTreePage() {
  return (
    <div>
      <NavBar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1>What type of early learning service is right for you?</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <DecisionTree
          data={DECISIONTREE_DATA}
          resultHeading={"Based on your results..."}
        />
      </div>
    </div>
  );
}

export default DecisionTreePage;
