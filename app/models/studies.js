var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Reports = require('./reports');

var StudiesSchema = new Schema({
  num : { type: String , required : true},
  title: { type: String , required : true},
  language: { type: String , required : true},
  customerId : { type: String , required : false},
  location : { type: String , required : false},
  internalCustomerId: { type: String , required : true},
  //_reports : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Reports'}],
  }
// {strict : false}
);

module.exports = mongoose.model('Studies', StudiesSchema);
