var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Studies = require('./studies');

var ReportsSchema = new Schema({
  reportName : {type : String , required : true },
  worker : {type : String , required : true },
  inside : {type : String , required : true },
  date : {type : Date , required : true },
  begin : {type : String , required : true },
  exit : {type : String , required : true },
  diameter : {type : String , required : true },
  direction : {type : String , required : false },
  pipeType : {type : String , required : true },
  description : {type : String , required : true },
  _study : { type : mongoose.Schema.Types.ObjectId, ref : 'Studies', required : true },
  //_observations : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Observations', required : false }]
}
);

// ReportsSchema.pre('save', function(req, next) {
//     // need to have some explanations of usage between post:validate and pre:save
// });

ReportsSchema.post('validate', function(req, next) {
  Studies.findById(req._study, function(err, study) {
      if ( err ) {
        next(err);
      }
      if( !study ) {
        var error = new Error('attached Study doesn\'t exist! ');
        next(error);
      }
      else {
        next();
      }
  });
});

module.exports = mongoose.model('Reports', ReportsSchema);
