var correctarray = [];
var colorPressed = "";
var startGame = true;
var userTurn = false;
var checkIndex = 0;
$("h1").text("Press A Key to Start");

$(document).on("keypress", function(event) {

  if (startGame) {
    startGame = false;
    $("h1").text("Level 1");
    nextNumber();
  }

});

function nextNumber() {

  var randomNo = Math.floor(Math.random() * 4);
  correctarray.push(randomNo);

  playSound(randomNo);
  buttonAnimation(colorPressed);
  userTurn = true;
  checkIndex = 0;

}

$(".btn").on("click", function(event) {

  if (userTurn) {

    var userPressed = 0;

    switch (event.target.id) {
      case "green":
        userPressed = 0;
        break;
      case "red":
        userPressed = 1;
        break;
      case "yellow":
        userPressed = 2;
        break;
      case "blue":
        userPressed = 3;
        break;
      default:
        colorPressed = "wrong";
    }

    if ((correctarray[checkIndex] === userPressed) && (checkIndex < correctarray.length)){

      playSound(userPressed);
      buttonAnimation(colorPressed);
      if (checkIndex === (correctarray.length - 1)){

        setTimeout(function() {

          nextNumber();


        }, 700);

        $("h1").text("Level " + (correctarray.length));

      }else{
        checkIndex++;
      }
    }else{
      playSound(5);
      $("body").addClass("game-over");

      setTimeout(function() {

        $("body").removeClass('game-over');

      }, 100);

      correctarray = [];
      startGame = true;
      userTurn = false;
      checkIndex = 0;
      $("h1").text("Game Over, Press Any Key to Restart");
    }
  }

});

function playSound(number) {

  switch (number) {
    case 0:
      var green = new Audio('sounds/green.mp3');
      green.play();
      colorPressed = "green";
      break;
    case 1:
      var red = new Audio('sounds/red.mp3');
      red.play();
      colorPressed = "red";

      break;
    case 2:
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      colorPressed = "yellow";

      break;
    case 3:
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      colorPressed = "blue";

      break;
    default:
      var wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
      colorPressed = "wrong";
  }
}

function buttonAnimation(btnColor , isBody) {

  $("." + btnColor).addClass('pressed');

  setTimeout(function() {

    $("." + btnColor).removeClass('pressed');

  }, 100);




}
