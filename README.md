arun [![Build Status](https://travis-ci.org/andrusieczko/arun.svg)](https://travis-ci.org/andrusieczko/arun)
====

*arun*: __A__ ngularJS + __r__ equire.js + __u__ i.bootstrap + __n__ ode.js seed

This is an example project that runs on node.js + express.js on the backend and AngularJS with Bootstrap3 (using ui-bootstrap) supported by require.js as modules loader.

## Installation

### Dependencies

* [node.js](http://nodejs.org/download/)
* `$ npm install bower -g` - [bower](http://bower.io/) to download frontend dependencies
* `$ npm install grunt-cli -g` [grunt](http://gruntjs.com/) to build the project

### Install & run

`$ git clone https://github.com/andrusieczko/arun.git`  
`$ cd arun`  
`$ npm install`  
`$ bower install`  
`$ node app.js`  

and go to `http://localhost:3000` using your browser.

## Used components / technologies

Backend:

* node.js
* express.js
* jade
* less

Frontend:

* AngularJS 1.2.15
* require.js
* Bootstrap 3.1.1
* ui-bootstrap
* Font Awesome 4.0.3

Dev:

* grunt, bower
* karma with jasmine, sinonjs and protractor (soon)

## License

This code was released under [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE).