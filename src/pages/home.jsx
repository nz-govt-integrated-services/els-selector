import React from 'react';
import DecisionTree from '../components/decision-tree/decision-tree';
import ComparisonTable from '../components/comparison-table/comparison-table';
import NavBar from '../components/navbar/navbar';

import DECISIONTREE_DATA from '../data/decision-tree.json';
import TABLE_DATA from '../data/table-data.json';

function HomePage() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default HomePage;
