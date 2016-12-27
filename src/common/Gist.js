import React from 'react';

function adjustHeightWhenComplete(myFrame, myDoc) {
  if(myDoc.readyState === 'complete') {
    var content_height = myFrame.contentWindow.document.body.scrollHeight;
    myFrame.style.height = content_height + 'px';
  } else {
    // This will be continiously called until the iFrame is ready
    setTimeout(function(){adjustHeightWhenComplete(myFrame, myDoc)});
  }
};

var Gist = React.createClass({
  displayName: 'GistEmbed',
  componentDidMount: function() {

    // Create an iframe, append it to this document where specified
    var gistFrame = document.createElement("iframe");
    gistFrame.setAttribute("width", "100%");
    gistFrame.setAttribute("height", "100%");
    gistFrame.setAttribute("frameBorder", "0");
    gistFrame.id = "gistFrame" + this.props.id;

    var zone = document.getElementById("gistZone" + this.props.id);
    zone.innerHTML = "";
    zone.appendChild(gistFrame);

    // Create the iframe's document

    var url = "https://gist.github.com/" + this.props.id + ".js";
    var gistFrameHTML = '<html><body><script type="text/javascript" src=' + url + '></script></body></html>';

    // Set iframe's document with a trigger for this document to adjust the height
    var gistFrameDoc = gistFrame.document;

    if (gistFrame.contentDocument) {
      gistFrameDoc = gistFrame.contentDocument;
    } else if (gistFrame.contentWindow) {
      gistFrameDoc = gistFrame.contentWindow.document;
    }

    gistFrameDoc.open();
    gistFrameDoc.writeln(gistFrameHTML);
    gistFrameDoc.close();

    adjustHeightWhenComplete(gistFrame, gistFrameDoc);
  },
  render: function() {
    return React.DOM.div({id: 'gistZone' + this.props.id});
  }
});

export default Gist;
