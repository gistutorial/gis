import React from 'react';
import WestNile from './img/WestNile.jpg';
import deforestation from './img/deforestation.jpg';
import natural_disaster from './img/natural_disaster.jpg';
import environment from './img/environment.jpg';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">What is Geographical Information Systems (GIS)?</h1>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <h2 className="display-5">Geographical Information Systems</h2>
          <p>
            GIS is a technological tool widely used to spatially analyze data
            and events related to things such as: Human Health, Land Cover/ Land
            Use Classification, Disaster Response, and Environmenal Conservation.
          </p>
          <p>
            GIS can simply be a cartographic tool that can map out regions, but
            a more robust approach is using GIS as a means to statistically
            analyze and visualize data to solve real world problems.
          </p>
          <blockquote className="blockquote">
            <p className="mb-0">
              A computer-based tool for mapping and analyzing things that exist
              and events that happen on earth. GIS technology integrates common
              database operations such as query and statistical analysis with
              the unique visualization and geographic analysis benefits offered by maps.
            </p>
            <div className="blockquote-footer">
              <cite title="Source Title">
                <a href="http://www.esri.com/what-is-gis">ESRI</a>
              </cite>
            </div>
          </blockquote>

          <div>
            <h2 className="display-5">Ways to use GIS</h2>
            <p>
              There are many ways to utilize GIS to solve complex real world issues.
              The over-arching themes that are predominantly found crucial in our
              current world and the ones that are focused here are: Human Health,
              Land Cover Change, Natural Disasters, and Environmental Conservation
            </p>
          </div>

          <div>

            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Human Health</h4>
              </div>
              <img className="img-fluid" src={WestNile} alt="Card image" />
              <div className="card-block">
                <p className="card-text text-muted">
                  West Nile virus activity and human neuroinvasive disease
                  incidence per million population, by county, United States,
                  1999–2006. SOURCE: CDC (2007c)
                </p>
                <h4 className="text-muted">Vector-Borne Illness</h4>
                <p className="card-text">
                  There is a growing need in the world today to accurately assess how
                  the climate and land cover change affect health in regions where
                  vector-borne diseases are prevalent. Fortunately, earth observation
                  data is invaluable towards combatting human health issues by
                  targeting vulnerable regions prone to disease outbreaks, equipping
                  decision makers to implement efficient management and mitigation
                  efforts. For example, a study used remote sensing technology to
                  reveal a correlation between land cover changes in the Mangalore,
                  India region with increased incidence of malaria outbreaks.
                  During the year 2003 to 2005 there was rapid urbanization and
                  deforestation that took place in the region, at the same time,
                  cases of malaria increased to about five-fold (Mohan & Naumova 2011).
                  By using remote sensing technology to detect dynamic relationship
                  between human activity and the environment, regional populations
                  can protect and prevent against disease outbreaks.
                </p>
                <h4 className="text-muted">Urbanization</h4>
                <p className="card-text">
                  With the rise of urbanization in many developing nations, there
                  needs to be better monitoring on how to sustainably urbanize when
                  dealing with high population growth rates, while maintaining
                  adequate living standards. One of the many issues with urbanization
                  include the urban heat island effect, predominantly seen where
                  large concentrated urban bodies with impervious surfaces retain
                  large amounts of heat compared to its surrounding rural environment.
                  The combination between rapid urban growth coupled with frequently
                  intensifying heat waves due to global warming can significantly
                  impact human health in these regions and can result in a positive
                  feedback giving rise to even higher temperatures. There have
                  already been cases in cities such as Shanghai, China where heat
                  induced mortality is seen to increase directly due to the urban
                  heat effect (Tan et al. 2010).
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Land Cover Classification</h4>
              </div>
              <img className="img-fluid" src={deforestation} alt="Card image" />
              <div className="card-block">
                <p className="card-text text-muted">
                  Tropical deforestation in Tierras Bajas, Bolivia from 1970's to
                  the 1990's provided by a collaborative joint effort among
                  UMCP, UNH, and NASA's Goddard Space Flight Center scientists.
                  SOURCE: NASA map by Marc Steininger
                </p>
                <p className="card-text">
                  Monitoring deforestation esspecially in the tropical regions of
                  the world like the Amazon rainforest has been crucial this past
                  decade. To understand human impact at a large-scale and
                  determine/quantify things such as carbon sequesteration and
                  release it is imperative to classify land cover
                  (detecting disturbance and changes, NDVI, etc.)
                </p>
                <p className="card-text">
                  NASA remote-sensing technology has become the backbone of worldwide
                  efforts to quickly, routinely, and reliably assess trends in
                  tropical deforestation. Since the 1970s, the Landsat series of
                  satellites has provided high-resolution imagery (resolution
                  means “level of detail”) of changes in tropical forests over time.
                  The most comprehensive use of Landsat data to map tropical
                  deforestation has been NASA’s Landsat Pathfinder Humid Tropical
                  Deforestation Project, a collaborative effort among scientists
                  from the University of Maryland, the University of New Hampshire,
                  and NASA’s Goddard Space Flight Center. The project yielded
                  deforestation maps for the Amazon Basin, Central Africa, and
                  Southeast Asia for three periods in the 1970s, 1980s, and 1990s.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Natural Disasters</h4>
              </div>
              <img className="img-fluid" src={natural_disaster} alt="Card image" />
              <div className="card-block">
                <a className="card-link" href="http://earthobservatory.nasa.gov/NaturalHazards/view.php?id=86932">
                  Source: NASA images by Jeff Schmaltz, LANCE/EOSDIS Rapid Response
                </a>
                <p className="card-text">
                  Monitoring natural disasters such as landslides, wildfires, and
                  volcanoe eruptions can be done using real-time data coupled with
                  powerful image processing and analysis softwares. These tools can
                  be crucial for government agencies or organizations to monitor,
                  detect, and react to natural disasters in the fastest way
                  possible in order to limit human mortality.
                </p>
                <p className="card-text">
                  For example, the image on the right depicts a volcanic eruption
                  on the Indonesian island of Lambok in October 2015. The imagery
                  is from MODIS sensor on NASA's Terra and Aqua satellites. It is
                  evident which direction the ash's are drifing towards,
                  information such as this can also be useful in disaster relief
                  efforts.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h4 className="card-title">Environmental Conservation</h4>
              </div>
              <img className="img-fluid" src={environment} alt="Card image" />
              <div className="card-block">
                <p className="card-text">
                  This is a broader field of expertise and can deal with a wider
                  range of possibilities depending on the species, or environment
                  you are trying to protect. Topics such as resource management
                  can also fall into this category because for example, water
                  quality, and managing resources from National/State Parks can all
                  be considered acts of conservation. The main thing one thinks
                  of when talking about environmental conservation are protecting
                  and management of endangered species and habitats from
                  anthropogenic activities
                </p>
              </div>
            </div>

          </div>

        </div>
        <div className="col-xs">
        </div>
      </div>
    </div>
  </div>
);
