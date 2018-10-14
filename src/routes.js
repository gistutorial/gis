import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';
import Home from './features/Home';
import GISData from './features/GISData';
import WhatIsGIS from './features/WhatIsGIS';
import ToaAtmosphericCorrection from './features/ToaAtmosphericCorrection';
import CloudMasking from './features/CloudMasking';
import ThermalBand from './features/ThermalBand';
import BasicPlotting from './features/BasicPlotting';
import ArcpyIntro from './features/ArcpyIntro';
import About from './features/About';
import QgisIntro from './features/QgisIntro';
import SpatialR from './features/SpatialR';
import DataR from './features/DataR';
import USDataR from './features/USDataR';
import BasicPlottingR from './features/BasicPlottingR';
import LeafletR from './features/LeafletR';
import InteractivePlottingR from './features/InteractivePlottingR';


export default(
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="tutorials/data-acquisition-with-usgs" component={GISData} />
    <Route path="tutorials/what-is-gis" component={WhatIsGIS} />
    <Route path="tutorials/toa-atmospheric-correction" component={ToaAtmosphericCorrection} />
    <Route path="tutorials/cloud-masking" component={CloudMasking} />
    <Route path="tutorials/thermal-band-conversion" component={ThermalBand} />
    <Route path="tutorials/visualize-data-with-python" component={BasicPlotting} />
    <Route path="tutorials/intro-to-arcpy" component={ArcpyIntro} />
    <Route path="about" component={About} />
    <Route path="tutorials/intro-to-qgis" component={QgisIntro} />
    <Route path="tutorials/spatial-r" component={SpatialR} />
    <Route path="tutorials/data-r" component={DataR} />
    <Route path="tutorials/us-data-r" component={USDataR} />
    <Route path="tutorials/visualize-data-with-r" component={BasicPlottingR} />
    <Route path="tutorials/interactive-leaflet-r" component={LeafletR} />
    <Route path="tutorials/interactive-plotting-r" component={InteractivePlottingR} />
  </Route>
);
