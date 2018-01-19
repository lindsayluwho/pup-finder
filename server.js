var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require ("/app/routing/apiRoutes");
var htmlRoutes = require("/app/routing/htmlRoutes");

//call Express, set up port
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up routes
apiRoutes(app);
htmlRoutes(app);

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




