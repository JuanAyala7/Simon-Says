var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var randomChosenColour = buttonColours[randomNumber];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}



//alert("you have successfully linked game.js to index.html!");

//Confirmation of linking jQuery to website:
//$("h1");
//S.fn.init [h1#level-title, prevObject: S.fn.init(1)]
