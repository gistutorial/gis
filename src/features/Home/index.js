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
      <Link className="card text-center card-link" to="/tutorials/interactive-plotting-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Interactive Plotting with R </h4>
            <p className="card-text text-muted">
            Plotly is a great open source library that allows for easy, and comprehensive access to interactive 
            plots, perfect for data scientists who want to showcase their work to the world. 
            </p>
            <p><span className="badge badge-pill tag-data">Data</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
      </Link>
      <Link className="card text-center card-link" to="/tutorials/visualize-data-with-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Visualize Data with R </h4>
            <p className="card-text text-muted">
            Learn how to visualize data with R using its statistical packages. Plot comprehensive 
            bar and line plots, time-series, and even box plots. 
            </p>
            <p><span className="badge badge-pill tag-data">Data</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
      </Link>
      <Link className="card text-center card-link" to="/tutorials/interactive-leaflet-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Creating an Interactive Leaflet w/ R </h4>
            <p className="card-text text-muted">
            This step by step tutorial will navigate through the basic ways of creating an interactive 
            leaflet with R. Use commuter time data from the US Census to find where people tend to have 
            the longest commute times in the Bay Area. 
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-vector">Vector</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
      </Link>
      <Link className="card text-center card-link" to="/tutorials/data-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Part 1: Obtaining Spatial Datasets w/ R</h4>
            <p className="card-text text-muted">
            Rather than manually downloading data, try using the various API's and packages available 
            through R! This will allow for less memory space and easier accessibility when working with 
            products such as MODIS raster data products, global biodiversity index, and so on. In this tutorial 
            we will primarily be taking a look at some of the sources for global datasets. 
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-vector">Vector</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-data">Data</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
      </Link>
      <Link className="card text-center card-link" to="/tutorials/us-data-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Part 2: Obtaining Spatial Datasets w/ R</h4>
            <p className="card-text text-muted">
            In this tutorial, we will primarily focus on obtaining national datasets with R. We will be looking at 
            how to access API's to tap into the US Census Bureau. Particularly, we will be looking at the 
            Gini income inequality index in the surrounding counties of Seattle, WA. In addition, we will dive into 
            acquiring the DEM data through FedData package. 
            </p>
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-vector">Vector</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-data">Data</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/spatial-r">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Remote Sensing Applications w/ R </h4>
            <p className="card-text text-muted">
            Get a glimpse into what R can do with spatial data. Explore introductory techniques in R
            needed to tackle spatial analysis includng: reading raster files, changing projection,
            stacking bands, and much more!
            </p>
            <p><span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-remotesensing">Remote Sensing</span> <span className="badge badge-pill tag-R">R</span>
            </p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/qgis-heat-map">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">QGIS: Temportal Analysis w/ Python </h4>
            <p className="card-text text-muted">
            Learn how to perform a temporal analysis on the storm event dataset using Python. This
            tutorial will go through some ways to auto-acquire data, to create a time-series.
            </p>
            <p><span className="badge badge-pill tag-qgis">QGIS</span> <span className="badge badge-pill tag-vector">Vector</span> <span className="badge badge-pill tag-p">Python</span>
            </p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/intro-to-qgis">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">QGIS: Visualizing Spatial Density </h4>
            <p className="card-text text-muted">
            Learn how to visualize spatial density of storm events in the United States by using tools
            available in QGIS. This tutorial will identify datasets and go through step-by-step instructions
            on how to best go about creating a choropleth map and a heatmap. See you there!
            </p>
            <p><span className="badge badge-pill tag-qgis">QGIS</span> <span className="badge badge-pill tag-vector">Vector</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/what-is-gis">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">What is GIS?</h4>
            <p className="card-text text-muted">
            Learn more about what GIS is and how we can use it to solve real world issues. This section
            will give us the basic synopsis of how we can apply GIS in regards to Human Health issues, land cover
            classification, environmental conservation, and natural disasters.
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
            <p><span className="badge badge-pill tag-gis">GIS</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-data">Data</span> <span className="badge badge-pill tag-remotesensing">Remote Sensing</span></p>
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
            <p><span className="badge badge-pill tag-arcgis">ArcGIS</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-remotesensing">Remote Sensing</span></p>
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
            <p><span className="badge badge-pill tag-arcgis">ArcGIS</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-remotesensing">Remote Sensing</span></p>
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
            <p><span className="badge badge-pill tag-arcgis">ArcGIS</span> <span className="badge badge-pill tag-raster">Raster</span> <span className="badge badge-pill tag-remotesensing">Remote Sensing</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/visualize-data-with-python">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Learn to visualize your data with Python and Seaborn</h4>
            <p className="card-text text-muted">
              Seaborn is a great visualization tool that is based similar to matplotlib, but with a more current and attractive design scheme
            </p>
            <p><span className="badge badge-pill tag-p">Python</span> <span className="badge badge-pill tag-data">Data</span></p>
          </div>
        </Link>
        <Link className="card text-center card-link" to="/tutorials/intro-to-arcpy">
          <div className="card-block">
            <h4 className="card-title jumbotron-heading">Introduction to using Arcpy</h4>
            <p className="card-text text-muted">
              A beginners guide that will help you explore the properties of the data you are working with including: dataset type, feature type, shape type, projection name, and dataset extent
            </p>
            <p><span className="badge badge-pill tag-arcgis">ArcGIS</span> <span className="badge badge-pill tag-p">Python</span></p>
          </div>
        </Link>
      </div>
    </section>
  </div>
);
