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
            <h1 className="mb-4">What type of early learning service is right for you?</h1>
            <p>Unsure which type of ELS will best suit your needs and the needs of your child and whānau? Simply select your preferred scenarios below and see what type of ELS we suggest might work for you.</p>
            <p>  </p>
            <p>All early learning services operate differently. Please arrange a visit with your shortlisted centres to make sure that they deliver on the criteria that is important to you. </p>
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
