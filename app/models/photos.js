var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotosSchema = new Schema({
  name : { type: String , required : true},
  uri: { type: String , required : true},
 // _observation: { type : mongoose.Schema.Types.ObjectId, ref : 'Observations', required : true }
}/*,
{strict : false}*/
);

module.exports = mongoose.model('Photos', PhotosSchema);
