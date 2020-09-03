import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

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
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/process" className="nav-link" activeClassName="active">Process</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/decision-tree" className="nav-link" activeClassName="active">Decision tree</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/table" className="nav-link" activeClassName="active">Table</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
