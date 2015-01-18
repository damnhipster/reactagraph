var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>');

var Paragraph = require('../src/Paragraph.js');
var FullStopCount = require('../src/FullStopCount.js');
var CommaCount = require('../src/CommaCount.js');

describe('Paragraph', function() {

  it("should count commas", function() {
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: "Hi, hello there, greetings"})
    );
    var countNode = TestUtils.findRenderedComponentWithType(paragraph, CommaCount).getDOMNode();
    expect(countNode.textContent).to.include("Commas: 2");
  });

  it("should count full stops", function() {
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: "Hi. Take a seat. Who bitch this is."})
    );
    var countNode = TestUtils.findRenderedComponentWithType(paragraph, FullStopCount).getDOMNode();
    expect(countNode.textContent).to.include("Full Stops: 3");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});

