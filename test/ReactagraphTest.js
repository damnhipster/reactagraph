var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>')

var Reactagraph = require('../src/Reactagraph.js');
var Paragraph = require('../src/Paragraph.js');

describe('Reactagraph', function() {

  var reactagraph;

  before(function() {
    reactagraph = TestUtils.renderIntoDocument(
      React.createElement(Reactagraph)
    );
  });

  it("should let you enter a word", function() {
    var inputNode = TestUtils.findRenderedDOMComponentWithTag(reactagraph, 'input').getDOMNode();
    TestUtils.Simulate.change(inputNode, {target: {value: "Hello world"}});
    expect(inputNode.value).to.include('Hello world');
  });

  it("allows special characters to be entered", function() {
    var inputNode = TestUtils.findRenderedDOMComponentWithTag(reactagraph, 'input').getDOMNode();
    TestUtils.Simulate.change(inputNode, {target: {value: "( - _ ‘ [ ] { } “ £ $ & % ! : ; \\ / )"}});
    expect(inputNode.value).to.equal("( - _ ‘ [ ] { } “ £ $ & % ! : ; \\ / )");
  });

  it("updates Paragraph whenever there's new input", function() {
    var inputNode = TestUtils.findRenderedDOMComponentWithTag(reactagraph, 'input').getDOMNode();
    TestUtils.Simulate.change(inputNode, {target: {value: "some words"}});
    var paragraphNode = TestUtils.findRenderedComponentWithType(reactagraph, Paragraph);
    expect(paragraphNode.props.input).to.equal("some words");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});

