var bodyParser = require("body-parser");
var path = require("path");
var pups = require("./pups")

function apiRoutes(app){
	//set up all API routes and corresponding functionality
	app.post("/api/pups", function(req,res){

	})
	app.get("/api/pups", function(req,res){
		
	});
}

module.exports = apiRoutes;