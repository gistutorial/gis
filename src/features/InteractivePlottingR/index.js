import React from 'react';
import { PrismCode } from 'react-prism';

export default () => (
    <div>
        <header className="jumbotron text-xs-center banner">
        <div className="container">
            <h1 className="jumbotron-heading">Interactive Plotting with 'ggplotly' in R</h1>
        </div>
        </header>
    <div className="container-narrow">
      <section>
      <h2 className="display-5">Introduction</h2>
        <p>
        Plotly is a great open source library that allows for easy, and comprehensive access to interactive 
        plots, perfect for data scientists who want to showcase their work to the world. Plotly can be used for 
        multiple languages including Python, MATLAB, Excel, Javascript, and ofcourse R. 
        <a href="https://plot.ly/"> Check them out</a>!
        </p>
        <p>In this tutorial, we will be specifically be focusing on converting graphs made through ggplot2 to 
            become more interactive. A great resource and gallery for all things ggplotly related 
            can be found <a href="https://plot.ly/ggplot2/">here</a>.
            <object data='./img/ggplotly1.html'></object>
        </p>
        
    
        </section>
    </div>
    </div>

);



