const express = require('express');
const routes = express.Router();
var studies = require('./studies');

// routes.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!' });
// });
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



module.exports = routes;
