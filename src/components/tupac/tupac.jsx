import React, { useState } from 'react';

import EceType from '../ece-type/ece-type';
import ComparisonTable from '../comparison-table/comparison-table';

import TABLE_DATA from '../../data/table-data.json';

import KINDY_DATA from '../../data/ece-types/kindergarten.json';
import KOHANGA_DATA from '../../data/ece-types/kohanga.json';
import AKOTEU_DATA from '../../data/ece-types/akoteu.json';
import AOGA_DATA from '../../data/ece-types/aoga.json';
import HOME_BASED_DATA from '../../data/ece-types/home-based.json';
import EDUCATION_AND_CARE_DATA from '../../data/ece-types/education-and-care.json';
import MONTESSORI_DATA from '../../data/ece-types/montessori.json';
import PLAYCENTRE_DATA from '../../data/ece-types/playcentre.json';
import PLAYGROUP_DATA from '../../data/ece-types/playgroup.json';
import PUNA_KOHUNGAHUNGA_DATA from '../../data/ece-types/puna-kohungahunga.json';
import PUNA_REO_DATA from '../../data/ece-types/puna-reo.json';
import STEINER_DATA from '../../data/ece-types/steiner.json';
import TE_KURA_DATA from '../../data/ece-types/te-kura.json';

export default function Tupac() {
  const [selectedType, setSelectedType] = useState(null);

  const handleClick = (type) => {
    setSelectedType(type);
  };

  const eceTypeData = {
    "kindergarten": KINDY_DATA,
    "kohanga": KOHANGA_DATA,
    "akoteu": AKOTEU_DATA,
    "aoga": AOGA_DATA,
    "education-and-care": EDUCATION_AND_CARE_DATA,
    "montessori": MONTESSORI_DATA,
    "playcentre": PLAYCENTRE_DATA,
    "playgroup": PLAYGROUP_DATA,
    "puna_kōhungahunga": PUNA_KOHUNGAHUNGA_DATA,
    "puna_reo": PUNA_REO_DATA,
    "steiner": STEINER_DATA,
    "te_kura": TE_KURA_DATA,
    "home_based": HOME_BASED_DATA
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={ selectedType ? 'col-8' : 'col-12' }>
          <ComparisonTable data={TABLE_DATA} handleClick={ handleClick } selectedType={selectedType}/>
        </div>
        {
          selectedType && (
            <div className="col-4">
              <EceType data={ eceTypeData[selectedType] } handleClick={ handleClick } />
            </div>
          )
        }
      </div>
    </div>
  )
}
