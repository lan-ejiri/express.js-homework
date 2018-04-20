//somehow grab thisperson from survey.html
//hard coding a person for now
var thisperson = {
  name: "someone",
  photo: "wahatsjdflfdbdfgljk",
  scores: [6, 1, 4, 4, 5, 1, 2, 5, 4, 1]
};

var friends = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Sally",
    photo: "http://via.placeholder.com/350x150",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 4, 1]
  }
];

module.exports = friends;

//person should be thisperson or friends[i]
function sumOfScores(person) {
  var total = 0;
  for (j = 0; j < person.scores.length; j++) {
    total += parseInt(person.scores[j]);
  }
  person.total = total;
  console.log(person);
}

sumOfScores(thisperson);

for (i = 0; i < friends.length; i++) {
  sumOfScores(friends[i]);
}

var diff = [];
for (i = 0; i < friends.length; i++) {
  diff.push(Math.abs(friends[i].total - thisperson.total));
}
console.log(diff);

var idx = diff.indexOf(Math.min.apply(null, diff));
console.log(idx);

console.log(friends[idx].name);
