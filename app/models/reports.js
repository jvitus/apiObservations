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
 fkStudy : {type : String , required : true },
 observations : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Observations', required : false }]
}
);

ReportsSchema.post('validate' , function(req,next) {
  console.log(req);
  Studies.findById(req.fkStudy, function(err) {
    if(err)
      next(err);
    else {
      next();
    }
  });
});

module.exports = mongoose.model('Reports', ReportsSchema);
