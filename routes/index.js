/*
 * GET home page.
 */

/*
 * GET home page.
 */


var data = require('../src/data.json');

exports.view = function(req, res){
  res.json(data[1]);
};

