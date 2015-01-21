var React = require('react/addons');
var Counter = require('./Counter');
var TableOfWords = require('./TableOfWords');

var Paragraph = React.createClass({
  count: function(str, input) {
    return input.split(str).length - 1;
  },
  purgeSpecialCharacters: function(input) {
    return input.replace(/((?![a-zA-Z\.,]).)/g, '');
  },
  render: function() {
    var input = this.props.input
      , commaCounter = this.count(',', input)
      , fullStopCounter = this.count('.', input)
      , wordsCounter = this.count(' ', input)
      , wordsList = this.purgeSpecialCharacters(input).split(' ');
    return (
      React.createElement("div", null,
        React.createElement(TableOfWords, {words: wordsList}),
        React.createElement(Counter, {className: "commas", label: "Commas", count: commaCounter}),
        React.createElement(Counter, {className: "full-stops", label: "Full Stops", count: fullStopCounter}),
        React.createElement(Counter, {className: "words", label: "Words", count: wordsCounter})
      )
    );
  }
});

module.exports = Paragraph;
