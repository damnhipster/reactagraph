var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>')

var Counter = require('../src/Counter.js');

describe('Counter', function() {

  it("should display count", function() {
    var count = TestUtils.renderIntoDocument(
      React.createElement(Counter, {label: "Label", count:3})
    );
    var countNode = TestUtils.findRenderedDOMComponentWithTag(count, 'p').getDOMNode();
    expect(countNode.textContent).to.include("Label: 3");
  });

  it("should set class", function() {
    var count = TestUtils.renderIntoDocument(
      React.createElement(Counter, {className: "commas", label: "commas", count:3})
    );
    var countNode = TestUtils.findRenderedDOMComponentWithClass(count, 'commas').getDOMNode();
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});


