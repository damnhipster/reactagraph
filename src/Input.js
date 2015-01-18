var React = require('react/addons');

var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      React.createElement("input", {type: "text", value: value, onChange: this.handleChange})
    );
  }
});

module.exports = Input;
