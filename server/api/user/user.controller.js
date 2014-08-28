'use strict';

var _    = require('lodash');
var User = require('./user.model')();

// Get list of users
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
  console.log(req);
  User.forge(req.body).save().then(function(user){
    res.json(user.toJSON());
  }, function(err){
    res.json({message: 'Something went wrong', error: err});
  });
};
