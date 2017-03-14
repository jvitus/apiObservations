
var Observations = require('../models/observations');


exports.getAll = function(req, res) {
    Observations.find( function(err,observations) {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(200).json(observations);
    })
};

exports.getById = function(req, res) {
    Observations.findById(req.params.id, function (err , observation ) {
      if ( err ) {
        res.status(500).send(err)
      }
      if( !observation ) {
        res.status(404).end();
      }
      res.status(200).json(observation);
    });
};

exports.add = function(req, res) {
  var observation = new Observations(req.body);
  observation.save(function(err) {
    if (err) {
      return res.status(503).send(err);
    }
      res.status(201).send({ "id" : observation._id });
  });
};


exports.update = function(req, res) {
  Observations.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, observation ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};

exports.deleteIt = function(req, res) {
  Observations.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, observation ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};
