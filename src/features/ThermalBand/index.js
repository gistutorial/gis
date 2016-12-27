import React from 'react';
import L05 from './img/L05_raster_calc_rad.png';
import thermal from './img/Thermal_2.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">Thermal Bands Conversion</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Intro</h2>
        <p>Thermal Infrared Sensor (TIRS) bands detect the thermal radiance and should be converted to TOA spectral radiance in order to convert into brightness temperature in Kelvins (K) using the methods in this tutorial. It is important to note the differentiation between thermal band designation for different satellites and sensors. For example, Landsat 5 thermal band is 6, while Landsat 8 TIR bands are 10 & 11. In addition, to accurately illustrate the temperature gradient, it is best to perform a cloud mask to reduce visual errors, since clouds and haze typically are very low temperatures.</p>
        <img src={thermal} className="img-fluid" alt="" />
        <h2 className="display-5">Landsat 8 TIRS</h2>
        <p>Landsat 8 thermal bands data, Bands 10 & 11, should be converted to spectral radiance and then to brightness temperature (K) using the followiing set of equations. It is important to note that since 2013, the thermal energy outside of the field of view (FOV) has obstructed the data in both bands 10 and 11. According to the USGS site HERE Band 11 has been affected far greater than Band 10 and therefore should not be used for quantitative analysis.</p>
        <h2 className="display-5">TIRS DN to Radiance</h2>
        <p className="lead">Lλ = ML * Qcal + AL</p>
        <p>Lλ = Spectral Radiance in watts/(meter squared * sr * μm) </p>
        <p>QCal = DN values for each band </p>
        <p>ML = Radiance multiplicative scaling factor for the band (RADIANCE_MULT_BAND_n from the metadata)</p>
        <p>AL = Radiance additive scaling factor for the band (RADIANCE_ADD_BAND_n from the metadata)</p>
        <h2 className="display-5">Radiance to brightness temperature</h2>
        <p className="lead">T = K2 / ln(K1 / Lλ + 1)</p>
        <p>Lλ = TOA Spectral Radiance in watts/(meter squared * sr * μm) </p>
        <p>K1 = Band-specific thermal conversion constant from the metadata (K1_CONSTANT_BAND_x, where x is the thermal band number) </p>
        <p>K2 = Band-specific thermal conversion constant from the metadata (K2_CONSTANT_BAND_x, where x is the thermal band number)</p>
        <p>T = At-satellite brightness temperature (K)</p>
        <p className="lead"><strong>Raster Calculation</strong></p>
        <img src={L05} className="img-fluid" alt="" />
        <p>After obtaining the variables from the metadata, plug in the equation into the "raster Calculator" tool as seen above, which can be accessed by using the search tab on the very rightside of ArcMap.</p>
      </section>
    </div>
  </div>
);
