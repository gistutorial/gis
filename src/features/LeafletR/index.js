import React from 'react';
import { PrismCode } from 'react-prism';
import countybounds from './img/countytracts.png';
import leaflet_commute from './img/SF_Commute.png';
import zoomed_leaflet from './img/zoomed_leaflet.png';

export default () => (
<div>
    <header className="jumbotron text-xs-center banner">
    <div className="container">
        <h1 className="jumbotron-heading">Create an Interactive Leaflet with R</h1>
    </div>
    </header>
    <div className="container-narrow">
    <section>
        <h2 className="display-5">Obtaining Data</h2>
            <h4 className="subsection">Specifying County using FIPS Code</h4>
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
                    <td>Alameda</td>
                    <td>01</td>
                    <td>San Mateo</td>
                    <td>81</td>
                </tr>
                <tr>
                    <td>Contra Costa</td>
                    <td>13</td>
                    <td>Santa Clara</td>
                    <td>85</td>
                </tr>
                <tr>
                    <td>Marin</td>
                    <td>41</td>
                    <td>Santa Cruz</td>
                    <td>87</td>
                </tr>
                <tr>
                    <td>Napa</td>
                    <td>55</td>
                    <td>Solano</td>
                    <td>95</td>
                </tr>
                <tr>
                    <td>San Francisco</td>
                    <td>75</td>
                    <td>Sonoma</td>
                    <td>97</td>
                </tr>
                </tbody>
                </table>
            <p> Learn more about the ACS package 
                <a href ="https://cran.r-project.org/web/packages/acs/acs.pdf"> here</a>
            </p>
            <pre><PrismCode className="language-python">{censusdata}</PrismCode></pre>
            <figure className="figure">
                <img src={countybounds} className="figure-img img-fluid" alt="" />
            </figure> 

            <h4 className="subsection">Access U.S. Census Data via API</h4>
            <p>
            For the next section, you will need your personal API code to access the US Census data.
            To obtain the code, enter your organization name, email, agree to the terms and click submit 
            in the document <a href="https://api.census.gov/data/key_signup.html"> here.</a>
            </p>
            <pre><PrismCode className="language-python">{censusdata2}</PrismCode></pre>

            <h4 className="subsection">Calculating Percentage</h4>
            <pre><PrismCode className="language-python">{censusdata3}</PrismCode></pre>

            <h2 className="display-5">Create an Interactive Leaflet Map</h2>
            <figure className="figure">
                <img src={leaflet_commute} className="figure-img img-fluid" alt="" />
            </figure> 
            <pre><PrismCode className="language-python">{leaflet}</PrismCode></pre>
            <figure className="figure">
                <img src={zoomed_leaflet} className="figure-img img-fluid" alt="" />
            </figure> 
            </section>
        </div>
        </div>
    );

    const censusdata=`# Load libraries
    library(tigris)
    library(acs)
    library(stringr) 
    
    # Specific counties can be called using the FIPS number 
    counties <- c(1, 13, 75, 41, 55, 81, 85, 87, 95 97)
    
    # Specify the state and the counties 
    tracts <- tracts(state = 'CA', county = c(1, 13, 75, 41, 55, 81, 85, 87, 95 97), cb=TRUE)
    plot(tracts)
    `;
    
    const censusdata2=`api.key.install(key="ENTERYOURKEYHERE")
    
    # function to create user-specified geographies
    geo<-geo.make(state=c("CA"),
                  county=c(1, 13, 75, 41, 55, 81, 85, 87, 95 97), tract="*")
    
    
    CommuteTime <- acs.fetch(endyear = 2014, span = 5, geography = geo,
                      table.number = "B08303", col.names = "pretty")
    
    # View attribute names and column value
    names(attributes(CommuteTime))
    attr(CommuteTime, "acs.colnames" )
    `;

    const censusdata3=`# Create a dataframe which specifies the GEOID, TOTAL commute time and commute times GREATER THAN AN HOUR
    # Based on state, county, and specific tract create the GEOID by past0()
    GEOID = paste0(str_pad(CommuteTime@geography$state, 2, "left", pad="0"), 
                str_pad(CommuteTime@geography$county, 3, "left", pad="0"), 
                str_pad(CommuteTime@geography$tract, 6, "left", pad="0"))

    commute_df <- data.frame(GEOID, 
                            CommuteTime@estimate[,c("Travel Time to Work: Total:",
                                    "Travel Time to Work: 60 to 89 minutes",
                                    "Travel Time to Work: 90 or more minutes")], 
                            stringsAsFactors = FALSE)
    
    commute_df <- select(commute_df, 1:4)
    
    # Specify column names for dataframe
    # Make sure to have "GEOID" as it will be useful later on when performing a merge 
    rownames(commute_df)<-1:nrow(commute_df)
    names(commute_df )<-c("GEOID", "total", "commute60", "commute90")
    
    # Calculate the percent of commute time greater than 60 min / total commute time
    commute_df$percent <- 100*((commute_df$commute60 + commute_df$commute90 )/commute_df$total)
    `;
    
    const leaflet=`library(leaflet)

    # Merge the tract boundaries with the commute data using the key "GEOID"
    commute_merged<- geo_join(tracts, commute_df, "GEOID", "GEOID")
    
    # Make sure the land area is greater than 0
    commute_merged <- commute_merged[commute_merged$ALAND>0,]
    
    # Specify the characters and info available through interactive clicking 
    popup <- paste0("GEOID: ", commute_df$GEOID, "<br>", "Percent of 1HR+ Commute: ", round(commute_df$percent,2))
    
    # Create a color gradient based on the percent values of commute times 
    pal <- colorNumeric(
      palette = "YlGnBu",
      domain = commute_merged$percent)
    
    # Finally create variable with leaflet map
    # Add data with addPolygons() while specifying the fill color,opacity, and popup etc. 
    # Add a legend with addLegend() with color gradient, position, title, and label formats specified.
    CommuteMap <- leaflet() %>%
      addProviderTiles(providers$Stamen.Toner) %>% # Specify the basemap type 
      addPolygons(data = commute_merged, 
                  fillColor = ~pal(percent), 
                  color = "#b2aeae",
                  fillOpacity = 0.7, weight = 1, 
                  smoothFactor = 0.2, popup = popup)%>%
      addLegend(pal = pal, 
              values = commute_merged$percent, 
              position = "bottomright", 
              title = "Percent of 1Hr+ Commute",
              labFormat = labelFormat(suffix = "%")) 
    
    CommuteMap # Print the map
    `;