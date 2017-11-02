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
  </Route>
);
