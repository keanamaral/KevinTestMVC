// ===============================================================================
// Step1: LOAD DATA & Dependencies
// ===============================================================================
var path = require('path');
var tourinfo = require("../models/tourinfo");
// ===============================================================================
// Step2: API ROUTING
// ===============================================================================
module.exports = function (app) {
///////////////////////////////////////////////////////////////////////////////////
// Create all our API routes of 
// POST = CREATE; GET = READ; PUT = UPDATE; DELETE = DELETE
//displays all rows of tourInfo table 
///////////////////////////////////////////////////////////////////////////////////
app.get("/api/showtours", function(req, res) {
  table = "tourInfo";
  tourinfo.all(table, function(data){
    return res.json(data);
  })
});
///////////////////////////////////////////////////////////////////////////////////
//find records by tourName:
//Put in to test http://localhost:8475/api/showtour/Cape Cod Brew Tour
///////////////////////////////////////////////////////////////////////////////////
app.get("/api/showtour/:tourName", function(req, res) {
  table = "tourInfo"; console.log("Request: ", req.params);
  col = "tourName";
  val = req.params.tourName; console.log("TourName: ", val);
  tourinfo.selectWhere(table, col, val, function(data){
    return res.json(data);
  })
});
///////////////////////////////////////////////////////////////////////////////////
//Create or Add record to tourName:
///////////////////////////////////////////////////////////////////////////////////
app.post("/api/addtour", function(req, res) {
  table = "tourInfo";
  cols = ["tourName", "tourDescription", "tourInstructions"];
  vals = ["Aflak Blast", "Aflak back-ending!", "Be prepared to be flaked!"];
  //vals will be replaced with:
  // vals = [req.body.tname, req.bo req.body.tinst]
  // sent from view.js file
  tourinfo.create(table, cols, vals, function(data){
    // Send back the ID of the new tour
    res.json({ id: data.insertId, tour: data.inserttourName });
  })
});
///////////////////////////////////////////////////////////////////////////////////
// Update/change a record content in tourName based on id
//Put in browser to test http://localhost:8475/api/tour/11
///////////////////////////////////////////////////////////////////////////////////
app.put("/api/tour/:id", function(req, res) {
  table = "tourInfo";
  condition = "id = " + req.params.id;
  console.log("Updating: ", condition);
  objColVals = {
    tourName : 'Kean Beer Fest',
    tourDescription : 'Kean back-ending!'
  };
  // this will be replaced by objColVals = {
  //     tourName : req.body.tourName,
  //     tourDescription : req.body.tourName,
  //      }
  tourinfo.update(table, objColVals, condition, function(data){
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      return res.json(data);
      res.status(200).end();
    }
  })
});
///////////////////////////////////////////////////////////////////////////////////
//Delete a record in tourName based on id
//Put in browser to test http://localhost:8475/api/tour/11
///////////////////////////////////////////////////////////////////////////////////
app.delete("/api/tour/:id", function(req, res) {
  table = "tourInfo";
  var condition = "id = " + req.params.id;
  console.log("Deleting: ", condition);
  tourinfo.delete(table, condition, function(data){
    if (data.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    } else {
      return res.json(data);
      res.status(200).end();
    }
  })
});
///////////////////////////////////////////////////////////////////////////////////
};