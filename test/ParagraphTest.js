var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>');

var Paragraph = require('../src/Paragraph.js');
var Counter = require('../src/Counter.js');

describe('Paragraph', function() {

  it("should count commas", function() {
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: "Hi, hello there, greetings"})
    );
    var countNode = TestUtils.findRenderedDOMComponentWithClass(paragraph, "commas").getDOMNode();
    expect(countNode.textContent).to.include("Commas: 2");
  });

  it("should count number of words", function() {
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: "Hi, hello there, greetings "})
    );
    var countNode = TestUtils.findRenderedDOMComponentWithClass(paragraph, "words").getDOMNode();
    expect(countNode.textContent).to.include("Words: 0");
  });

  it("should count full stops", function() {
    var myInput = ["His palms are sweaty.",
      "Knees weak, arms spaghetti.",
      "There's vomit on his spaghetti already.",
      "Mom's spaghetti."
    ]
    var paragraph = TestUtils.renderIntoDocument(
      React.createElement(Paragraph, {input: myInput.join()})
    );
    var countNode = TestUtils.findRenderedDOMComponentWithClass(paragraph, "full-stops").getDOMNode();
    expect(countNode.textContent).to.include("Full Stops: 4");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});

