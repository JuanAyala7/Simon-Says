var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColour);
}






//alert("you have successfully linked game.js to index.html!");

//Confirmation of linking jQuery to website:
//$("h1");
//S.fn.init [h1#level-title, prevObject: S.fn.init(1)]
