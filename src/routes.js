import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';
import Home from './features/Home/Home';
import GISData from './features/GISData/GISData';
import WhatIsGIS from './features/WhatIsGIS';
import ToaAtmosphericCorrection from './features/ToaAtmosphericCorrection';

export default(
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="tutorials/GISData" component={GISData} />
    <Route path="tutorials/what-is-gis" component={WhatIsGIS} />
    <Route path="tutorials/toa-atmospheric-correction" component={ToaAtmosphericCorrection} />
  </Route>
);
