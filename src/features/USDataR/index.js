import React from 'react';
import { PrismCode } from 'react-prism';
import tracts_baselayer from'./img/Tracts_BaseLayer.png';
import seattle_gini from'./img/GINI_Seatlle.png';
import seattle_gini2 from'./img/Gini_WAS.png';
import ElDorado from'./img/ElDorado.png';
import ClippedDEM from'./img/ClippedDEM.png';

export default () => (
    <div>
      <header className="jumbotron text-xs-center banner">
        <div className="container">
          <h1 className="display-4">National Spatial Datasets w/ R</h1>
        </div>
      </header>
      <div className="container-narrow">
        <section>
          <h2 className="display-5">Overview</h2>
          <p>
            This tutorial goes into how we can access and use spatial data within the U.S. The major datasets that 
            we will be looking at are primarily maintained by the federal government. 

            When looking at population counts, address information, and/or legal boundaries within the US 
            the Tiger or Topologically Integrated Geographic Encoding and Referencing datasets obtained 
            from the US Census Bureau. There are a couple of packages that support the access of these datasets including: 
            tiger and acs. 

            Furthermore, more environmentally related raster datasets such as Digital Elevation Models (DEM) or climate 
            data can be access through a package called FedData. 
            </p>

        </section> 
        <section>
        <h2 className="display-5">U.S. Census Data</h2>
        <h4 className="subsection">Getting Familiar with FIPS County Codes</h4>
        <p>To access the spatial boundaries, we must specify the FIPS code pertaining to each county.
        The specific FIPS code for counties and states can be searched through this .xlsx file provided by the US Census site: 
        <a href="https://www.census.gov/geographies/reference-files/2016/demo/popest/2016-fips.html"> FIPS Code</a>.
        For this tutorial, we will be working with the FIPS codes in the Bay Area:
        </p>
        <table className="table table-hover">
              <thead className="thead-inverse">
              <tr>
                <th>County Name</th>
                <th>FIPS Code</th>
                <th>County Name</th>
                <th>FIPS Code</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>King</td>
                <td>33</td>
                <td>Thurston</td>
                <td>67</td>
              </tr>
              <tr>
                <td>Kitsap</td>
                <td>35</td>
                <td>Mason</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Snohomish</td>
                <td>61</td>
                <td>Jefferson</td>
                <td>31</td>
              </tr>
              <tr>
                <td>Skagit</td>
                <td>57</td>
                <td>Clallam</td>
                <td>09</td>
              </tr>
              <tr>
                <td>Pierce</td>
                <td>53</td>
                <td></td>
                <td></td>
              </tr>
              </tbody>
              </table>
        <p> Learn more about the ACS package 
            <a href ="https://cran.r-project.org/web/packages/acs/acs.pdf"> here</a>
        </p>
        <pre><PrismCode className="language-python">{censusdata}</PrismCode></pre>
        <figure className="figure">
            <img src={tracts_baselayer} className="figure-img img-fluid" alt="" />
        </figure>  
    
        <h4 className="subsection">Access Census Data via API</h4>
        <p>
        For the next section, you will need your personal API code to access the US Census data.
        To obtain the code, enter your organization name, email, agree to the terms and click submit 
        in the document <a href="https://api.census.gov/data/key_signup.html"> here.</a>
        </p>
        <p>
        Also, keep in mind there are specific "table.number" for different attributes and corresponding 
        span of years. For more information about table naming conventions see 
        <a href="https://www.census.gov/programs-surveys/acs/guidance/which-data-tool/table-ids-explained.html"> here</a>.
        or for a sample list of possible table codes see <a href= "https://api.census.gov/data/2015/acs/acs5/groups.html"> here</a>.
        </p> 
        <pre><PrismCode className="language-python">{censusdata2}</PrismCode></pre>
        <figure className="figure">
            <img src={seattle_gini} className="figure-img img-fluid" alt="" />
        </figure> 
        <h4 className="subsection">OR Plot using the old fashioned way</h4>
        <pre><PrismCode className="language-python">{censusdata3}</PrismCode></pre>
        <figure className="figure">
            <img src={seattle_gini2} className="figure-img img-fluid" alt="" />
        </figure> 
        </section>
        <section>
        <h2 className="display-5">FedData Package</h2>
        <p>
            FedData allows access to mainly 6 datasets maintained by the US Federal government.
            These include: 
            <ul>
              <li>National Elevation Dataset: digital elevation modeals (USGS)</li>
              <li>National hydrography Dataset (USGS) </li>
              <li>Soil Survey Geographic (SSURGO)</li>
              <li>National Cooperative Soil Survey (NCSS)</li>
              <li>Global Historical Climatology Network (GHCN)</li>
              <li>Daymet Daily Weather Parameters for North America (DAAC)  </li>
            </ul>
        </p>
        <h4 className="subsection">Getting Started</h4>
        <p>
        Obtain county boundary data for El Dorado from Tigris package. When working with global data 
        I would recommend accessing GADM. 
        </p>
        <pre><PrismCode className="language-python">{FedData1}</PrismCode></pre>
        <figure className="figure">
            <img src={ElDorado} className="figure-img img-fluid" alt="" />
        </figure> 
        <h4 className="subsection">Obtaining NED data</h4>
        <pre><PrismCode className="language-python">{FedData2}</PrismCode></pre>
        </section> 
        <figure className="figure">
            <img src={ClippedDEM} className="figure-img img-fluid" alt="" />
        </figure> 
    </div>
    </div>
); 

const censusdata=`# Install bulk packages
install.packages(c("tigris", "acs", "stringr", "ggmap"))

# Load libraries
library(tigris)
library(acs)
library(stringr)
library(ggmap)

# Download tract boundary data from US CENSUS 
tracts <- tracts(state = 'WA', county = c(33, 35, 61, 57, 53, 67, 45, 31, 09), cb=TRUE)

# Tranform projection to overlay on top of ggmap baselayer 
tracts <- spTransform(tracts, CRS("+init=epsg:4326")) 

# Obtain box coordinate from tracts and apply it to ggmap baselayer  
b <- bbox(tracts)
(base.b1 <- ggmap(get_map(location = b)))

# Map out tracts polygon data with opacity on top of ggmap baselayer (base.b1)
data <- fortify(tracts)
base.b1 + geom_polygon(aes(x = long, y = lat, group = group), data = data,
               colour = 'white', fill = 'black', alpha = .5, size = .3)
`;

const censusdata2=`api.key.install(key="ENTERYOURKEYHERE")

geo<-geo.make(state=c("WA"),
              county=c(33, 35, 61, 57, 53, 67, 45, 31, 09), tract="*")
Income <- acs.fetch(endyear = 2015, span = 5, geography = geo,
                         table.number = "B19083", col.names = "pretty")
names(attributes(Income))
attr(Income, "acs.colnames" )

GEOID <- paste0(str_pad(Income@geography$state, 2, "left", pad="0"), 
       str_pad(Income@geography$county, 3, "left", pad="0"), 
       str_pad(Income@geography$tract, 6, "left", pad="0"))

income_df <- data.frame(GEOID, Income@estimate[,"Gini Index Of Income Inequality: Gini Index"], stringsAsFactors = FALSE)

income_df <- select(income_df , 1:2)
rownames(income_df)<-1:nrow(income_df)
names(income_df)<-c("GEOID", "Gini")
income_merged<- geo_join(tracts, income_df, "GEOID", "GEOID")
income_merged <- income_merged[income_merged$ALAND>0,]

base.b1 + geom_polygon(aes(x = long, y = lat, group = group), data = income_merged,
    colour = 'white', fill = income_merged$Gini, alpha = .5, size = .3) 
`;

const censusdata3=`# Create your own color palette 
rbPal <- colorRampPalette(c('white','blue'))

# Modify the data so that there are 10 quantile breaks in increments of 0.14
# Make sure you know the min and max of the data 
income_merged@data$col <- rbPal(10)[as.numeric(cut(income_merged$Gini, breaks=quantile(income_merged$Gini, probs=seq(0,0.7, by=0.14), na.rm=TRUE), 
                                include.lowest=TRUE))]
# Finally plot the data and specify the color breaks in "col"                                                  
plot(income_merged, col=income_merged@data$col)
`;

const FedData1=`#Load libraries
library(FedData)
library(ggmap)
library(ggplot2)
library(raster)
library(tigris)

# From tigris package, call for county data in CA
CA_Counties <- counties(state="CA") 

# Specify particular county by calling NAME column
El_Dorado <-CA_Counties[CA_Counties$NAME == "El Dorado",]

# Create variable with bounding box of El Dorado
# Use to grap gg basemap layer 
b <- bbox(El_Dorado)

# Use ggmap to plot basemap and El Dorado polygon layer 
p <- ggmap(get_map(location = b), extent = "normal", maprange = FALSE) +
      geom_polygon(data = fortify(El_Dorado),
               aes(long, lat, group = group),
               fill = "orange", colour = "red", alpha = 0.2) 
print(p)
`;

const FedData2=`# Use the get_ned() functionality to access data 
# expecify extent via template 
NED <- get_ned(template=El_Dorado, label="NED", 
res="1", force.redo = F)

# Use the mask tool to clip the NED raster file with El Dorado
rr <- mask(NED, El_Dorado)

# Use the raster to polygon tool 
rtp <- rasterToPolygons(rr)

# plot the newly created polygon file 
geom_polygon(data = rtp, 
             aes(x = long, y = lat, group = group, 
                 fill = rep(rtp$test, each = 5)), 
             size = 0, 
             alpha = 0.5)
`;