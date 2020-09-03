import React, { useState } from 'react';

import { Link } from "react-router-dom";

export default function NavBar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-impendingstorm--deep">
      <a className="navbar-brand" href="#">Start Well</a>
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
              aria-expanded={!isNavCollapsed ? true : false}
              onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link to="/process" className="nav-link">Process</Link>
          </li>
          <li className="nav-item">
            <Link to="/decision-tree" className="nav-link">Decision tree</Link>
          </li>
          <li className="nav-item">
            <Link to="/table" className="nav-link">Table</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
