/*
 * GET home page.
 */

/*
 * GET home page.
 */


var data = require('../src/chores.json');

exports.view = function(req, res){
  res.json(data);
};

