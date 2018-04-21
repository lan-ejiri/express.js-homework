# express.js-homework

### This a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

* I took the questions off of https://friend-finder-fsf.herokuapp.com/survey because I figured that was the least important part of this assignment
* `server.js` file requires express, body-parser, and path npm packages
* `htmlRoutes.js` includes a GET route to /survey which displays the survey page, and also a default route that leads to the home page
* `apiRoutes.js` inclues a GET route to /api/friends which displays a JSON of all possible friends, and a POST route that handles incoming survey results and the compatibility logic
* `friends.js` stores all the data as an array of objects
* Once the current user's most compatible friend is calculated with basic math, the result is displayed on the survey page as a modal pop up

## This application is so not pretty due to time constraints and procrastination. Once I am caught up with all of my other work, hopefully this will look better.