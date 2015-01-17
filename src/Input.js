var React = require('react/addons');

var Input = React.createClass({
  render: function () {
    return (
      React.createElement("span", null, "Enter text here:")
    );
  }
});

module.exports = Input;
