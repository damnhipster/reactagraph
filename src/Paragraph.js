var React = require('react/addons');
var Counter = require('./Counter');

var Paragraph = React.createClass({
  count: function(str, input) {
    return input.split(str).length - 1;
  },
  render: function() {
    var commaCounter = this.count(',', this.props.input);
    var fullStopCounter = this.count('.', this.props.input);
    return (
      React.createElement("div", null,
        React.createElement(Counter, {className: "commas", label: "Commas", count: commaCounter}),
        React.createElement(Counter, {className: "full-stops", label: "Full Stops", count: fullStopCounter})
      )
    );
  }
});

module.exports = Paragraph;
