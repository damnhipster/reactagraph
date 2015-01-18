var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
require('./testdom')('<html><body></body></html>')

var CommaCount = require('../src/CommaCount.js');

describe('CommaCount', function() {

  it("should display count", function() {
    var commaCount = TestUtils.renderIntoDocument(
      React.createElement(CommaCount, {count:3})
    );
    var commaCountNode = TestUtils.findRenderedDOMComponentWithTag(commaCount, 'p').getDOMNode();
    expect(commaCountNode.textContent).to.include("3");
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});


