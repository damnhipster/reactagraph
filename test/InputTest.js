var expect = require("chai").expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Input = require('../src/Input.js');
require('./testdom')('<html><body></body></html>')

describe('Input', function() {

  var input;

  before(function() {
    input = TestUtils.renderIntoDocument(
      React.createElement(Input)
    );
  });

  it("should let you enter a word", function() {
    var span = TestUtils.findRenderedDOMComponentWithTag(input, 'span');
    expect(span.getDOMNode().textContent).to.include('Hello world');
  });

});
