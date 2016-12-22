import React from 'react';

export default () => (
  <nav className="navbar navbar-static-top navbar-dark bg-inverse bg-faded">
    <div className="container">
      <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
      <a className="navbar-brand" href="#">GIS HUB</a>
      <div className="collapse navbar-toggleable-md" id="navbarResponsive">
        <ul className="nav navbar-nav float-lg-right">
          <li className="nav-item active">
            <a className="nav-link" href="#">GIS <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
