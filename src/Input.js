/** @jsx React.DOM */
var React = require('react/addons');

var Input = React.createClass({
  render: function () {
    return (
      React.createElement("span", null, "Hello world")
    );
  }
});

module.exports = Input;
