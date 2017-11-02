import React from 'react';
import { PrismCode } from 'react-prism';
import stacked_bands from './img/BandStack_JAN2.png';
import true_color_nov from './img/TrueColor_Nov.png';
import false_color_nov from './img/FalseColor_Nov.png';
import true_color_jan from './img/TrueColor_Jan.png';
import false_color_jan from './img/FalseColor_Jan.png';
import ndsi_nov from './img/NDSI_nov11.png';
import ndsi_jan from './img/NDSI_jan.png';
import projection from './img/projection.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">Introducing Remote Sensing w/ R</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Setting Up</h2>
        <p>
          Programming with R can be a powerful tool when dealing with spatial data, specifically raster. In this tutorial,
          we will dive into the basic tools to manuever around the spatial scene with R.
        </p>
        <p>
          Before starting, make sure to have the latest version of <a href= "https://www.r-project.org/"> R</a> and
          <a href= "https://www.rstudio.com/products/rstudio/download/"> R Studio</a> installed on your computer.
        </p>

        <h4 className="subsection">Installing Spatial Packages in R</h4>
        <p>
          Major spatial packages are readily available through CRAN, more information about the spatial capabilities in R can be found <a href="https://cran.r-project.org/web/views/Spatial.html"> here</a>.
        </p>
        <p>
          For our purposes, we will be using packages that are specialized in working with gridded spatial data such as the
          <a href="https://cran.r-project.org/web/packages/raster/index.html"> raster</a> package, which can support high level functions including:
            <ul>
              <li>data type conversions</li>
              <li>raster creations</li>
              <li>summarizing raster values</li>
              <li>calculating raster algebra</li>
              <li>manipulating raster extent & resolution</li>
            </ul>
        </p>
        <p>
          Other useful spatial packages include:
          <a href="https://cran.r-project.org/web/packages/rgdal/rgdal.pdf"> rgdal </a>,
          <a href="https://cran.r-project.org/web/packages/rgeos/index.html"> rgeos</a>, and
          <a href="https://cran.r-project.org/web/packages/maptools/maptools.pdf"> maptools</a>.
        </p>
        <p>
          Start by installing the packages in your session of R and loading them into your library.
          <pre><PrismCode className="language-python">{InstallPackages}</PrismCode></pre>

        </p>

        <p>
          <h4 className="subsection">Downloading Data w/ USGS</h4>
          For a step-by-step instruction on how to download raster tiles via USGS portal
          see the Data Acquisition section in the previous tutorial <a href="tutorials/data-acquisition-with-usgs">Remotely Sensed Data</a>.

          <div className="table-responsive spacing ">
            <table className="table table-hover">
              <thead className="thead-inverse">
              <tr>
                <th>TILE ID</th>
                <th>ACQUISITION DATE</th>
                <th>PATH</th>
                <th>ROW</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>LC08_L1TP_043033_20161111_20170219_01_T1</td>
                <td>11-NOV-16</td>
                <td>43</td>
                <td>33</td>
              </tr>
              <tr>
                <td>LC08_L1TP_043033_20161229_20170218_01_T1</td>
                <td>29-DEC-16</td>
                <td>43</td>
                <td>33</td>
              </tr>
              <tr>
                <td>LC08_L1TP_043033_20170130_20170218_01_T1</td>
                <td>30-JAN-17</td>
                <td>43</td>
                <td>33</td>
              </tr>
              </tbody>
            </table>
          </div>
        </p>
      </section>

      <section>
        <h2 className="display-5">Reading Raster Files</h2>
        <p>
          For this tutorial, we are using raster tiles obtained from the USGS site which are specified above.
          <pre><PrismCode className="language-python">{readraster}</PrismCode></pre>
        </p>
      </section>

      <section>
        <h2 className="display-5">Stacking Raster Files</h2>
        <p>
          Raster tiles (.tif) can be stacked and viewed simultaneously in R Studio. 
          <pre><PrismCode className="language-python">{stackraster}</PrismCode></pre>
        </p>
      <figure className="figure">
        <img src={stacked_bands} className="figure-img img-fluid" alt="" />
      </figure>
    </section>

    <section>
        <h2 className="display-5">Changing Projection</h2>
        <p>
          The spatial data that we use for our various projects can have different projections. 
          In many cases, the projections need to be uniform, or there may be cases where certain functions
          will only accepts a specific projection types. Therefore, it is important to know how to freely 
          modify a projection. First, let us see which coordinate system we are dealing with.  
          <figure className="figure spacing">
            <img src={projection} className="figure-img img-fluid" alt="" />
          </figure>
          <pre><PrismCode className="language-python">{change_projection}</PrismCode></pre>
        </p>
      </section>

    <section>
        <h2 className="display-5">Defining RGB</h2>
        <p>
          The color composition of a stacked imagery can significantly change depending upon
          the band designated for RGB. For example, when working specifically with Landsat 8 imagery, 
          a true-color-composite can be created by assigning the band 4 to Red, band 3 to Green, and 
          band 2 to blue. Likewise, a false-color-composite i.e. an image highlighting vegetation in red
          can be created by assigning the Red band to NIR or band 5. 
          <pre><PrismCode className="language-python">{colorcomposite}</PrismCode></pre>
        </p>

          <figure className="figure imgContainer imgHolder_light">
            <img src={true_color_nov} className="figure-img img-fluid" alt="" />
            <span> Nov-11-2016 </span>
          </figure>

          <figure className="figure imgContainer imgHolder_light">
            <img src={true_color_jan} className="figure-img img-fluid" alt="" />
            <span> Jan-30-2017 </span>
          </figure>

          <figure className="figure imgContainer imgHolder_light">
            <img src={false_color_nov} className="figure-img img-fluid" alt="" />
            <span> Nov-11-2016 </span>
        </figure>

          <figure className="figure imgContainer imgHolder_light">
            <img src={false_color_jan} className="figure-img img-fluid" alt="" />
            <span> Jan-30-2017 </span>
          </figure>

        </section>

    <section>
        <h2 className="display-5">Raster Calculation</h2>
        <p>
          By plugging in specific bands in an algorithm can be used to detect specific land cover classifications
          such as vegetation, clouds, urban areas, snow/ice, etc. In this exercise, we will be calculating
          the Normalized Difference Snow Index (NDSI) where the Green band 3 (wavelengths: 0.533 - 0.590) 
          and SWIR band 6 (wavelengths: 1.566 - 1.651). Note: NDSI values above 0.8 are likely to be snow or ice. 
          Find more info on Landsat 8 <a href="https://landsat.usgs.gov/landsat-8-l8-data-users-handbook-section-4"> here</a>.
          <pre><PrismCode className="language-python">{rastercalc}</PrismCode></pre>
        </p>
        <figure className="figure imgContainer imgHolder">
          <img src={ndsi_nov} className="figure-img img-fluid" alt="" />
          <span> Nov-11-2016 </span>
        </figure>
        <figure className="figure imgContainer imgHolder">
          <img src={ndsi_jan} className="figure-img img-fluid" alt="" />
          <span> Jan-30-2017 </span>
        </figure>
    </section>

    </div>
  </div>
);

const InstallPackages=`# Install packages
install.packages(“raster”)

# Load packages
library(raster)

# OR Install & Load multiple packages
my_packages <- c("raster", "rgeos", "rgdal", "maptools")
install.packages(c("raster", "rgeos", "rgdal", "maptools"))
lapply(my_packages, require, character.only = TRUE)
`;

const readraster=`# Access directory
setwd("/Users/.../Downloads/FOLDERNAME")

# Read files and save corresponding to each band
band1=raster("band1.tif")
band2=raster("band2.tif")
band3=raster("band3.tif")

# Information including: class, dimensions, resolution, extent, coordinate ref
band1

# Visualize each band using plot()
plot(band1)
`;

const stackraster=`
# Read "TIF" files into a list
rlist=list.files(pattern="TIF$", full.name=TRUE)

# Create a raster stack
rasters = stack(rlist)

# Can identify names of raster files in stack
names(rasters)

# Visualize raster tiles
plot(rasters)

`;

const change_projection=`# Find info on current projection  
rasters

# Modify projection to longlat by calling the projectRaster() function
# Note: stacked variables will take more time to process than individual bands
rasters <- projectRaster(rasters, crs='+proj=longlat')

# Change back to previous projection 
x = "+proj=utm +zone=10 +datum=WGS84 +units=m +no_defs +ellps=WGS84 +towgs84=0,0,0"
rasters <- projectRaster(rasters, crs=x)
`;

const colorcomposite=`# True Color Composite Note: stretch attribute can increase the contrast of the image ("lin" or "hist") 
plotRGB(rasters,r=4,g=3,b=2,stretch="hist")

# False Color Composite
plotRGB(rasters,r=5,g=4,b=3,stretch="hist")
`;

const rastercalc=`# NDSI - Normalized Difference Snow Index  
ndsi=(rasters$B3-rasters$B6)/(rasters$B3+rasters$B6)
plot(ndsi) # -1 to 1
`;

