var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var app = module.exports = express();
var port = process.env.PORT || 3245;

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

// Configure app
app.use(sassMiddleware({
  src: __dirname + '/sass',
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'compressed'
}));

app.get('/', function(request, response) {
  response.render('index.html');
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', port);
});
