import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-impendingstorm--deep">
      <NavLink exact to="/" className="navbar-brand" activeClassName="active">Start Well</NavLink>
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
          <li className="nav-item">
            <NavLink to="/decision-tree" className="nav-link" activeClassName="active">Select an ECE Type</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/table" className="nav-link" activeClassName="active">ECE Comparison</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/financial-help" className="nav-link" activeClassName="active">Financial help</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
