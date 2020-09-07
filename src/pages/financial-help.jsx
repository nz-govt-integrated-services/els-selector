import React from 'react';
import NavBar from '../components/navbar/navbar';

function FinancialHelpPage() {
  return (
    <div>
      <NavBar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1>What financial help can you get?</h1>
            <ul>
              <li>20 Hours Free ECE</li>
              <li>Childcare Subsidy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialHelpPage;
