// ===============================================================================
// Step1: GET DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// Step2: ROUTING
// Here we create server routes for tours page
// ===============================================================================
module.exports = function(app) {
//// Home Page///////////////////////////////////////////////////////////////
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/showTours.html"));
	});
//////////////////////////////////////////////////////////////////////////////
};