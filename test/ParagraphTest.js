var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>');

var Paragraph = require('../src/Paragraph.js');
var CommaCount = require('../src/CommaCount.js');

describe('Paragraph', function() {

  it("should count commas", function() {
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: "Hi, hello there, greetings"})
    );
    var paragraphNode = TestUtils.findRenderedComponentWithType(paragraph, CommaCount).getDOMNode();
    expect(paragraphNode.textContent).to.include("2");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});

