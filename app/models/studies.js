// "use strict";
//
//
// module.exports = function(sequelize, DataTypes) {
//   var Studies = sequelize.define("Studies",
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     num: { type: DataTypes.STRING, allowNull: false },
//     title: { type: DataTypes.STRING, allowNull: false },
//     customerId : { type: DataTypes.STRING, allowNull: true },
//     location: { type: DataTypes.STRING, allowNull: true }
//   },{
//     classMethods: {
//       associate: function(models) {
//         Studies.hasMany(models.Reports)
//       }
//     }
//   }
// );
//
//   return Studies;
// };

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudiesSchema = new Schema({
  num : { type: String , required : true},
  title: { type: String , required : true},
  customerId : { type: String , required : false},
  location : { type: String , required : false}
});

module.exports = mongoose.model('Studies', StudiesSchema);
