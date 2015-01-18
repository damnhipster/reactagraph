var React = require('react/addons');
var Paragraph = require('./Paragraph.js');

var Reactagraph = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      React.createElement("div", null,
        React.createElement("input", {type: "text", value: value, onChange: this.handleChange}),
        React.createElement(Paragraph, {input: value})
      )
    );
  }
});

module.exports = Reactagraph;
