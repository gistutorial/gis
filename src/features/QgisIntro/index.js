import React from 'react';
import Choropleth_Style from './img/Choropleth_Style.png';
import PNTS_POLY from './img/PNTS_POLY.png';
import final_SE_Choro_16 from './img/final_SE_Choro_16.png';
import Add_DTL from './img/Add_DTL.png';
import Add_DTL_Options from './img/Add_DTL_Options.png';
import SE_16_Vector from './img/SE_16_Vector.png';
import PNTS_POLY_Options from './img/PNTS_POLY_Options.png';
import Classify_HeatMap from './img/Classify_HeatMap.png';
import Color_HM from './img/Color_HM.png';
import final_HM_Choro_16 from './img/final_HM_Choro_16.png';
import Initial_HM from './img/Initial_HM.png';
import HM_plugin from './img/HM_plugin.png';
import HM_Preference from './img/HM_Preference.png';
import Plugin_manage from './img/Plugin_manage.png';
import Raster_HM_btn from './img/Raster_HM_btn.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">QGIS: Visualizing Spatial Density</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Intro: Data Acquisition</h2>
        <p>
          To start spatially visualizing data, we first need to acquire datasets from a preferablly
          credible source. In today's excercise, we will use a dataset compiled from <b>NOAA's National Weather
          Services</b> available <a href="https://www.ncdc.noaa.gov/stormevents/ftp.jsp"> here</a>. The dataset 
          reports storm events across the nation from January 1950 to September 2016.
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

        <figure className="figure">
          <img src={Add_DTL_Options} className="figure-img img-fluid" alt="" />
        </figure>

        <p>
          The projection that is commonly used is the <b>"WGS 84"</b>, and once that is set the resulting
          vector file should look like this:
        </p>
        <figure className="figure">
          <img src={SE_16_Vector} className="figure-img img-fluid" alt="" />
        </figure>


        <div className = "top-padding card">
          <div className = "card-block gray-cardblock">
            <h1 className = "display-5"> Option A: Creating a Choropleth Map</h1>
          </div>
        </div>

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

      <section>

        <div className = "top-padding card">
          <div className = "card-block gray-cardblock">
            <h1 className = "display-5"> Option B: Creating a HeatMap</h1>
              <p>
                Another way of visualizing spatial density of a dataset is to create a heatmap. Unlike the previous example
                above, the heatmap will allow the cumulative representation of storm events without the division of
                political boundaries, in this case states.
              </p>
          </div>
        </div>

        <h2 className="display-5">Install Plug-in</h2>
        <p>
          Navigate to the <b>"Plug-In"</b> tab and click <b>"Manage and Install Plugins..."</b>.
          This will allow you to access the list of available plugins for QGIS. The one that we
          are primarily interested in is called <b>"Heatmap"</b>.
        </p>
        <p>
          Begin by typing out the word in the search inbox and the list should filter out to show
          only relevant results. Once the correct one is identified, go ahead and <b>check the box</b>
          to activate it. This particular plugin should already be  within the installed folder, but
          requires this step for it to show up in the tools bar.
        </p>
          <figure className="figure">
            <img src={Plugin_manage} className="figure-img img-fluid" alt="" />
          </figure>

          <figure className="figure">
            <img src={HM_plugin} className="figure-img img-fluid" alt="" />
          </figure>

          <p>
            After the previous step, locate the <b>"Raster"</b> tab on the top, and go down to the
            bottom of the list until you see <b>"Heatmap"</b> and click on that.
          </p>

          <figure className="figure">
            <img src={Raster_HM_btn} className="figure-img img-fluid" alt="" />
          </figure>

          <p>
            In the first box, add the storm events vector file that was opened in QGIS
            as a delimited textfile. Go ahead and identify a pathname and a <b>new file name</b>
            for the raster layer.
          </p>
          <p>
            For the <b>"Radius"</b> change the value to <b>"50000"</b> and keep the units
            as <b>"layer units"</b>. Go through the <b>"Advanced"</b> section, the pre-determined
            setting should suffice for what we are doing today. Finally, click <b>"OK"</b> and
            the new layer should populate on the screen.
          </p>

          <figure className="figure">
            <img src={HM_Preference} className="figure-img img-fluid" alt="" />
          </figure>


      <h2 className="display-5">Initial HeatMap Product</h2>
      The initial layer after applying the heatmap plugin will look something like this. The grayscale
      is set as the predetermined setting and can be changed as indicated in the next section.

          <figure className="figure">
            <img src={Initial_HM} className="figure-img img-fluid" alt="" />
          </figure>

      <h2 className="display-5">Coloring & Symbology</h2>
        <p>
          To better visualize the density, representing the total storm events by the level of frequency we will go
          into the symbology options by right clicking, selecting <b>"Properties"</b>, and going in <b>"Style"</b>.
        </p>
        <p>
          Once in the <b>"Style"</b> tab, from the dropdown list select <b>"Singleband pseudocolor"</b> where
          Select the color ramp option that illustrates a gradation of color which increases in intensity in relation
          to the value. Be sure to click <b>"Classify"</b> to populate the unique values in the field and to group them as
          appropriately (continous, etc).
        </p>

          <figure className="figure">
            <img src={Color_HM} className="figure-img img-fluid" alt="" />
          </figure>

          <figure className="figure">
            <img src={Classify_HeatMap} className="figure-img img-fluid" alt="" />
          </figure>

      <h2 className="display-5">Final Storm Event Heatmap</h2>
      <p> 
        <b>The final product should be a representation of spatial density of storm events in the year
        2016.</b> It is evident from the map that the majority of storms occured in the <b>East and Mid-Eastern</b>
        part of the U.S. This is pretty consistent from what we found with the choropleth in the previous section.
        Now that we have seen a basic overview of how we can represent spatial components of a dataset, lets
        see if we can find any <b>spatio-temporal patterns</b>, until next time!
      </p>
          <figure className="figure">
            <img src={final_HM_Choro_16} className="figure-img img-fluid" alt="" />
          </figure>

      </section>

    </div>
  </div>
);
