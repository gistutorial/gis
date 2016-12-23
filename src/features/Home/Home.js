import React from 'react';
import { Link } from 'react-router';
import './Home.css';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-3">GIS HUB</h1>
        <h1 className="jumbotron-heading">Geographical Information Science</h1>
        <p className="lead">
          Where Inspiration Meets Discovery.
          GIS HUB aims to help new and aspiring professsionals find their way
          into GIS technology and programming.
        </p>
      </div>
    </header>

    <section className="container">
      <h2 className="display-3"><span className="tag tag-pill tag-info">GIS</span></h2>
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <Link className="card card-block text-xs-center card-link" to="/tutorials/what-is-gis">
            <h4 className="card-title jumbotron-heading">What is GIS?</h4>
            <p className="card-text text-muted">
            Learn more about what GIS is and how we
            can use it to solve real world issues.
            </p>
          </Link>
          <Link className="card card-block text-xs-center card-link" to="/tutorials/data-acquisition-with-usgs">
            <h4 className="card-title jumbotron-heading">GIS Data</h4>
            <p className="card-text text-muted">
              What is the difference between supervized and unsupervized classification?
              Learn it here! Find out about cool spatial analysis and geoprocessing tools
              on softwares such as ENVI and ArcGIS.
            </p>
          </Link>
          <Link className="card card-block text-xs-center card-link" to="/tutorials/toa-atmospheric-correction">
            <h4 className="card-title jumbotron-heading">TOA Atmospheric Correction</h4>
            <p className="card-text text-muted">
              Tutorial on atmospheric correction for the transformation of Digital Numbers.
            </p>
          </Link>

        </div>
      </div>
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <Link className="card card-block text-xs-center card-link" to="/tutorials/cloud-masking">
            <h4 className="card-title jumbotron-heading">Cloud Masking</h4>
            <p className="card-text text-muted">
              While there are multiple ways to undergo cloud masking, this tutorial
              will use Iso-clustering unsupervised classification method to group
              unwanted pixels that represent clouds, borders, etc. This step is
              suggested after completing the atmospheric correction (converting
              DN to Radiance to Reflectance), with either the TOA or COST methods.
            </p>
          </Link>
          <Link className="card card-block text-xs-center card-link" to="/tutorials/thermal-band-conversion">
            <h4 className="card-title jumbotron-heading">Thermal Infrared Sensor (TIRS) Conversion</h4>
            <p className="card-text text-muted">
              Thermal Infrared Sensor (TIRS) bands detect the thermal radiance and
              should be converted to TOA spectral radiance in order to convert into
              brightness temperature in Kelvins (K) using the methods in this tutorial.
            </p>
          </Link>

        </div>
      </div>
    </section>

  </div>
);
