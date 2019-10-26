
let sequence = [];
let playerSequence = [];
let turn;
let good;
let intervalId;
let strict =false;
let on = false;
let offNoise = new Audio('https://www.freesound.org/people/Bertrof/sounds/131657/download/131657__bertrof__game-sound-wrong.wav');
let winNoise = new Audio('https://www.freesound.org/people/rhodesmas/sounds/320652/download/320652__rhodesmas__success-02.wav');
let strictNoise = new Audio('https://www.freesound.org/people/Bertrof/sounds/131657/download/131657__bertrof__game-sound-wrong.wav');
let soundOne = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let soundTwo = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let soundThree = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let soundFour = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let playInterval;
let playTimeout;
let computerCount;
let playerCount;
let allowStart;

const turnCounter = document.querySelector("#counter");
const startButton = document.querySelector("#start");
const strictSwitch = document.querySelector("#strictSwitch");



 /*---------------------------------JQuery/JS will load once the DOM is ready*/

$(document).ready(function() {

 /*--------------------------------------------------------------------------------Modal button*/
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

/*removes the "active" class to .popup and .popup-content when the "Close" button is clicked*/
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});


  /*--------------------------------------------------------------------------------- What happens when Power is clicked */

    /*----------------------------------------Flash at start of the game */
function flashColor() {
  $(".pad").addClass('begin-game-pads');

  }

      /*----------------------------------------Removal of flash */

 function clearColor(){
       $(".pad").removeClass("begin-game-pads");
       }

  /*----------------------------------------The game cannot start before power has been turned on */

let allowStart = startButton.onclick = () => {
        $("#start").addClass("begin-game-start");
        clearColor();
        initializeGame();
        };
 /*--------------------------------------------------------------------------------- What happens when start is clicked(after on has been clicked) */


if(on ==false){
    turnCounter.innerHTML = "--";
    clearColor();
    clearInterval(intervalId);
     $(".pad").addClass('disabled');
}
else{
 allowStart;
}



    /*----------------------------------------Power is clicked*/

$("#on").click(function() {

      $("#on").addClass("begin-game-start");
      flashColor();
      turnCounter.innerHTML = "Score";

});

/*----------------------------------------Initialize game outs everything back to default settings */

function initializeGame() {
    clearInterval(playInterval);
    clearColor();
    turn=1;
    turnCounter.innerHTML=turn;
    sequence = [];
    $(".pad").addClass('disabled');
    playerTimeout();
    nextSequence();
    gamePlay();
}


/*----------------------------------------Pushes a number between 1-4 randomly into the sequence array */
function nextSequence() {
    var randomNumber = Math.ceil(Math.random() * 4);
    sequence.push(randomNumber);
    console.log(sequence);
}
/*----------------------------------------This is the computers turn to generate a sequence. It sets the computer and player to 0. There is an array for the
player sequence. The turn increment sets the array, playerCount and computerCount back to 0 for the next count. The player interval is a switch that checks the sequence in the array. Each element of the sequence produces a flash and associated sound.
The value of the ComputerCount determines how many times this will be run. Once the sequence matches the computerCount, the playInterval will stop which allows the player to start clicking.
The computerCount is then incremented by 1.*/



function gamePlay() {
    turn++;
    computerCount=0;
    playerCount=0;
    playerSequence=[];
    playInterval = setInterval(function() {
                    showSequence(sequence[computerCount]);

    if (sequence.length === computerCount)
        {clearInterval(playInterval);
        $(".pad").removeClass('disabled');
        }
        computerCount++;
    }, 800);
}




/*----------------------------Changes visuals after the pad has been clicked*/
function playerTimeout() {
    playTimeout = setTimeout(function() {
        clearColor();
    }, 400);
}
/*------------------------------------------------------- Pairing color change and audio for each of the four pads*/
function showSequence(element) {

 switch (element){
    case 1:

        soundOne.play();
     $("#one").addClass("flash");
       setTimeout(function(){
                  $("#one").removeClass("flash");
              },900);

   break;

case 2:
        soundTwo.play();
   $("#two").addClass("flash");
       setTimeout(function(){
                  $("#two").removeClass("flash");
              },900);
       break;

case 3:
    soundThree.play();
  $("#three").addClass("flash");
       setTimeout(function(){
                  $("#three").removeClass("flash");
              },900);
   break;

case 4:
    soundFour.play();
  $("#four").addClass("flash");
       setTimeout(function(){
                  $("#four").removeClass("flash");
              },900);
    break;

    default:
    text = "No value found";

 }
}


//This converts the clicks into numbers and pushes it to a new array.

$(".pad").click(function() {
    clearTimeout(playTimeout);
    clearColor();
    let padID = $(this).attr("id");
        if (padID == "one")
            {
                playerSequence.push(1);
                soundOne.play();
                showSequence(1);
                console.log("one");

            }

            if (padID == "two")
                {playerSequence.push(2);
                soundTwo.play();
                showSequence(2);
                console.log("two");

               }

             if (padID == "three")
                {playerSequence.push(3);
                soundThree.play();
                showSequence(3);
                console.log("three");

                }

              if (padID == "four")
                {playerSequence.push(4);
                soundFour.play();
                showSequence(4);
                console.log("four");
             }
        check();
        console.log(playerSequence);
     });

 /*------------------------------------- function to check if the array of the computer matches the array the player has inputted and increment the count*/



function check() {
playerCount++;
            /*-------------Assigns variables to see if the player and computer sequence match*/

  if (playerSequence[playerCount - 1] == sequence[playerCount - 1]){
    good = true;
} else {
    good = false;
}

   /*-------------Assigns the boolean "good" which reacts to whether the sequence of the player and computer match and incorporates the strict rule*/
   if (!good && !strict) {
    turn--;
 $(".pad").addClass('disabled');
    turnCounter.innerHTML = "Nope!";
    setTimeout(function(){
        console.log("Seqdontmatch and not strict");
        turnCounter.innerHTML = turn;
        $(".pad").removeClass('disabled');
        clearColor();
        setTimeout(function(){gamePlay();}, 500);
      }, 500);
    }
 /*-------------Assigns the rule that will apply if strict is on and the sequence does not match*/
  if (strict && !good)
    {
        $(".pad").addClass('disabled');
        showGameOver();
        console.log("Seqdontmatch&STRICt");
    }
   /*-------------Assigns the rule that will apply if strict is off and the sequence does not match*/


   /*-------------Assigns the rule that will apply if the sequence of the player and computer match. The players score is displayed in the scoreboard
   before being timed out to the next round.*/

if (good) {
    if (playerSequence.length === sequence.length)  /*-------------This seems to be a problem*/
       {
        $(".pad").addClass('disabled');
        turnCounter.innerHTML = "GOOD!";
        nextSequence();
        console.log("Seqmatch");
        setTimeout(function(){
        turnCounter.innerHTML = turn;
        $(".pad").removeClass('disabled');
        clearColor();
        setTimeout(function(){gamePlay();}, 500);
      }, 500);
    }
}
 /*-------------Criteria for the game to be won and what occurs. This also stops the playInterval.*/

if (playerCount == 20 && good) {
    flashTimeout();
     clearInterval(playInterval);
        $(".pad").addClass('disabled');
        winGame();}

}
 /*-------------------------------------Running the check function through when the pads have been clicked by the player*/



 /*--------------------------------------------------------------------------------- Strict button setting */



$(strictSwitch).on("click", function() {
    strictNoise.play();
        if (strictSwitch.checked == true) {
            strict = true;  }
            else {
    strict = false;
    console.log("strict false");
  }
  $(strictSwitch).is(':checked');

});
/*---------------------------This removes the flash of the pads after 500 milliseconds */

function flashTimeout() {
    flashColor();
    setTimeout(function() {
        clearColor();
    }, 500);
}



/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box */

function showGameOver() {
   turnCounter.innerHTML="GAME OVER";
   flashColor();
   offNoise.play();
   setTimeout(function(){initializeGame();}, 1000);
}

/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box if the player has won adn plays the winning music*/

function winGame() {
    turnCounter.innerHTML("WIN!");
    winNoise.play();
    flashColor();
    setTimeout(function() {
    }, 2000);
     setTimeout(function(){initializeGame();}, 2000);
}

});