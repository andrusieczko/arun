var express = require('express');
var http = require('http');
var path = require('path');

var Application = function(port) {
  this._setUpExpress(port);
  this._routes();
};

Application.prototype = {

  app: null,
  server: null,

  _setUpExpress: function(port) {
    this.app = express();

    var isDev = this.app.get('env') === 'development';

    this.app.set('port', port);
    this.app.set('view engine', 'jade');
    this.app.use(express.favicon());
    this.app.use(express.logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(express.methodOverride());
    this.app.use(express.cookieParser('Super non-secret seed!'));
    this.app.use(require('less-middleware')({
      src: path.join(__dirname, 'less'),
      dest: path.join(__dirname, 'public/stylesheets'),
      prefix: '/stylesheets',
      force: isDev,
      debug: isDev
    }));
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(this.app.router);
  },

  _routes: function() {
    var routes = require('./routes');
    this.app.get('/partials/*', routes.partials);

    this.app.get('/', routes.index);
    this.app.get('/data', routes.data);
  },

  start: function() {
    var port = this.app.get('port');
    this.server = http.createServer(this.app).listen(port, function() {
      console.log('Express server listening on port ' + port);
    });
    return this.server;
  },

  shutdown: function(onClose) {
    this.server.close(onClose);
  }

};

module.exports = Application;
