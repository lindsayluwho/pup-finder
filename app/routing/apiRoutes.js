var bodyParser = require("body-parser");
var path = require("path");
var pups = require("../data/pups")




function apiRoutes(app){
	//set up all API routes and corresponding functionality
	var userArray = [];
	var pupScores = [];
	var differencesArray = [];
	
	app.post("/api/pups", function(req,res){
		// get user scores and push into an array
		userArray = [];
		pupScores = [];
		differencesArray = [];
		var scores = req.body;
		userArray.push(parseInt(scores.question1));
		userArray.push(parseInt(scores.question2));
		userArray.push(parseInt(scores.question3));
		userArray.push(parseInt(scores.question4));
		userArray.push(parseInt(scores.question5));
		userArray.push(parseInt(scores.question6));
		userArray.push(parseInt(scores.question7));
		userArray.push(parseInt(scores.question8));
		userArray.push(parseInt(scores.question9));
		userArray.push(parseInt(scores.question10));
		console.log("userArray: " + userArray);

		//get scores from pups objects and add to pupScores array as an array of pup objects with scores array property
		for(i = 0; i < pups.length; i++){
			var pup = {
				scores: pups[i].scores,
				differences: [],
				totalDifference: 0,
			};
			pupScores.push(pup);
		}



		//define variable to represent scores objects' index within pupScores array to represent which pup's scores are being compared
		var pupIndex = 0;

		//loop through each index of each scores array and compare to userArray, push differences to differences array property within each pup object within pupScores array	
		for(i = 0; i < pupScores.length; i ++){
			var currentPup = pupScores[pupIndex];
			console.log("pupIndex: " + pupIndex);
			console.log ("Total difference: " + currentPup.totalDifference);
			var totalDifferences = 0;

			for (j = 0; j < userArray.length; j ++){
				var difference = parseInt(userArray[j]) - parseInt(currentPup.scores[j]);
				console.log("Difference: " + difference);
				currentPup.differences.push(Math.abs(difference));
				console.log("Current pup's differences array: " + currentPup.differences);
				totalDifferences += Math.abs(difference);
				console.log("Total Differences var: " + totalDifferences);
			}
			currentPup.totalDifference = totalDifferences;
			console.log ("Total difference: " + currentPup.totalDifference);

			//add total difference for each pup to differencesArray
			differencesArray.push(parseInt(currentPup.totalDifference));
			pupIndex++;
		}



		//find minimum total difference among the pup objects, return index to represent which pup has the smallest difference
		var minDifference = Math.min(...differencesArray);
		pupIndex = differencesArray.indexOf(minDifference);

		//return pup with smallest difference to be displayed in modal on survey.html	
		res.json(pups[pupIndex]);								

	});

	//displays all pups data
	app.get("/api/pups", function(req,res){
		res.json(pups);
	});
}

module.exports = apiRoutes;