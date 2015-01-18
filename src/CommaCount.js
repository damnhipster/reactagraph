var React = require('react/addons');

var CommaCount = React.createClass({
  render: function() {
    return (
      React.createElement("p", null, "Commas: " + this.props.count)
    );
  }
});

module.exports = CommaCount;

