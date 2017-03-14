
var Photos = require('../models/photos');


exports.getAll = function(req, res) {
    Photos.find( function(err,photos) {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(200).json(photos);
    })
};

exports.getById = function(req, res) {
    Photos.findById(req.params.id, function (err , photo ) {
      if ( err ) {
        res.status(500).send(err)
      }
      if( !photo ) {
        res.status(404).end();
      }
      res.status(200).json(photo);
    });
};

exports.add = function(req, res) {
  var photo = new Photos(req.body);
  photo.save(function(err) {
    if (err) {
      return res.status(503).send(err);
    }
      res.status(201).send({ "id" : photo._id });
  });
};


exports.update = function(req, res) {
  Photos.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, photo ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};

exports.deleteIt = function(req, res) {
  Photos.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, photo ) {
    if (err){
      return res.status(500).send(err)
    }
    res.status(204).send();
 });
};
