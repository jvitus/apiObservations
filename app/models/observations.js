var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObservationsSchema = new Schema({
  photos : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Photos', required : false }]
},
{strict : false}
);

module.exports = mongoose.model('Observations', ObservationsSchema);
