var React = require('react/addons');
var CommaCount = require('./CommaCount');

var Paragraph = React.createClass({
  parseInput: function(input) {
    return input.split(",").length - 1;
  },
  render: function() {
    var commaCount = this.parseInput(this.props.input);
    return (
      React.createElement(CommaCount, {count: commaCount})
    );
  }
});

module.exports = Paragraph;
