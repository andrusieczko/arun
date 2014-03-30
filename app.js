var Application = require('./Application');

var application = new Application(process.env.PORT || 3000);

application.start();

module.exports = application;
