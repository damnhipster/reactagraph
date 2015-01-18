var React = require('react/addons');

var Counter = React.createClass({
  render: function() {
    return (
      React.createElement("p", {className: this.props.className}, this.props.label + ": " + this.props.count)
    );
  }
});

module.exports = Counter;
