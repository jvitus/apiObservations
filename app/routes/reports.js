
var Reports = require('../models/reports');


exports.getAll = function(req, res) {
    Reports.find( function(err,reports) {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(200).json(reports);
    })
};

exports.getById = function(req, res) {
    Reports.findById(req.params.id, function (err , report ) {
      if ( err ) {
        res.status(500).send(err)
      }
      if( !report ) {
        res.status(404).end();
      }
      res.status(200).json(report);
    });
};

exports.add = function(req, res) {
  var report = new Reports(req.body);
  report.save(function(err) {
    if (err) {
      return res.status(503).send(err);
    }
      res.status(201).send({ "id" : report._id });
  });
};


exports.update = function(req, res) {
  Reports.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, report ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};

exports.deleteIt = function(req, res) {
  Reports.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, report ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};
