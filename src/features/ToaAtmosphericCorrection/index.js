import React from 'react';
import radianceTable from './img/radianceTable.png';
import rasterCalculator from './img/rasterCalculator.png';
import rad_to_ref_eq from './img/rad_to_ref_eq.png';
import dvalue from './img/dvalue.png';
import l05 from './img/L05_2005_raster_calc_ref.png';
import l08 from './img/L08_B1_IMG.jpg';
import l08_raster from './img/L08_raster_calc_rad.png';
import l08_raster_ref from './img/L08_raster_calc_ref.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">TOA Atmospheric Correction</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Intro</h2>
        <p>
          Atmospheric correction techniques allows for the transformation
          of Digital Numbers (DN) to Radiance and then to Reflectance
          values in order to reduce sensor discrepancies and atmospheric
          effects. This pre-processing step can help to reduce errors and
          increase accuracy in final processing steps such as
          classification. In this section we will go over how to convert
          DN values to Sensor Spectral Radiance and then to Top of
          Atmosphere (TOA) Reflectance. Also, the best way to go about each
          step is to create a table on excel for each of the bands, except
          for the thermal bands with each corresponding variables to keep track of data.
        </p>
        <p>
          Another great source is the USGS Landsat 7 handbook guide, available
          here or the USGS Landsat 8 handbook guide, <a href="https://landsat.usgs.gov/documents/Landsat8DataUsersHandbook.pdf">available here.</a>
        </p>
        <h2 className="display-5">LANDSAT 4-5 TM & 7 ETM+</h2>
        <p className="lead"><strong>Digital Numbers To Radiance</strong></p>
        <p>Lλ = ((Lmaxλ - Lminλ)/(Qcalmax - Qcalmin)) * (Qcal - Qcalmin) + Lminλ</p>
        <p>Lλ = Spectral Radiance in watts/(meter squared * ster * μm) </p>
        <p>Qcal = DN values for each band </p>
        <p>Lminλ = the spectral radiance that is scaled to QCALMIN in watts/(meter squared * ster * μm) Found in table below </p>
        <p>Lmaxλ = the spectral radiance that is scaled to QCALMAX in watts/(meter squared * ster * μm) Found in table below </p>
        <p>Qcalmin = the minimum quantized calibrated pixel value for each band, usually 1. (Found in the MetaData of the image) </p>
        <p>Qcalmax = the maximum quantized calibrated pixel value for each band, usually 255. Found in the MetaData of the image)</p>
        <p className="lead"><strong>LMINλ & LMAXλ</strong></p>
        <figure className="figure">
          <img src={radianceTable} className="figure-img img-fluid" alt="" />
          <figcaption className="figure-caption">
            SOURCE: Michael P. Finn1 , Matthew D. Reed2 , and Kristina H. Yamamoto.
            "A Straight Forward Guide for Processing Radiance and Reflectance
            for EO-1 ALI, Landsat 5 TM, Landsat 7 ETM+, and ASTER"
          </figcaption>
        </figure>
        <p className="lead"><strong>Raster Calculator</strong></p>
        <img src={rasterCalculator} className="img-fluid" alt="" />
        <p>
          Plug in the equation into the "raster Calculator" tool as
          seen above, which can be accessed by using the search tab
          on the very rightside of ArcMap. For the "QCAL" values plug
          in the raster file for all the bands 1-5 & 7 (Except
          for the thermal 6 band).
        </p>
        <p className="lead"><strong>Radiance to Reflectance</strong></p>
        <img src={rad_to_ref_eq} className="img-fluid" alt="" />
        <p>SOURCE: USGS Website</p>
        <p className="lead"><strong>ESUN = Irradiance</strong></p>
        <table className="table table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>Bands</th>
              <th>Landsat 4-5 TM</th>
              <th>Landsat 7 ETM+</th>
            </tr>
          </thead><tbody>
            <tr>
              <td>1</td>
              <td>1983</td>
              <td>1970</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1793</td>
              <td>1842</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1536</td>
              <td>1547</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1031</td>
              <td>1044</td>
            </tr>
            <tr>
              <td>5</td>
              <td>220</td>
              <td>225.7</td>
            </tr>
            <tr>
              <td>7</td>
              <td>83.44</td>
              <td>82.06</td>
            </tr>
            <tr>
              <td>8</td>
              <td>N/A</td>
              <td>1369</td>
            </tr>
          </tbody>
        </table>
        <p className="lead"><strong>Solar Zenith Angle (Theta_S)</strong></p>
        <p>To calculate the "Solar Zenith Angle" subtract 90 from the "Sun Elevation Angle", which can be found from the MetaData.</p>
        <p className="lead"><strong>"d" VALUE</strong></p>
        <p>To find the Earth-Sun distance first find the day of the year from this table below, then go on the USGS Website and download the excel file in section 11.3.2 next to "d" to determine the value.</p>
        <figure className="figure">
          <img src={dvalue} className="figure-img img-fluid" alt="" />
          <figcaption className="figure-caption">
            <a href="http://www.mbari.org/staff/coletti/doytable.html">Source Here</a>
          </figcaption>
        </figure>
        <p className="lead"><strong>Plug into Raster Calculator</strong></p>
        <p>For the L value, replace it with the radiance raster file you obtained from the first step "DN to Radiance" for each band. See below for reference</p>
        <img src={l05} className="img-fluid" alt="" />

        <h2 className="display-5">Landsat 8 OLI & TIRS</h2>
        <p>The TOA atmospheric correction for Landsat 8 imagery converts DN values to Radiance separately, although similar, to the conversion to Reflectance. Luckily, all of the values will be found in the metadata, making the process a lot less tedious compared to the older Landsat EO data. This method is based on the USGS correction method in the Landsat 8 Data User Handbook .</p>
        <img src={l08} className="img-fluid" alt="" />
        <p className="lead"><strong>DN to radiance (OLI/TIRS)</strong></p>
        <p>Lλ = ML * Qcal + AL</p>
        <p>Lλ = Spectral Radiance in watts/(meter squared * sr * μm) </p>
        <p>QCal = DN values for each band </p>
        <p>ML = Radiance multiplicative scaling factor for the band (RADIANCE_MULT_BAND_n from the metadata)</p>
        <p>AL = Radiance additive scaling factor for the band (RADIANCE_ADD_BAND_n from the metadata)</p>

        <p className="lead"><strong>Plug into Raster Calculator</strong></p>
        <p>After obtaining all of the variable values, use the "Raster Calculator" where "Qcal" will be the original raster file for each band.</p>
        <img src={l08_raster} className="img-fluid" alt="" />

        <p className="lead"><strong>DN TO TOA REFLECTANCE (OLI)</strong></p>
        <p>A two step process: The first step is to convert DN to uncorrected reflectance, similar to finding Radiance. The second step is to account for the solar angle (found in the metadata).</p>
        <p className="text-muted">First step</p>
        <p>pλ' = Mp * Qcal + Ap</p>
        <p>pλ' = Top of Atmosphere Reflectance, without correction for solar angle (unitless) </p>
        <p>QCal = Level 1 DN values for each band </p>
        <p>Mp = Reflectance multiplicative scaling factor for the band (REFLECTANCE_MULT_BAND_n; from the metadata)</p>
        <p>Ap = Reflectance additive scaling factor for the band (REFLECTANCE_ADD_BAND_n; from the metadata)</p>
        <p className="text-muted">Second step</p>
        <p>pλ = pλ' / sin(θ)</p>
        <p>pλ = Top of Atmosphere Reflectance (unitless) </p>
        <p>pλ' = Top of Atmosphere Reflectance, without correction for solar angle (unitless)</p>
        <p>θ = Solar Elevation Angle (from metadata)</p>

        <p className="lead"><strong>Plug into Raster Calculator</strong></p>
        <img src={l08_raster_ref} className="img-fluid" alt="" />
        <p>For each of the steps to calculate the Reflectance, plug all of the equations in for each band (except for the thermal bands 10 & 11). For step two, "pλ'" will be the raster files of reflectance values obtained in step 1.</p>
      </section>
    </div>
  </div>
);
