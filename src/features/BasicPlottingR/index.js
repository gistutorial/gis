import React from 'react';
import { PrismCode } from 'react-prism';

import LinePlot_CO2 from './img/LinePlot_CO2.png';
import boxPlot_CO2 from './img/boxPlot_CO2.png';
import histPlot_CO2 from './img/histPlot_CO2.png';
import ggplot_Hist from './img/ggplot_Hist.png';
import ggplot_Dot from './img/ggplot_Dot.png';
import ggplot_scatter from './img/ggplot_scatter.png';
import ggplot_scatterFancy from './img/ggplot_scatterFancy.png';
import ggplot_scatterFancy2 from './img/ggplot_scatterFancy2.png';
import ggplot_Box from './img/ggplot_Box.png';
import ggplot_Facet from './img/ggplot_facet.png';
import ggplot_Facet2 from './img/ggplot_facet2.png';
import ggplot_Scatter2 from './img/ggplot_scatter2.png';
import ggplot_bin2d from './img/ggplot_bin2d.png';


export default () => (
    <div>
        <header className="jumbotron text-xs-center banner">
        <div className="container">
            <h1 className="jumbotron-heading">Data Visualization in R</h1>
        </div>
        </header>
    <div className="container-narrow">
      <section>
        <h2 className="display-5">Introduction to Data Visualization</h2>
        <p>Learn how to visualize data with R using its statistical packages like 'ggplot2' within 'tidyverse'. 
            Plot comprehensive bar plots, line plots, heat maps, time series, and box plots. In this tutorial, 
            we will cover basic applications of the 'plot' function, as well as 'ggplot2'. We will run through 
            examples of the options and plotting methods depending upon the type of data and number of 
            variables we are dealing with.     
        </p>
        <h4 className="subsection">Sample Datasets</h4>
        <p>R provides for sample datasets to help readily test out the plotting packages 
            and functionalities. To view a complete list and description of each dataset 
            view <a href="https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/00Index.html">here.</a>
        </p>
        <pre><PrismCode className="language-python">{sampleData}</PrismCode></pre>
        <h4 className="subsection">Basic Plot Function(s)</h4>
        <h4>Time Series</h4>
        <pre><PrismCode className="language-python">{linePlot}</PrismCode></pre>
        <figure className="figure spacing">
            <img src={LinePlot_CO2} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Box Plot</h4>
        <pre><PrismCode className="language-python">{boxPlot}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={boxPlot_CO2} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Histograms</h4>
        <pre><PrismCode className="language-python">{histPlot}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={histPlot_CO2} className="figure-img img-fluid" alt="" />
        </figure>
        </section>
        <section>
        <h2 className="display-5">Plotting with ggplot2</h2>
        <p>ggplot2 is a great visualization library that is based upon the grammar of graphics, and is part of an even larger library 
        called <a href="https://www.tidyverse.org/"> tidyverse,</a> which holds an essential collection of data science packages. 
        In short, ggplot2 stems from the idea that every graph can be created by adding essential components and layers including: 
            <ul>
              <li>Data</li>
              <li>Aesthetics</li>
              <li>Geometries</li>
              <li>Facets</li>
              <li>Statistics </li>
              <li>Coordinates </li>
              <li>Theme </li>
            </ul>
        </p>
        <p>Find out more about ggplot2 by referencing this 
        <a href="https://www.rstudio.com/wp-content/uploads/2015/03/ggplot2-cheatsheet.pdf"> cheat sheet </a>
        brought to you by RStudio!
        </p>
        <pre><PrismCode className="language-python">{ggplot1}</PrismCode></pre>
        <h4 className="subsection">Single Variables</h4>
        <p>Plotting a single variable with the number of counts or occurences can be best done with plots such as 
        histograms, dot plots, and density plots. </p>
        <h4>Histograms</h4>
        <pre><PrismCode className="language-python">{ggplotHist}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_Hist} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Dot Plot</h4>
        <pre><PrismCode className="language-python">{ggplotDot}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_Dot} className="figure-img img-fluid" alt="" />
        </figure>
        <h4 className="subsection">Bivariate</h4>
        <p>Plotting two variables or bivariates are best done with plots such as scatter plots, box plots, and 
        bar plots. We will go over adding new layers, or components such as facets to group plots according to a 
        category, and the best fit line to visualize the mean values. </p>
        <h4>Scatter Plot</h4>
        <pre><PrismCode className="language-python">{ggplotScatter}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_scatter} className="figure-img img-fluid" alt="" />
        </figure>
        <pre><PrismCode className="language-python">{ggplotScatter2}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_scatterFancy} className="figure-img img-fluid" alt="" />
        </figure>
        <pre><PrismCode className="language-python">{ggplotScatter3}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_scatterFancy2} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Box Plot</h4>
        <pre><PrismCode className="language-python">{ggplotBox}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_Box} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Facet</h4>
        <pre><PrismCode className="language-python">{ggplotFacet}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_Facet} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Another Example Scatter vs. Facet</h4>
        <pre><PrismCode className="language-python">{ggplotFacet2}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_Scatter2} className="figure-img img-fluid" alt="" />
        </figure>
        <figure className="figure spacing">
        <img src={ggplot_Facet2} className="figure-img img-fluid" alt="" />
        </figure>
        <h4>Heat Map</h4>
        <pre><PrismCode className="language-python">{ggplotbin2d}</PrismCode></pre>
        <figure className="figure spacing">
        <img src={ggplot_bin2d} className="figure-img img-fluid" alt="" />
        </figure>
        </section> 
    </div>
    </div>

);

const sampleData=`#load dataset
data(co2)

# see a sample of the data 
head(co2)

#Jan    Feb    Mar    Apr    May    Jun    Jul    Aug    Sep    Oct    Nov
#1959 315.42 316.31 316.50 317.56 318.13 318.00 316.39 314.65 313.68 313.18 314.66
#1960 316.27 316.81 317.42 318.87 319.87 319.43 318.01 315.74 314.00 313.68 314.84
#1961 316.73 317.54 318.38 319.31 320.42 319.61 318.42 316.63 314.83 315.16 315.94
#1962 317.78 318.40 319.53 320.42 320.85 320.45 319.45 317.25 316.11 315.27 316.53
#1963 318.58 318.92 319.70 321.22 322.08 321.31 319.58 317.61 316.05 315.83 316.91
`;

const linePlot=`# Use plot() function with type "l" 
# Specify main title, x & y labels 
plot(co2, type = "l", main = "Mauna Loa Atmospheric CO2 Concentration", 
        xlab = "Year", ylab = "CO2 Concentration", col="blue") 
`;

const boxPlot=`# Use library RColorBrewer to designate a color palette 
library(RColorBrewer)

# Call plot method comparing the type of plant with CO2 uptake
# Use brewer.pal() to call the palette function 
plot(CO2$Plant, CO2$uptake, xlab = "Plant ID", ylab = "CO2 Uptake", 
        col=brewer.pal(3,"Set3"))
`;

const histPlot=`# Use hist(), specify number of breaks, and color palette
hist(CO2$uptake, breaks = 8, col=brewer.pal(4,"Set3"), 
        main = "Frquency vs. Atmospheric CO2 Uptake", 
        xlab = "CO2 Uptake")
`;

const ggplot1=`# Install ggplot2 library 
install.packages('ggplot2')

# Load library 
library(ggplot2)
`;

const ggplotHist=`# Set up the Data & Aesthetics 
pl <- ggplot(mpg , aes(hwy))

# Specify geometry 
pl2 <- pl + geom_histogram(binwidth=1, color='yellow', fill='red', alpha=0.4)

# Add x and y labels 
pl3 <- pl2 + xlab('Highway MPG') + ylab('Count')

print(pl3) 
`;

const ggplotDot=`# Set up the Data & Aesthetics 
pl <- ggplot(mpg , aes(hwy))

# Specify geometry 
pl2 <- pl + geom_dotplot(binwidth=1, color='green', fill='gray', alpha=0.6)

# Add x and y labels 
pl3 <- pl2 + xlab('Highway MPG') + ylab('Count')

print(pl3) 
`;

const ggplotScatter=`# Set up the Data & Aesthetics 
pl <- ggplot(mpg, aes(cty, hwy))

# Specify geometry 
pl2 <- pl + geom_point(alpha=0.3)

print(pl2)
`;

const ggplotScatter2=`# Allow Cylinder variable to display as differed size
# While fuel type as color
pl2 <- pl + geom_point(aes(size=cyl, color = fl),alpha=0.3)

print(pl2)
`;

const ggplotScatter3=`# Add a line of best fit with shaded areas identifying deviation
pl3 <- pl2 + geom_smooth(linetype=6, span = 0.8)
print(pl3)
`;

const ggplotBox=`# Set up the Data & Aesthetics 
pl <- ggplot(chickwts, aes(feed, weight))

# Specify plot type 
# Allow type of feed to be distinguishable by color  
pl2 <- pl + geom_boxplot(aes(colour=feed))
print(pl2)
`;

const ggplotFacet=`# Create a dataframe with the VADeaths dataset 
d.VAD <- data.frame(
    DeathRate = dr,
    age = rep(ordered(rownames(VADeaths)), length.out = n),
    gender = gl(2, 5, n, labels = c("M", "F")),
    site =  gl(2, 10, labels = c("rural", "urban")))

# Specify Data and Aesthetics 
pl <- ggplot(d.VAD, aes(DeathRate, age)) 

# Specify plot type and differentiate point shape by gender 
pl2 <- pl + geom_point(shape = gender aes(colour=gender))

# Plot by site (rural vs urban) 
pl3 <- pl2 + facet_grid(.~site) + xlab('Death Rate')

print(pl3)
`;

const ggplotFacet2=`# Set up the Data & Aesthetics 
p <- ggplot(Orange, aes(age, circumference)) 

# Distinguish color by Tree type (1-5) and set the size as the circumference 
p1 <- p + geom_point(aes(colour=Tree, size=circumference), alpha=0.6)

# Add line of best fit 
p1b <- t1 + geom_smooth(linetype=3) + theme_minimal()
print(p1b)

# OR we can group the plots by type of tree like this
p2 <- p1 + facet_grid(.~Tree) 
print(p2)
`;

const ggplotbin2d=`# Set up the Data & Aesthetics 
p <- ggplot(faithful, aes(waiting, eruptions))

# Specify plot type and binwidth
p1 <- p + geom_bin2d(binwidth = c(3, 0.2))

# Create gradient fill from red to white 
p2 <- p1 + scale_fill_gradient(high='red', low='white')

print(p2)
`;