import React from 'react';
import NavBar from '../components/navbar/navbar';
import AssistanceType from '../components/assistance-type/assistance-type';

import ASSISTANCETYPE_DATA from '../data/assistance-types.json';

function FinancialHelpPage() {
  return (
    <div>
      <NavBar />
      <div className="container py-4">
        <h1 className="mb-4">What financial help could you get?</h1>
        <div className="row">
          {
            ASSISTANCETYPE_DATA.map((type, index) => (
              <div className="col-4">
                <AssistanceType data={type} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FinancialHelpPage;
