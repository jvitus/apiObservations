
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
    Studies.findById(req.params.id).populate('_reports').exec( function (err , studie ) {
      if ( err ) {
        res.status(500).send(err)
      }
      console.log( studie )
      if( !studie ) {
        res.status(404).send("");
      }
      else {
        console.log(JSON.stringify(studie, null, "\t"));
        res.status(200).send( JSON.stringify(studie, null, "\t"));//studie);
      }
    });
};

exports.add = function(req, res) {
  var studie = new Studies(req.body);
  studie.save(function(err) {
    if (err) {
      return res.status(503).send(err);
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
