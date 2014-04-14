exports.index = function(req, res) {
  res.render('index', {
    helloText: 'node.js'
  });
};

exports.partials = function(req, res) {
  var partial = req.params[0];
  res.render('partials/' + partial);
};

exports.data = function(req, res) {
  res.send({
    title: "My example",
    year: "2014",
    technology: "javascript"
  });
};
