module.exports = function(markup) {
  if (typeof document !== 'undefined') return
  var jsdom          = require("jsdom").jsdom
  global.document    = jsdom(markup || '')
  global.window      = document.parentWindow
  // ... add whatever browser globals your tests might need ...
}
