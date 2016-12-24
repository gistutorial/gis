import React from 'react';
import search from './img/search.png';
import gettingStarted from './img/gettingStarted.png';
import dataSets from './img/dataSets.png';
import additional from './img/additional.png';
import result from './img/result.png';
import signIn from './img/signIn.png';

import band321 from './img/band321.png';
import band432 from './img/band432.png';
import band453 from './img/band453.png';
import band742 from './img/band742.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="jumbotron-heading">Data acquisition with USGS. Band Designation. Band Combination</h1>
      </div>
    </header>

    <div className="container-narrow">
      <section>
        <h2 className="display-5">Data acquisition with USGS</h2>
        <h3><small className="text-muted">Getting Started</small></h3>
        <p>Earth Observation images can be acquired from an online data server
          such as Glovis or Earth Explorer on the
          <a href="http://eros.usgs.gov/find-data"> USGS Earth Resources Observation
          and Science Center (EROS) website</a>.
          Then Click "Earth Explorer" under "Data Discovery".
        </p>
        <img src={gettingStarted} className="img-fluid" alt="data acquisition" />
        <h3><small className="text-muted">Search Criteria</small></h3>
        <p>Once you are in Earth Explorer, add the region of interest and
          date range in the "Search Criteria" (in this case Massingir, Mozambique)
          under "Address/Place" and "Date Range". You can also identify
          Path/Row, coordinates, or select a predefined area if you prefer.
          Then click "Data Sets"
        </p>
        <img src={search} className="img-fluid" alt="how to search" />
        <h3><small className="text-muted">Data Sets</small></h3>
        <p>For "Data Sets" select Landsat Archive and Landsat 7 ETM+ SLC-on
          (1999-2003). Feel free to select as many data sets as you want,
          depending on the temporal range of your choice.
          Then click "Additional Criteria"
        </p>
        <img src={dataSets} className="img-fluid" alt="dataset selection" />
        <h3><small className="text-muted">Additional Criteria</small></h3>
        <p>
          In this section, it is helpful to filter through the datasets
          to disregard tiles with heavy cloud cover. In the drop down
          option choose "less than 10%". Then click "Results"
        </p>
        <img src={additional} className="img-fluid" alt="additional search" />
        <h3><small className="text-muted">Results</small></h3>
        <p>
          It should provide you with a list of tiles with "entity ID",
          "acquistion date", and "path/row". Click on the download icon
          for the image that has the least cloud cover, haze, etc. i.e.
          the one best one suited in date and quality. Then download
          the GeoTIFF Data Product (usually Level 1) if you are logged
          in, if not follow the last step.
        </p>
        <img src={result} className="img-fluid" alt="result" />
        <h3><small className="text-muted">Log In</small></h3>
        <p>
          If you are not logged in then you're not done yet! Before you
          can download any data from the USGS website, you will need
          an account. Go ahead click the "Create New Account" icon and
          set up a user-name and password, log-in, and click the
          download icon again. This will allow you to download the
          GeoTIFF files, usually a "Level 1" product as seen above.
        </p>
        <img src={signIn} className="img-fluid" alt="signing up" />
      </section>

      <section>
        <section>
          <h2 className="display-5">Band Designation</h2>
          <h3><small className="text-muted">LANDSAT 1-3 & 4-5, Multispectral Scanner (MSS)</small></h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Landsat 1-3</th>
                  <th>Landsat 4-5</th>
                  <th>Wavelength (micrometers)</th>
                  <th>Resolution (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Band 4</td>
                  <td>Band 1</td>
                  <td>0.5 - 0.6</td>
                  <td>60 meters</td>
                </tr>
                <tr>
                  <td>Band 5</td>
                  <td>Band 2</td>
                  <td>0.6 - 0.7</td>
                  <td>60 meters</td>
                </tr>
                <tr>
                  <td>Band 6</td>
                  <td>Band 3</td>
                  <td>0.7 - 0.8</td>
                  <td>60 meters</td>
                </tr>
                <tr>
                  <td>Band 7</td>
                  <td>Band 4</td>
                  <td>0.8 - 1.1</td>
                  <td>60 meters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3><small className="text-muted">LANDSAT 4-5, Thematic Mapper (TM)</small></h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Band #</th>
                  <th>Wavelength (micrometers)</th>
                  <th>Resolution (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Band 1</td>
                  <td>0.45-0.52</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 2</td>
                  <td>0.52-0.60</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 3</td>
                  <td>0.63-0.69</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 4</td>
                  <td>0.76-0.90</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 5</td>
                  <td>1.55-1.75</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 6</td>
                  <td>10.40-12.50</td>
                  <td>120, 60, 30 meters</td>
                </tr>
                <tr>
                  <td>Band 7</td>
                  <td>2.08-2.35</td>
                  <td>30 meters</td>
                </tr>
              </tbody>
            </table>

          </div>
        </section>

        <section>
          <h3><small className="text-muted">LANDSAT 7, Thematic Mapper Plus (ETM+)</small></h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Band #</th>
                  <th>Wavelength (micrometers)</th>
                  <th>Resolution (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Band 1</td>
                  <td>0.45-0.52</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 2</td>
                  <td>0.52-0.60</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 3</td>
                  <td>0.63-0.69</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 4</td>
                  <td>0.76-0.90</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 5</td>
                  <td>1.55-1.75</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 6</td>
                  <td>10.40-12.50</td>
                  <td>60, 30 meters</td>
                </tr>
                <tr>
                  <td>Band 7</td>
                  <td>2.09-2.35</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 8</td>
                  <td>0.52-0.90</td>
                  <td>30 meters</td>
                </tr>
              </tbody>
            </table>

          </div>
        </section>

        <section>
          <h3>
            <small className="text-muted">
              LANDSAT 8 Operational Land Imager (OLI) and Thematic Infrared Sensor (TIRS)
            </small>
          </h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Band #</th>
                  <th>Designation</th>
                  <th>Wavelength (micrometers)</th>
                  <th>Resolution (m)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Band 1</td>
                  <td>Coastal Aerosol</td>
                  <td>0.43-0.45</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 2</td>
                  <td>Blue</td>
                  <td>0.45-0.51</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 3</td>
                  <td>Green</td>
                  <td>0.53-0.59</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 4</td>
                  <td>Red</td>
                  <td>0.64-0.67</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 5</td>
                  <td>Near Infrared (NIR)</td>
                  <td>0.85-0.88</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 6</td>
                  <td>SWIR 1</td>
                  <td>1.57-1.65</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 7</td>
                  <td>SWIR 2</td>
                  <td>2.11-2.29</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 8</td>
                  <td>Panchromatic</td>
                  <td>0.50-0.68</td>
                  <td>15 meters</td>
                </tr>
                <tr>
                  <td>Band 9</td>
                  <td>Cirrus</td>
                  <td>1.36-1.38</td>
                  <td>30 meters</td>
                </tr>
                <tr>
                  <td>Band 10</td>
                  <td>Thermal Infrared (TIRS) 1</td>
                  <td>10.60-11.19</td>
                  <td>100, 30 meters</td>
                </tr>
                <tr>
                  <td>Band 11</td>
                  <td>Thermal Infrared (TIRS) 2</td>
                  <td>11.50-12.51</td>
                  <td>100, 30 meters</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </section>

      <section>
        <h2 className="display-5">Band Combination: <small className="text-muted">Landsat TM</small></h2>
        <h3><small className="text-muted">Getting Started</small></h3>
        <p>
          Combination of bands in RGB is beneficial in many ways and allows
          for the detection of land cover classes, reflecting unique
          environmental variables such as water and mineral content. RGB
          can be altered using the "Image Analysis" tool under the "Windows"
          tab in ArcMAP. Once all of the bands are added in order from
          Least to Greatest and selected, click on the "Composite Bands"
          button under "Processing".
        </p>
        <h3><small className="text-muted">Natural or True Color Composite: BAND 3-2-1</small></h3>
        <img src={band321} className="img-fluid" alt="natural or true color composite" />
        <p>
          This is the standard "Natural Color" combination where the image
          is similar to the appearance via the human eye. Therefore,
          vegetation will appear green, urban areas will appear gray, and
          bare soil will appear brown. This combination will not distinguish
          water content and vegetation as well as the other combinations.
        </p>
        <h3><small className="text-muted">False Color Composite: BAND 4-3-2</small></h3>
        <img src={band432} className="img-fluid" alt="false color composite band 4 3 2" />
        <p>
          Vegetation appear in shades of red and can distinguish between
          healthy and not healthy vegetation. It can also indicate if the
          landcover is forest, sparsely vegetated, and/or which stage of
          crop growth. Soils come in shades of dark to light brown and
          can indicate moisture levels. Dense urban areas reflect in light blue.
        </p>
        <h3><small className="text-muted">False Color Composite: BAND 4-5-3</small></h3>
        <img src={band453} className="img-fluid" alt="false color composite band 4 5 3" />
        <p>
          This combination with NIR, MIR, and red bands can help indicate
          moisture/water levels to analyze vegetation and soil condition.
          The wetter soils are darker. Vegetation can appear in shades of
          brown, green, and oranges. Great for locating inland water bodies
          such as lakes and rivers.
        </p>
        <h3><small className="text-muted">False Color Composite: BAND 7-4-2</small></h3>
        <img src={band742} className="img-fluid" alt="false color composite band 7 4 2" />
        <p>
          This combination looks quite similar to the Natural Color
          Composite, however, can penetrate atmospheric particles with
          the use of the SWIR band. Vegetation appears bright green
          (can distinguish between heavy growing seasons), soils appear
          pink, sparse vegetation appear orange and brown. Fires can appear
          red and can be used for fire mitigation efforts. Soils can
          indicate mineral content as well.
        </p>
      </section>
    </div>

  </div>
);
