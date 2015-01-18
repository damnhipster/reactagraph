var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>')

var Input = require('../src/Input.js');

describe('Input', function() {

  var input;

  before(function() {
    input = TestUtils.renderIntoDocument(
      React.createElement(Input)
    );
  });

  it("should let you enter a word", function() {
    var inputNode = TestUtils.findRenderedDOMComponentWithTag(input, 'input').getDOMNode();
    TestUtils.Simulate.change(inputNode, {target: {value: "Hello world"}});
    expect(inputNode.value).to.include('Hello world');
  });

  it("allows special characters to be entered", function() {
    var inputNode = TestUtils.findRenderedDOMComponentWithTag(input, 'input').getDOMNode();
    TestUtils.Simulate.change(inputNode, {target: {value: "( - _ ‘ [ ] { } “ £ $ & % ! : ; \\ / )"}});
    expect(inputNode.value).to.equal("( - _ ‘ [ ] { } “ £ $ & % ! : ; \\ / )");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});
