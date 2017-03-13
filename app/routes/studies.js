// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
// // Connection URL
// var url = 'mongodb://localhost:27017/apiObs';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//
//   db.close();
// });

var Studies = require('../models/studies');


exports.getAll = function(req, res) {
    Studies.find( function(err,studies) {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(200).json(studies);
    })
};

exports.getById = function(req, res) {
    Studies.findById(req.params.id, function (err , studie ) {
      if ( err ) {
        res.status(500).send(err)
      }
      if( !studie ) {
        res.status(404).end();
      }
      res.status(200).json(studie);
    });
};

exports.add = function(req, res) {
  var studie = new Studies(req.body);
  studie.save(function(err) {
    if (err) {
      return res.status(500).send(err);
    }
      res.status(201).send({ "id" : studie._id });
  });
};


exports.update = function(req, res) {
  Studies.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, studie ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};

exports.deleteIt = function(req, res) {
  Studies.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, studie ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};
