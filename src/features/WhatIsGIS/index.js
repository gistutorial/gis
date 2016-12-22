import React from 'react';

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-8">
        <h1 className="display-3">
          What is Geographical Information Systems (GIS)?
        </h1>
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
        <blockquote className="blockquote blockquote-reverse">
          <p className="mb-0">
            A computer-based tool for mapping and analyzing things that exist
            and events that happen on earth. GIS technology integrates common
            database operations such as query and statistical analysis with
            the unique visualization and geographic analysis benefits offered by maps.
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">
              <a href="http://www.esri.com/what-is-gis">ESRI</a>
            </cite>
          </footer>
        </blockquote>

        <div>
          <p className="display-4">WAYS TO USE GIS</p>
          <p>
            There are many ways to utilize GIS to solve complex real world issues.
            The over-arching themes that are predominantly found crucial in our
            current world and the ones that are focused here are: Human Health,
            Land Cover Change, Natural Disasters, and Environmental Conservation
          </p>
        </div>

        <div>
          <h3 className="jumbotron-heading">Human Health</h3>
          <div className="row">
            <div className="col-xs-6">
              <h4 className="text-muted">Vector-Borne Illness</h4>
              <p>
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
            </div>
            <div className="col-xs-6">
              <h4 className="text-muted">Urbanization</h4>
              <p>
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



          <h3 className="jumbotron-heading">Land Cover Classification</h3>
          <p>
            Monitoring deforestation esspecially in the tropical regions of
            the world like the Amazon rainforest has been crucial this past
            decade. To understand human impact at a large-scale and
            determine/quantify things such as carbon sequesteration and
            release it is imperative to classify land cover
            (detecting disturbance and changes, NDVI, etc.)
          </p>
          <p>
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
          <h3 className="jumbotron-heading">Natural Disasters</h3>
          <p>
            Monitoring natural disasters such as landslides, wildfires, and
            volcanoe eruptions can be done using real-time data coupled with
            powerful image processing and analysis softwares. These tools can
            be crucial for government agencies or organizations to monitor,
            detect, and react to natural disasters in the fastest way
            possible in order to limit human mortality.
          </p>
          <p>
            For example, the image on the right depicts a volcanic eruption
            on the Indonesian island of Lambok in October 2015. The imagery
            is from MODIS sensor on NASA's Terra and Aqua satellites. It is
            evident which direction the ash's are drifing towards,
            information such as this can also be useful in disaster relief
            efforts.
          </p>
          <h3 className="jumbotron-heading">Environmental Conservation</h3>
          <p>
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
      <div className="col-xs">
      </div>
    </div>
  </div>
);
