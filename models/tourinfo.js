var orm = require("../config/orm.js");

var tourinfo = {
  all: function(table, cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
      return res;
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete(table, condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectWhere: function (table, cols, vals, cb) {
    orm.selectWhere(table, cols, vals, function(res){
      cb(res);
    })
  },
  // The variables cols and vals are arrays.
  createP: function (table, col, cb) {
    orm.create(table, cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = tourinfo;