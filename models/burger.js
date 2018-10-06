var orm = require("../config/orm.js");

orm.selectAll("burger_name", "burgers");

orm.insertOne("burgers","burger_name", "devoured");

orm.updateOne("burgers", "burger_name", "devoured");



module.exports = orm;