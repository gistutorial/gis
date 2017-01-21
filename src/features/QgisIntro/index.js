import React from 'react';
import Choropleth_Style from './img/Choropleth_Style.png';
import PNTS_POLY from './img/PNTS_POLY.png';
import final_SE_Choro_16 from './img/final_SE_Choro_16.png';
import Add_DTL from './img/Add_DTL.png';
import Add_DTL_Options from './img/Add_DTL_Options.png';
import SE_16_Vector from './img/SE_16_Vector.png';
import PNTS_POLY_Options from './img/PNTS_POLY_Options.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">QGIS: Creating a Choropleth Map</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Intro: Data Acquisition</h2>
        <p>
          To start spatially visualizing data, we first need to acquire a dataset from a preferablly
          credible source. In today's excercise, we will use a data compiled from <b>NOAA's National Weather
          Services</b> avaiable <a href="https://www.ncdc.noaa.gov/stormevents/ftp.jsp"> here </a>that reports
          storm events across the nation from January 1950 to September 2016.
        </p>
        <p>
          There is the option to download the available dataset via FTP or HTTP servers. We will work
          primarily with the <b>year 2016</b> to get an initial understanding of spatial representation before
          we get into to temporal analysis using QGIS.
        </p>
        <p>
          In addition, to complete the first part of the tutorial we will also need a polygon shapefile
          of state boundary information of the U.S. Go ahead and download from the <b>Natural Earth</b> open-source
          site <a href="http://www.naturalearthdata.com/downloads/110m-cultural-vectors/"> here </a>. Once in
          the site, scroll down to the <b>"Admin 1- States,Provinces"</b> section and click on <b>"Download
          States and Provinces"</b>.
        </p>
        <h2 className="display-5">Adding Delimited Text File to QGIS</h2>
        <p>
          Once the required data is downloaded, make sure you are familiar with the attributes
          and the basic format of the datafile. Ready to begin the QGIS part? Great, let's start!
        </p>
        <p>
          From the <b>"Layers"</b> tab click the <b>"Add Delimited Text Layer"</b> under the <b>"Add Layer"</b> option.
        </p>

        <figure className="figure">
          <img src={Add_DTL} className="figure-img img-fluid" alt="" />
        </figure>
        <p>
          The projection that is commonly used is the <b>"WGS 84"</b>, and once that is set the resulting
          vector file should look like this:
        </p>
        <figure className="figure">
          <img src={SE_16_Vector} className="figure-img img-fluid" alt="" />
        </figure>

        <h2 className="display-5">Counting Points in Polygon</h2>
        <p>
          The first major tool we need is the <b>Points in Polygon</b> which can be accessed by
          going on the <b>"Vector"</b> tab > <b>"Analysis Tools"</b> > <b>"Count Points in Polygon"</b>
        </p>

        <figure className="figure">
          <img src={PNTS_POLY} className="figure-img img-fluid" alt="" />
        </figure>
        <p>
          The options for this tool are fairly simple, but one thing to make sure is that for the <b>polygon</b>
          field the shapefile of the U.S. State boundary downloaded from Natural Earth (see above)
          is selected, whereas the <b>points</b> field contains the storm events dataset from NOAA's NWS is selected.
        </p>
        <p>
          Then, just add a <b>new file name</b>, making sure it will save in the correct directory, and <b>click "Run"</b>.        </p>
        <figure className="figure">
          <img src={PNTS_POLY_Options} className="figure-img img-fluid" alt="" />
        </figure>

        <h2 className="display-5">Choropleth Symbology</h2>
        <p>
          The resulting layer should contain a count of all of the storm events in 2016 within each of the state
          boundary. The summation values can be seen when opening the <b>attribute table</b> by right clicking on the newly
          created layer.
        </p>
        <p>
          To better visualize the new count values, representing the total storm events by State we will go into the symbology
          options by right clicking, selecting <b>"Properties"</b>, and going in <b>"Style"</b>.
        </p>
        <p>
          Once in the <b>"Style"</b> tab, from the dropdown list select <b>"Categorized"</b> where <b>"Column"</b>
        is the field with the summation of storm events. Select the color ramp option that illustrates a gradation
         of color which increases in intensity in relation to the value. Be sure to click <b>"Classify"</b> to populate
         the unique values in the field and to group them as appropriately (equal interval, quantile, etc).
        </p>
        <figure className="figure">
          <img src={Choropleth_Style} className="figure-img img-fluid" alt="" />
        </figure>
        <p>Once the properties are selected, the final map production should look like the one below. This is a great way
        to not only spatially represent storm frequencies, but represent the data using familiar spatial divisions i.e. state boundaries. </p>
          <figure className="figure">
            <img src={final_SE_Choro_16} className="figure-img img-fluid" alt="" />
          </figure>
      </section>
    </div>
  </div>
);
