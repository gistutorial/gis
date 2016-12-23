import React from 'react';
import cloudMask from './img/cloud_mask_IMG.jpg';
import extractByAttribute from './img/Extract_by_Attribute.png';
import extractByMask from './img/extract_by_mask.png';
import unsuper from './img/unsuper_IMG.png';

export default () =>  (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-3">Cloud Masking</h1>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <section>
            <h2 className="display-5">Intro</h2>
            <p>While there are multiple ways to undergo cloud masking, this tutorial will use Iso-clustering unsupervised classification method to group unwanted pixels that represent clouds, borders, etc. This step is suggested after completing the atmospheric correction (converting DN to Radiance to Reflectance), with either the TOA or COST methods.</p>
            <img src={cloudMask} className="img-fluid" alt="" />
            <h2 className="display-5">Step 1: Unsupervised Classification</h2>
            <p>Use the ArcMap search tool to look-up and click "Iso-Cluster Unsupervised Classification. Note: You will need the Spatial Analyst License which can be added by going to "Customize" --> "Extensions" and checking the box for "Spatial Analyst". </p>
            <p>Add the raster image file or the bands one by one (at least three or more) in the "Input Raster Bands".</p>
            <p>The "Number of Classes" refers to how many classes you want to group the pixels by is suggested to be around 25. It may be better to have a greater number of classes since we will be extracting the classes that correspond to clouds and unwanted pixels later on. It is best to play around with this attributes to get the best results.</p>
            <p>"Minimum Class Size" is defined as the minimum number of cells in a valid class, suggested to be around 20-40.</p>
            <img src={unsuper} className="img-fluid" alt="" />
            <h2 className="display-5">Step 2: Extract by Attribute</h2>
            <p>Using the classification image previously obtained, use the "Extract by Attribute" tool input the "Where Clause". This will allow for all of the wanted pixels extracted according to class. In other words, find all of the classes that are NOT cloud and plug those values into the "Where Clause".</p>
            <img src={extractByAttribute} className="img-fluid" alt="" />
            <h2 className="display-5">Step 3: Extract by Mask</h2>
            <img src={extractByMask} className="img-fluid" alt="" />
            <p>Using the extracted mask file, use the "Extract by Mask" tool to obtain the pixel values from the original raster image. The final output image should have all of the clouds and unwanted pixels as NA or "No Data".</p>
          </section>
        </div>
        <div className="col-xs-12 col-sm-4">
        </div>
      </div>
    </div>
  </div>
);
