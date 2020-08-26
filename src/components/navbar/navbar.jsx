import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

export default function NavBar(props) {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-lavender">
      <a class="navbar-brand" href="#">Start Well</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <Link to="/combined" className="nav-link">Combined</Link>
          </li>
          <li class="nav-item">
            <Link to="/table" className="nav-link">Table</Link>
          </li>
          <li class="nav-item">
            <Link to="/decision-tree" className="nav-link">Decision tree</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
