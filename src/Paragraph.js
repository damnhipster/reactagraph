var React = require('react/addons');
var CommaCount = require('./CommaCount');
var FullStopCount = require('./FullStopCount');

var Paragraph = React.createClass({
  count: function(str, input) {
    return input.split(str).length - 1;
  },
  render: function() {
    debugger;
    var commaCount = this.count(',', this.props.input);
    var fullStopCount = this.count('.', this.props.input);
    return (
      React.createElement("div", null,
        React.createElement(CommaCount, {count: commaCount}),
        React.createElement(FullStopCount, {count: fullStopCount})
      )
    );
  }
});

module.exports = Paragraph;
