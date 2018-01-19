var bodyParser = require("body-parser");
var path = require("path");

function apiRoutes(app){
	//set up all API routes and corresponding functionality
	app.get("/api/survey", function(req,res){
		res.end();
	});
}

module.exports = apiRoutes;