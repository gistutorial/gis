import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-static-top navbar-dark bg-inverse bg-faded">
    <div className="container">
      <a className="navbar-brand" href="#">GIS HUB</a>
    </div>
  </nav>
);

/*

<div className="container">
  <div className="float-xs-right"><button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button></div>
  <a className="navbar-brand" href="#">GIS HUB</a>
  <div className="collapse navbar-toggleable-md" id="navbarResponsive">
    <ul className="nav navbar-nav float-lg-right">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tutorials</a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="responsiveNavbarDropdown">
          <Link className="dropdown-item" to="tutorials/data-acquisition-with-usgs">Data Acquisition with USGS</Link>
          <Link className="dropdown-item" to="tutorials/what-is-gis">What is GIS</Link>
          <Link className="dropdown-item" to="tutorials/toa-atmospheric-correction">Atmospheric Correction</Link>
          <Link className="dropdown-item" to="tutorials/cloud-masking">Cloud Masking</Link>
          <Link className="dropdown-item" to="tutorials/thermal-band-conversion">Thermal Band Conversion</Link>
        </div>
      </li>
    </ul>
  </div>
</div>
 */
