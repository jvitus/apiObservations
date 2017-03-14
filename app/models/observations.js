var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObservationsSchema = new Schema({
  type: { type: String, required: true, uppercase: true, enum: ['DEFAULT', 'DILATOFLEX', 'CMA'], default:'DEFAULT'},
  photos : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Photos'}]
},
{strict : false}
);

module.exports = mongoose.model('Observations', ObservationsSchema);
