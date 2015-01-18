var React = require('react/addons');

var FullStopCount = React.createClass({
  render: function() {
    return (
      React.createElement("p", null, "Full Stops: " + this.props.count)
    );
  }
});

module.exports = FullStopCount;

