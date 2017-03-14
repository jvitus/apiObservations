var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotosSchema = new Schema({
  name : { type: String , required : true},
  uri: { type: String , required : true},
  fkObservation: { type: String , required : true}
}/*,
{strict : false}*/
);

module.exports = mongoose.model('Photos', PhotosSchema);
