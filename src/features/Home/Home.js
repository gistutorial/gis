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
          <div className="card card-block text-xs-center">
            <h4 className="card-title jumbotron-heading">What is GIS?</h4>
            <p className="card-text text-muted">
            Learn more about what GIS is and how we
            can use it to solve real world issues.
            </p>
            <Link className="btn btn-info" to="/tutorials/what-is-gis">LEARN MORE</Link>
          </div>
          <div className="card card-block text-xs-center">
            <h4 className="card-title jumbotron-heading">GIS Data</h4>
            <p className="card-text text-muted">
              What is the difference between supervized and unsupervized classification?
              Learn it here! Find out about cool spatial analysis and geoprocessing tools
              on softwares such as ENVI and ArcGIS.
            </p>
            <Link className="btn btn-info" to="/tutorials/GISData">LEARN MORE</Link>
          </div>
          <div className="card card-block text-xs-center">
            <h4 className="card-title jumbotron-heading">TOA Atmospheric Correction</h4>
            <p className="card-text text-muted">
              Tutorial on atmospheric correction for the transformation of Digital Numbers.
            </p>
            <Link className="btn btn-info" to="/tutorials/toa-atmospheric-correction">LEARN MORE</Link>
          </div>

        </div>
      </div>
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <div className="card card-block text-xs-center">
            <h4 className="card-title jumbotron-heading">Cloud Masking</h4>
            <p className="card-text text-muted">
              While there are multiple ways to undergo cloud masking, this tutorial
              will use Iso-clustering unsupervised classification method to group
              unwanted pixels that represent clouds, borders, etc. This step is
              suggested after completing the atmospheric correction (converting
              DN to Radiance to Reflectance), with either the TOA or COST methods.
            </p>
            <Link className="btn btn-info" to="/tutorials/cloud-masking">LEARN MORE</Link>
          </div>
          <div className="card card-block text-xs-center">
            <h4 className="card-title jumbotron-heading">Thermal Infrared Sensor (TIRS) Conversion</h4>
            <p className="card-text text-muted">
              Thermal Infrared Sensor (TIRS) bands detect the thermal radiance and
              should be converted to TOA spectral radiance in order to convert into
              brightness temperature in Kelvins (K) using the methods in this tutorial.
            </p>
            <Link className="btn btn-info" to="/tutorials/thermal-band-conversion">LEARN MORE</Link>
          </div>

        </div>
      </div>
    </section>




  </div>
);

/*

<div className="card text-xs-center">
  <img className="card-img-top img-fluid" src={learnGIS} alt="Card image cap"/>
  <div className="card-block">
    <h4 className="card-title jumbotron-heading">WHAT IS GIS?</h4>
    <p className="card-text text-muted">
      Learn more about what GIS is and how we
      can use it to solve real world issues.
    </p>
  </div>
</div>

        <div className="card">
          <img className="card-img-top img-fluid" src={learnGIS} alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div className="card card-block card-inverse card-primary text-xs-center">
          <blockquote className="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer>
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card card-block text-xs-center">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>

        <div className="card">
          <img className="card-img img-fluid" src={learnGIS} alt="Card image" />
        </div>

        <div className="card card-block text-xs-right">
          <blockquote className="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>

 */
