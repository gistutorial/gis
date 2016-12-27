import React from 'react';
import { PrismCode } from 'react-prism';

import buffer from './img/buffers.png';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">Introduction to using Arcpy</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Exploring Dataset Properties</h2>
        <p>A beginners guide that will help you explore the properties of the data you are working with including: dataset type, feature type, shape type, projection name, and dataset extent</p>
        <pre><PrismCode className="language-python">{arcpyIntroCode}</PrismCode></pre>
      </section>
      <section>
        <h2 className="display-5">Geoprocessing tools</h2>
        <p>Sample code to use arcpy library tools such as define projection, buffer, and clip to analyze spatial attributes. For example, if you had a land feature shapefile ("landFeature.shp") and fire ignitions shapefile ("fireFile.shp"), you can create a 1km buffer zone for each landfeature that represent human accessibility to identify fires nearby urban areas.</p>
        <pre><PrismCode className="language-python">{importDefineCode}</PrismCode></pre>
        <h4 className="text-muted">Define Projection</h4>
        <p>Make sure all of your files are in the same projection. If your landFeature shapefile's projection are unknown, change to the same projection as a sample file "fireFile.shp", otherwise we assume the projection is WGS and change it to NAD.</p>
        <pre><PrismCode className="language-python">{defineProjectionCode}</PrismCode></pre>
        <h4 className="text-muted">Buffer analysis</h4>
        <p>Creates buffer polygons around land features to a specified distance, 1000 meters or 1 kilometer.</p>
        <p>{`Buffer_analysis (input features, output feature class, distance specify in meters/feet/etc., {FULL/LEFT/RIGHT/OUTSIDE_ONLY}, {ROUND/FLAT}, {NONE/ALL/LIST}, {dissolve_field})`}</p>
        <pre><PrismCode className="language-python">{bufferAnalysisCode}</PrismCode></pre>
        <h4 className="text-muted">Clip analysis</h4>
        <p>Useful to extract attributes of an area of interest or input feature that overlay the clip features. In this case, clip together the buffered land feature file with fireFile.</p>
        <p>{`Clip_analysis (input features, clip features, output feature class, {cluster_tolerance})`}</p>
        <pre><PrismCode className="language-python">{clipAnalysisCode}</PrismCode></pre>
        <h4 className="text-muted">Get count</h4>
        <p>Returns the total number of rows for a feature class, table, layer, or raster. In this case, count the number of files in the clip output file.</p>
        <p>GetCount_management(input file or raster)</p>
        <pre><PrismCode className="language-python">{getCountCode}</PrismCode></pre>
        <h4 className="text-muted">Get output</h4>
        <p>Assigning results to number_Fires as an actual number</p>
        <pre><PrismCode className="language-python">{getOutputCode}</PrismCode></pre>
        <h4 className="text-muted">Result</h4>
        <pre><PrismCode className="language-python">{resultCode}</PrismCode></pre>
        <img src={buffer} className="img-fluid" alt="" />
      </section>
    </div>
  </div>
);

const arcpyIntroCode = `
# arcpy library
import arcpy

# DESCRIBE FUNCTION:
#Return the name, data type, fields, indexes and save it as a variable "desc_file"
desc_file = arcpy.Describe (path + "filename.shp")
print "File Name: " + desc_file.name
print "Dataset Type: " + desc_file.datasetType
print "Feature type: " + desc_file.featureType
print "Shape Type: " + desc_file.shapeType

# SPATIAL REFERENCE:
# Return properties of the .prj file and assign to "sr_file"
sr_file = desc_file.spatialReference

# PCSName:
# Return properties for projected coordinate systems
print "Projection name:" + sr_file.PCSName

# GCSName:
# Return properties for geographic coordinate systems
print "Projection name:" + sr_file.GCSName

# Dataset Extent:
# Return (Xmin, Xmax, Ymin, Ymax)
print("Dataset Extent:{0}, {1}, {2}, {3}".format( desc_file.extent.XMin, desc_file.extent.XMax,desc_file.extent.YMin, desc_file.extent.YMax))
`;

const importDefineCode = `
# import & define: Arcpy library; define your path
import arcpy
path = "C:/User/..."
`;

const defineProjectionCode = `
if arcpy.Describe(path + "landFeature.shp").spatialReference.Name == 'Unknown':
    arcpy.DefineProjection_management(path + "landFeature.shp", path + "fireFile.shp")
else:
    arcpy.Project_management(path + "landFeature.shp", path + "newfilename.shp", "WGS_1984_(ITRF00)_To_NAD_1983")

# check if this worked:
print arcpy.Describe(path + "landFeature.shp").spatialReference.Name
`;

const bufferAnalysisCode = `
arcpy.Buffer_analysis (path + "landFeature.shp", path + "newBuffFile.shp", "1000", "FULL", "ROUND","ALL")
`;

const clipAnalysisCode = `
clipFile = arcpy.Clip_analysis(path + "newBuffFile.shp", path + "fireFile.shp", path + "newClipFile.shp")
`;

const getCountCode = `
result = arcpy.GetCount_management(clipFile)
`;

const getOutputCode = `
number_Fires = result.getOutput(0)
`;

const resultCode = `
# Return results in String
print "There were" + number_Fires + "fires in 1km buffer zones of urban area."
`
