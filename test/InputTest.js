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
    var span = TestUtils.findRenderedDOMComponentWithTag(input, 'span');
    expect(span.getDOMNode().textContent).to.include('Enter text here:');
  });

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body)
    document.body.innerHTML = ""
    setTimeout(done)
  })

});
