import React from 'react';
import { PrismCode } from 'react-prism';
import sinusoidal from './img/sinusoidal.jpg';
import brasilshp from './img/brasilshp.png';
import dotchart from './img/dotchart.png';
import pop_gdp from './img/pop_gdp.png';
import pop_bio_world from './img/Pop_bio_world.png';

export default () => (
    <div>
        <header className="jumbotron text-xs-center banner">
        <div className="container">
            <h1 className="jumbotron-heading">Obtaining Spatial Datasets w/ R</h1>
        </div>
        </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Intro to Datasets</h2>
        <p>
        There are various ways that allow access to raster imagery and products through custom functions in R. 
        For example, the <a href="https://cran.r-project.org/web/packages/MODIS/MODIS.pdf"> MODIS </a> 
        package allows access to specific products and tiles. 
        </p>
        <p>
        There are also vector data such as country boundary maps offered by 
        <a href="https://cran.r-project.org/web/packages/rworldmap/rworldmap.pdf"> rworldmap</a> and/or 
        <a href="http://www.gadm.org/"> GADM</a>. 
        </p>
       </section>

       <section>
       <h2 className="display-5">MODIS Data</h2>
       <p>
        The MODIS package is equipped to obtain MODIS tiles from both Terra and Aqua satellites. 
        Allows for both the downloading and processing of imagery from the global online data archives 
        (LPDAAC and LAADS). The major processing functionalities include: file conversion, time series, and mosaiking. 
       </p>  
       <p>
        Here are some of the product names and the descriptions, which we will refer back to when downloading the tiles. 
        </p>  
       <div className="table-responsive spacing ">
            <table className="table table-hover">
              <thead className="thead-inverse">
              <tr>
                <th>Product ID [Terra/Aqua]</th>
                <th></th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>MOD09</td>
                <td>MYD09</td>
                <td>Surface Reflectance</td>
              </tr>
              <tr>
                <td>MOD11</td>
                <td>MYD11</td>
                <td>Surface temperature and emissivity</td>
              </tr>
              <tr>
                <td>MOD43</td>
                <td>MCD43</td>
                <td>Nadir BRDF-adjusted Reflectance</td>
              </tr>
              <tr>
                  <td>MOD13</td>
                  <td>MYD13</td>
                  <td>Vegetation indices: Phenological measures (eg. season shift index); change vector magnitude; integrated vegetation indices</td>
              </tr>
              <tr>
                  <td>MOD15</td>
                  <td>---</td>
                  <td>Leaf Area Index(LAI)/FPAR</td>
              </tr>
              <tr>
                  <td>MOD17</td>
                  <td>---</td>
                  <td>Gross primary productivity (GPP), Net photosynthesis</td>
              </tr>
              <tr>
                  <td>MCD12</td>
                  <td>---</td>
                  <td>Land cover and change</td>
              </tr>
              </tbody>
            </table>
            <p className= "spacing">
                MODIS tiles can be referenced by the h and v values, which are illustrated
                in the sinusoidal world grid below. These values are used to call specific tiles 
                or ranges of tiles when downloading. More info on general MODIS data visit 
                <a href="https://lpdaac.usgs.gov/dataset_discovery/modis">  here</a>.
            </p>
            <figure className="figure">
            <img src={sinusoidal} className="figure-img img-fluid" alt="" />
          </figure>
          </div>
       <pre><PrismCode className="language-python">{MODISPackage}</PrismCode></pre>
        </section> 

        <section>
       <h2 className="display-5">GADM & Google Basemap</h2>
       <p>
        The Raster package has a getData() functionality, which allows access to libraries and datasets 
        from GADM. The shapefiles include country boundaries (according to level) and can be overlayed ontop
        of a basemap, such as Google, OpenStreetMap, etc. The polygons can also be used to merged point vector files 
        to help create density maps.  
       </p>    
       <pre><PrismCode className="language-python">{RasterPackage}</PrismCode></pre>
        <figure className="figure">
            <img src={brasilshp} className="figure-img img-fluid" alt="" />
          </figure>   
        </section>  
        <section>
       <h2 className="display-5">RWorldMap</h2>
       <p>
        The <a href ="https://cran.r-project.org/web/packages/rworldmap/rworldmap.pdf"> RWorldMap</a> package can be useful when 
        working globally. Not only does it contain the spatial boundaries of the world map, it also allows easy access to example datasets 
        from the 2008 Environmental Performance Index. Some of the attributes include: 
        <ul>
              <li>Global Population (2005)</li>
              <li>Environmental Health </li>
              <li>Air Quality</li>
              <li>Climate</li>
              <li>Productive Natural Resources</li>
              <li>Biodiversity  </li>
              <li>Water </li>
              <li>GDP per capita</li>
            </ul>
       </p>   
       <h4 className="subsection">Plotting Environmental Health Ranking By Region</h4> 
        <figure className="figure">
            <img src={dotchart} className="figure-img img-fluid" alt="" />
        </figure>   
        <pre><PrismCode className="language-python">{rworldmap}</PrismCode></pre>

        <h4 className="subsection">Bar Chart: Population vs. GDP</h4> 
        <figure className="figure">
            <img src={pop_gdp} className="figure-img img-fluid" alt="" />
        </figure> 
        <pre><PrismCode className="language-python">{rworldmap2}</PrismCode></pre>
        
        <h4 className="subsection">Biodiversity Rating By Population</h4> 
        <figure className="figure">
            <img src={pop_bio_world} className="figure-img img-fluid" alt="" />
        </figure>  
        <pre><PrismCode className="language-python">{rworldmap3}</PrismCode></pre>
        </section>  

     </div>
    </div>

);

const MODISPackage=`# load MODIS package
library(MODIS)

a <- getHdf(HdfName = c("MYD11A1.A2009001.h18v04.006.2015363221538.hdf",
"MYD11A1.A2009009.h18v04.006.2015364055036.hdf",
"MYD11A1.A2009017.h18v04.006.2015364115403.hdf"))
a

c <- getHdf(product = "M.D11A1", begin = "2016306", end = "2016335",
extent = "Luxembourg")
c

d <- getHdf(product = "M.D11A1")
d
`;

const RasterPackage=`# load raster and ggmap libraries
library(raster)
library(ggmap)

# Use getData() to download country boundaries for BRA
brazil <- getData('GADM', country='BRA', level=1)
plot(brazil)

# Add Google basemap using ggmap
# Change projection 
brazil <- spTransform(brazil, CRS("+init=epsg:4326")) 

# convert to a dataframe
data <- fortify(brazil)

# plot basemap using qmap() and country boundaries obtained from GADM using geom_polygon() 
qmap('brazil', maptype = 'satellite', zoom=4) +
  geom_polygon(aes(x = long, y = lat, group = group), data = data,
               colour = 'white', fill = 'white', alpha = .2, size = .3)
`;

const rworldmap=`# load rworldmap library
library(rworldmap)

# view simple world boundary map 
worldmap <- getMap(resolution = "coarse")
plot(worldmap)

# Call example dataset
data(countryExData)

# Group data and calculate mean by grouped regions
# regionTypes must be: "GEO3", "GEO3major", "IMAGE24", "GLOCAF", "Stern", "SRES", "SRESmajor" or "GBD"
MeanEnvHealth <- country2Region(inFile=countryExData
    ,nameDataColumn="ENVHEALTH"
    ,joinCode="ISO3"
    ,nameJoinColumn="ISO3V10"
    ,regionType="Stern"
    ,FUN='mean'
)
# Use dotchart() to visualize the countries sorted by ENV Health ratings
dotchart(sort(sternEnvHealth[,1]), xlab='Environmental Health', bg='lightblue')
`;

const rworldmap2=`# Read sample data into a dataframe
dF <- getMap()@data

# Call functionality mapBars()
# Specify data, varibales 'nameZs', map region, bar orientation, etc. 
mapBars( dF,nameX="LON", nameY="LAT",nameZs=c('POP_EST','GDP_MD_EST'), mapRegion='asia',
        symbolSize=20, barOrient = 'horiz', oceanCol='lightblue', landCol="white" )
`;

const rworldmap3=`# Read sample data 
data("countryExData",envir=environment(),package="rworldmap")

# Join country data to map
sPDF <- joinCountryData2Map(countryExData,joinCode = "ISO3"
                            ,nameJoinColumn = "ISO3V10")

# Use mapBubbles() functionality to specify population data as size, and biodiversity as colors
# Biodiversity ratings are categorized into 4 ranges using quantile method 
mapBubbles(sPDF, nameZSize="POP_EST",nameZColour="BIODIVERSITY"
           ,colourPalette=adjustcolor(palette(), alpha.f = 0.5),numCats=4,catMethod="quantiles")
`;