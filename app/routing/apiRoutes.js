// Dependencies
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
  //shows json of friends
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // console.log("BODY", req.body);
    //friends.push(req.body);

    var friend = findFriend(req.body);
    res.json(friend);
  });

  //person should be thisperson or friends[i]
  function sumOfScores(person) {
    var total = 0;
    for (j = 0; j < person.scores.length; j++) {
      total += parseInt(person.scores[j]);
    }
    person.total = total;
    // console.log(person);
  }

  function findFriend(thisperson) {
    //the input sum of scores
    sumOfScores(thisperson);

    //everyone in 'friends' sum of scores
    for (i = 0; i < friends.length; i++) {
      sumOfScores(friends[i]);
    }

    //getting the difference
    var diff = [];
    //for all people in friends, put into the diff array their totals
    for (i = 0; i < friends.length; i++) {
      diff.push(Math.abs(friends[i].total - thisperson.total));
    }
    // console.log(diff);
    //find the index of the person with the smallest difference
    var idx = diff.indexOf(Math.min.apply(null, diff));
    // console.log(idx);
    //get the person with the index of the smallest difference
    console.log(friends[idx].name);
    return friends[idx];

  }
}; 
