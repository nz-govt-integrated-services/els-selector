import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EceType from '../ece-type/ece-type';
import ComparisonTable from '../comparison-table/comparison-table';

import TABLE_DATA from '../../data/table-data.json';

import KINDY_DATA from '../../data/ece-types/kindergarten.json';
import KOHANGA_DATA from '../../data/ece-types/kohanga.json';

export default function Tupac() {
  const [selectedType, setSelectedType] = useState(null);

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={ selectedType ? 'col-8' : 'col-12' }>
          <ComparisonTable data={TABLE_DATA} handleClick={ handleClick } selectedType={selectedType}/>
        </div>
        {
          selectedType && (
            <div className="col-4">
              <h2>{selectedType}</h2>
              <EceType data={ KINDY_DATA } handleClick={ handleClick } />
            </div>
          )
        }
      </div>
    </div>
  )
}
