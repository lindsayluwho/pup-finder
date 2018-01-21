var bodyParser = require("body-parser");
var path = require("path");
var pups = require("./pups")




function apiRoutes(app){
	//set up all API routes and corresponding functionality
	var userArray = [];
	var pupScores = [];
	var differencesArray = [];
	
	app.post("/api/pups", function(req,res){
		// get user scores and push into an array
		var scores = req.body;
		userArray.push(scores.question1);
		userArray.push(scores.question2);
		userArray.push(scores.question3);
		userArray.push(scores.question4);
		userArray.push(scores.question5);
		userArray.push(scores.question6);
		userArray.push(scores.question7);
		userArray.push(scores.question8);
		userArray.push(scores.question9);
		userArray.push(scores.question10);

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
			console.log("Current Pup: " + currentPup);

			for (j = 0; j < userArray.length; j ++){
				var difference = Math.abs(userArray[j] - currentPup.scores[j]);
				currentPup.differences.push(difference);
				
				//calculate total difference of differences array for each pupScores object, reassign value to pup.totalDifference	
				currentPup.totalDifference =+ difference;


			}

			console.log ("Differences: " + currentPup.differences);
			console.log ("Total difference: " + currentPup.difference);

			//add total difference for each pup to differencesArray
			differencesArray.push(currentPup.totalDifference);
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