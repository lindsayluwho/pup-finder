var bodyParser = require("body-parser");
var path = require("path");

function htmlRoutes(app){
	//set up all HTML routes and corresponding functionality
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/?", function(req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})
}

module.exports = htmlRoutes;