var challenge = [
    "Drink 64oz of water today", 
    "Walk 10 thousand steps today",
    "Create a spending plan",
    "Cook one homemade meal today",
    "Read a new poem today",
    "Write 3 things you are grateful for today",
    "Talk to someone new",
    "Meditate for 10 minutes today",
    "Do a random act of kindness today",
    "Go to bed early today"
]


//after user is logged in, the challenge.handlebars is displayed - do the logic
var challengeIndex = Math.floor(Math.random() * 11);
var dailyChallenge = challenge[challengeIndex];

console.log("this is working");
console.log (dailyChallenge);

exports.dailyChallenge = dailyChallenge;


// $("#challenge-title").append(dailyChallenge);