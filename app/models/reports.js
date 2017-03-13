// "use strict";
//
//
// module.exports = function(sequelize, DataTypes) {
//   var Reports = sequelize.define("Reports",
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     reportName: { type: DataTypes.STRING, allowNull: false },
//     worker: { type: DataTypes.STRING, allowNull: false },
//     date : { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
//     begin: { type: DataTypes.STRING, allowNull: true },
//     exit: { type: DataTypes.STRING, allowNull: true },
//     diameter: { type: DataTypes.STRING, allowNull: true },
//     description: { type: DataTypes.STRING, allowNull: true },
//   },
//   {
//     classMethods: {
//       associate: function(models) {
//         Reports.belongsTo(models.Studies, {
//           onDelete: "CASCADE",
//           foreignKey: {
//             allowNull: false
//           }
//       });
//     }
//   }
// });
//
//   return Reports;
// };

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportsSchema = new Schema({
  reportName : { type: String , required : true},
  worker: String,
  date : Date,
  begin : String,
  exit: String,
  diameter: String,
  description : String
});


module.exports = mongoose.model('Reports', ReportsSchema);
