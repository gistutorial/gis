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

export default(
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="tutorials/data-acquisition-with-usgs" component={GISData} />
    <Route path="tutorials/what-is-gis" component={WhatIsGIS} />
    <Route path="tutorials/toa-atmospheric-correction" component={ToaAtmosphericCorrection} />
    <Route path="tutorials/cloud-masking" component={CloudMasking} />
    <Route path="tutorials/thermal-band-conversion" component={ThermalBand} />
    <Route path="tutorials/visualize-data-with-python" component={BasicPlotting} />
  </Route>
);
