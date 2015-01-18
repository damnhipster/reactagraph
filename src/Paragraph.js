var React = require('react/addons');
var Counter = require('./Counter');

var Paragraph = React.createClass({
  count: function(str, input) {
    return input.split(str).length - 1;
  },
  render: function() {
    var input = this.props.input;
    var commaCounter = this.count(',', input);
    var fullStopCounter = this.count('.', input);
    var wordsCounter = this.count(',', input);
    return (
      React.createElement("div", null,
        React.createElement(Counter, {className: "commas", label: "Commas", count: commaCounter}),
        React.createElement(Counter, {className: "full-stops", label: "Full Stops", count: fullStopCounter}),
        React.createElement(Counter, {className: "words", label: "Words", count: fullStopCounter})
      )
    );
  }
});

module.exports = Paragraph;
