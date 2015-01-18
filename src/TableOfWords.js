var React = require('react/addons');

var TableOfWords = React.createClass({
  render: function() {
    var words = this.props.words;
    var table = {};
    for(var i=0; i<words.length; i++) {
      var letter = words[i][0];
      if(table[letter] !== undefined && table[letter] instanceof Array) {
        table[letter].push(words[i]);
      } else {
        table[letter] = [words[i]];
      }
    }

    var tableNode = Object.keys(table).map(function(key) {
      if(key !== "undefined") {
        var listOfWords = table[key];
        var wordNodes = listOfWords.map(function(word) {
          return (
            React.createElement("li", null, word)
          );
        });
        return (
          React.createElement("div", {className: "list-of-words"}, null,
            React.createElement("p", {className: "text--instructions"}, key.toUpperCase()),
            React.createElement("ul", {className: "list list--grey"}, wordNodes)
          )
        );
      }
    });
    return (
      React.createElement("div", {className: "table-of-words"}, null,
        tableNode
      )
    );
  }
});

module.exports = TableOfWords;
