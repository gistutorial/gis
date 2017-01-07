import React from 'react';
import { Link } from 'react-router';

function routeChange() {
  document.getElementById('navbarResponsive').className = 'navbar-toggleable-xs collapse';
}

export default () => (
  <nav className="navbar navbar-static-top navbar-dark bg-inverse bg-faded">
    <div className="container">
      <div className="clearfix">
        <button className="navbar-toggler float-xs-right hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <a className="navbar-brand hidden-sm-up" href="/">GIS HUB</a>
      </div>
      <div className="navbar-toggleable-xs collapse" id="navbarResponsive" aria-expanded="false">
        <ul className="nav navbar-nav">
          <li className="nav-item hidden-xs-down active">
            <a className="nav-item nav-link active" href="#">GIS HUB</a>
          </li>
          <ul className="nav navbar-nav float-sm-right">
            <li onClick={routeChange} className="nav-item">
              <Link className="nav-item nav-link" to="about">About</Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
);
