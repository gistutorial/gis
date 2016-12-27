import React from 'react';
import { PrismCode } from 'react-prism';
import Gist from '../../common/Gist';

import heatmap from './img/heatmap.png';
import joinplot from './img/jointplot.JPG';
import iris from './img/kde_iris.JPG';
import irisMulti from './img/kde_irisMulti.JPG';
import kde_ploy from './img/kde_ploy.JPG';
import kde_plot2 from './img/kde_plot2.JPG';
import kde_plot3 from './img/kde_plot3.JPG';

export default () => (
  <div>
    <header className="jumbotron text-xs-center banner">
      <div className="container">
        <h1 className="display-4">Visualize Data With Python</h1>
      </div>
    </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Create a Heat Map with Seaborn</h2>
        <p>Seaborn is a great visualization tool that is based similar to matplotlib, but with a more current and attractive design scheme. Feel free to visit seaborn to browse their latest gallery and to check out some of their tutorials for scatterplots, densityplots, histograms, and more!</p>
        <pre><PrismCode className="language-python">{heatmapCode}</PrismCode></pre>
        <img src={heatmap} className="img-fluid" alt="" />
      </section>
      <section>
        <h2 className="display-5">JointPlot with Seaborn</h2>
        <p>Create visually appealing histograms and jointplots using the seaborn library! Use the iPython library via Jupyter to physically see the graph inline. Using the Jupyter notebook can help organize input code and output graphs in an instant.</p>
        <p>Feel free to visit seaborn to browse their latest gallery and to check out some of their tutorials for scatterplots, densityplots, histograms, and more!</p>
        <pre><PrismCode className="language-python">{joinplotCode}</PrismCode></pre>
        <img src={joinplot} className="img-fluid" alt="" />
      </section>
      <section>
        <h2 className="display-5">KDE Classic Example</h2>
        <p>Use the sample dataset from the Seaborn Library to visualize petal length and width, while comparing two specie types. More details for this example can be found, here on the seaborn website! Use the iPython library via Jupyter to physically see the graph inline. Using the Jupyter notebook can help organize input code and output graphs in an instant.</p>
        <p>Feel free to visit seaborn to browse their latest gallery and to check out some of their tutorials for scatterplots, densityplots, histograms, and more! </p>
        <p>Kernel Density: is a statistical method that smoothes out the data of a random variable in a non-parametric way. Read more about it on the Wiki page, here.</p>
        <pre><PrismCode className="language-python">{kdeClassicCode}</PrismCode></pre>
        <img src={iris} className="img-fluid" alt="" />
        <pre><PrismCode className="language-python">{kdeMultiPlotCode}</PrismCode></pre>
        <img src={irisMulti} className="img-fluid" alt="" />
      </section>
      <section>
        <h2 className="display-5">Kernel Density Estimation</h2>
        <p>Create visually appealing kernel density estimation plots using the seaborn library! Use the iPython library via Jupyter to physically see the graph inline. Using the Jupyter notebook can help organize input code and output graphs in an instant.</p>
        <p>Feel free to visit seaborn to browse their latest gallery and to check out some of their tutorials for scatterplots, densityplots, histograms, and more! </p>
        <p>Kernel Density: is a statistical method that smoothes out the data of a random variable in a non-parametric way. Read more about it on the Wiki page, here.</p>
        <pre><PrismCode className="language-python">{kernelDensityCode}</PrismCode></pre>
        <img src={kde_ploy} className="img-fluid" alt="" />
        <p>Use the bandwidth to adjust the sensitivity to frequency variations. Use FOR LOOP to go through bw 0.5 to 2 in 0.25 intervals.</p>
        <pre><PrismCode className="language-python">{kdeBandwidthCode}</PrismCode></pre>
        <img src={kde_plot2} className="img-fluid" alt="" />
        <pre><PrismCode className="language-python">{kdeVariableCode}</PrismCode></pre>
        <img src={kde_plot3} className="img-fluid" alt="" />
      </section>
    </div>
  </div>
);

const heatmapCode = `
import seaborn as sns
# Define and load the datafile into variable "data" using the seaborn library sns
data = sns.load_dataset("variable")
# Use pivot function to get year as x-axis, month as y-axis
# and count as the shaded color. Also define how many months
# there are ie. [:12] = 12 months (January - December)
data_rect = data.pivot("month", "year", "count")
data_rect = data_rect.ix[data.month.iloc[:12]]
# Call the seaborn library and define color, and line width of the heat map
sns.heatmap(data_rect,cmap="Reds", linewidths= 2);
`;

const joinplotCode = `
# import data handling libraries
import numpy as np
from numpy.random import randn
# Import seaborn library
import seaborn as sns

# Use the randn tool to create a normally distributed dataset.
# note: number of value points should be the same.
dataset1 = randn(2000)
dataset2 = randn(2000)

#SEABORN JOINTPLOT
# Use the jointplot tool in seaborn to create side-by-side plots
# that visually represents distribution
sns.jointplot(dataset1, dataset2)

# You can change the scatter plot style to a shaded hex style
sns.jointplot(dataset1, dataset2, kind = 'hex')

# OR a Kernel Density Estimate Plot (KDE)
sns.jointplot(dataset1,dataset2, kind='kde')
`;

const kdeClassicCode = `
# Import seaborn library
import seaborn as sns

# LOAD DATASETS:
# Use the pre-existing dataset from Seaborn.
iris = sns.load_dataset('iris')

# Use .head() to show a sample couple of rows to see
# what the dataset is like. iris.head()
# DEFINE VARIABLES
# Define the variables by calling the dataset 'iris' and querying
# unique species names.
# define the two species by querying through the 'iris' dataset
setosa = iris.query("species == 'setosa'")
virginica = iris.query("species == 'virginica'")

# PLOTTING IRIS
# Try plotting the 'Iris' sepal width and length without differentiation between species.
# call the sepal_width and sepal_length, set properties: x, y, shade, bw, cmap, etc.
sns.kdeplot(iris['sepal_width'],iris['sepal_length'],shade=True,cmap='ocean_r', bw='silverman')
`;

const kdeMultiPlotCode = `
# MULTI-PLOTTING
# Now that we can visually see there are two distinct groups
# in the dataset, lets separate them out.

# make sure shade_lowest is set to False
sns.kdeplot(setosa.sepal_width,setosa.sepal_length,shade=True,cmap='inferno', shade_lowest=False)
sns.kdeplot(virginica.sepal_width,virginica.sepal_length,shade=True,cmap='magma', shade_lowest=False)
`;

const kernelDensityCode = `
# import data handling libraries
import numpy as np
from numpy.random import randn
# Import seaborn library
import seaborn as sns

# CREATE DATASETS:
# Use the randn tool to create a normally distributed dataset.
dataset = randn(45)

# SEABORN KDE
# Use the kdeplot tool in seaborn to create a kernel density
# estimation plot in just one step
sns.kdeplot(dataset)
`;

const kdeBandwidthCode = `
for bw in np.arange(0.5, 2, 0.25):
    sns.kdeplot(dataset, bw=bw, lw=1.8, label=bw)

# you can also set bw to pre-defined
# widths: {‘scott’ | ‘silverman’ | scalar | pair of scalars}
`;

const kdeVariableCode = `
# define variable kernel types with the known options
# including the commonly used gaussian.
kernel_types = ["biw", "cos", "epa", "gau", "tri", "triw"]

# Use label to set legend
for kern in kernel_types:
sns.kdeplot(dataset,kernel=kern,label=kern)
`;
