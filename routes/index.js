
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mobile UI' })
  // res.render('map', {title: 'Map'})
};