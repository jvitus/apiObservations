const express = require('express');
const routes = express.Router();
var studies = require('./studies');
var reports = require('./reports');
var observations = require('./observations');
var photos = require('./photos');

routes.get('/',(req,res) => {
  res.status(200).json({
    message :"Welcome to the api observations"
  })
})

routes.get('/studies', studies.getAll );
routes.get('/studies/:id', studies.getById );
routes.post('/studies', studies.add );
routes.put('/studies/:id', studies.update );
routes.delete('/studies/:id', studies.deleteIt );

routes.get('/reports', reports.getAll );
routes.get('/reports/:id', reports.getById );
routes.post('/reports', reports.add );
routes.put('/reports/:id', reports.update );
routes.delete('/reports/:id', reports.deleteIt );


routes.get('/observations', observations.getAll );
routes.get('/observations/:id', observations.getById );
routes.post('/observations', observations.add );
routes.put('/observations/:id', observations.update );
routes.delete('/observations/:id', observations.deleteIt );

routes.get('/photos', photos.getAll );
routes.get('/photos/:id', photos.getById );
routes.post('/photos', photos.add );
routes.put('/photos/:id', photos.update );
routes.delete('/photos/:id', photos.deleteIt );

module.exports = routes;
