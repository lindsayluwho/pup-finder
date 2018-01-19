var bodyParser = require("body-parser");
var path = require("path");

function htmlRoutes(app){
	//set up all HTML routes and corresponding functionality
	app.get("/survey", function(req,res){
		res.end();
	});

	app.get("/", function(req,res){
		res.end();
	})
}

module.exports = htmlRoutes;