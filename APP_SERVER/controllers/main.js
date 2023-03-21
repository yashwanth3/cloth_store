const index = function(req, res, next) {
  res.render('index', { title: 'GSM Arena' });
};

module.exports = {
index
};