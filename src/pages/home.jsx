import React from 'react';
import NavBar from '../components/navbar/navbar';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-4 pt-4">
          <div className="col-lg-4 py-4">
            <Link to="/decision-tree" className="link-not-blue">
              <div className="card">
                <h4 className="card-header">What's the right early learning for you?</h4>
                <div className="card-body">Find out which type of centre you should go to with our very cool and extremely interactive quiz.</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 py-4">
            <Link to="/table" className="link-not-blue">
              <div className="card">
                <h4 className="card-header">Compare types of early learning service</h4>
                <div className="card-body">Not sure where to start looking?</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 py-4">
            <Link to="/combined" className="link-not-blue">
              <div className="card">
                <h4 className="card-header">A third thing</h4>
                <div className="card-body">This goes to the two things combined</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
