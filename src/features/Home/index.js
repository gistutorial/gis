import React from 'react';
import { Link } from 'react-router';
import './Home.css';

export default () => (
  <div>
    <header className="jumbotron text-center banner">
      <div className="container">
        <p><i className="fa fa-globe fa-5x" aria-hidden="true"></i></p>
        <h1 className="display-3">GIS HUB</h1>
        <p className="lead">
          Where Inspiration Meets Discovery.
          GIS HUB aims to help new and aspiring professsionals find their way
          into GIS technology and programming.
        </p>
      </div>
    </header>
    <section className="container-fluid">
      <h2 className="display-4"><span className="badge badge-pill tag-gis">Tutorials</span></h2>
      <div className="card-columns">
        <Link className="card text-center card-link" to="/tutorials/intro-to-qgis">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Introduction to QGIS</h4>
            <p className="card-text text-muted">
            Learn how to use QGIS to do things.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-gis">Vector</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/what-is-gis">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">What is GIS?</h4>
            <p className="card-text text-muted">
            Learn more about what GIS is and how we
            can use it to solve real world issues.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/data-acquisition-with-usgs">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Remotely Sensed Data</h4>
            <p className="card-text text-muted">
              Data is available all around us, but how do we attain it? This tutorial shows
              us how to download remotely sensed satellite imagery from USGS Earth Explorer. Further information
              on band designation and band combinations are explained to better understand
              how to handle raster data.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-gis">Raster</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/toa-atmospheric-correction">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">TOA Atmospheric Correction</h4>
            <p className="card-text text-muted">
              Tutorial on atmospheric correction for the transformation of Digital Numbers. Get your feet wet with
              algorithims and raster calculation to undergo Top Of Atmosphere correction. This will allow the imagery
              to account for light scattering, sensor errors, and increase the overall quality.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-gis">Raster</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/cloud-masking">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Cloud Masking</h4>
            <p className="card-text text-muted">
              While there are multiple ways to undergo cloud masking, this tutorial
              will use Iso-clustering unsupervised classification method to group
              unwanted pixels that represent clouds, borders, etc. This step is
              suggested after completing the atmospheric correction (converting
              DN to Radiance to Reflectance), with either the TOA or COST methods.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-gis">Raster</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/thermal-band-conversion">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Thermal Infrared Sensor (TIRS) Conversion</h4>
            <p className="card-text text-muted">
              Thermal Infrared Sensor (TIRS) bands detect the thermal radiance and
              should be converted to TOA spectral radiance in order to convert into
              brightness temperature in Kelvins (K) using the methods in this tutorial.
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-gis">Raster</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/visualize-data-with-python">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Learn to visualize your data with Python and Seaborn</h4>
            <p className="card-text text-muted">
              Seaborn is a great visualization tool that is based similar to matplotlib, but with a more current and attractive design scheme
            </p>
            <p><span className="badge badge-pill tag-p">Python</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/intro-to-arcpy">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Introduction to using Arcpy</h4>
            <p className="card-text text-muted">
              A beginners guide that will help you explore the properties of the data you are working with including: dataset type, feature type, shape type, projection name, and dataset extent
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-p">Python</span></p>
          </div>
        </Link>
      </div>
    </section>
  </div>
);
