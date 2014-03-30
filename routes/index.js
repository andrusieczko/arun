exports.index = function(req, res) {
  res.render('index', {
    helloText: 'node.js'
  });
};

exports.partials = function(req, res) {
  var partial = req.params.partial;
  res.render('partials/' + partial);
};
