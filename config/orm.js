var connection = require("../config/connection.js");

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
  },

  insertOne: function(tableInput, whatToInsert, valOfCol) {
    var queryString = "SELECT INSERT ??";
    connection.query(queryString, [tableInput, whatToInsert, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });

},

updateOne: function(tableInput, whatToUpdate, valOfCol){

    var queryString = "UPDATE ?? SET ?? WHERE ??";
    connection.query(queryString, [tableInput, whatToUpdate, valOfCol], function(err, result){
        if (err) throw err;
        console.log(result);
    });
}
};

module.exports = orm;