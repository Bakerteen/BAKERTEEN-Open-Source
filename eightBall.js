// just a fun eigtBall script
let userName = "John";
userName ? console.log("Hello, " + userName + "!") : console.log("Hello!");
const userQuestion = "Can i trust wannabe selfmade marketing consultants with clickfunnel websites?";
console.log(userName + " asked: " + userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall ="";
switch (randomNumber) {
  case 0:
 eightBall = "It is certain... to waste time";
 break;
  case 1:
 eightBall = "Ehm i guess yes";
 break;
  case 2:
 eightBall = "Reply hazy try again";
 break;
  case 3:
 eightBall = "Cannot predict now";
 break;
  case 4:
 eightBall = "Do not count on it";
 break;
  case 5:
 eightBall = "My sources say no";
 break;
  case 6:
 eightBall = "Outlook not so good";
 break;
  case 7:
 eightBall = "Signs point to yes ... maybe";
 break;
}
console.log(eightBall);
