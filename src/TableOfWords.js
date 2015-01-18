var React = require('react/addons');

var Counter = React.createClass({
  render: function() {
    var wordNodes = this.props.words.map(function(word) {
      return (
        React.createElement("li", null, word)
      );
    });
    return (
      React.createElement("ul", null,
        wordNodes
      )
    );
  }
});

module.exports = Counter;
