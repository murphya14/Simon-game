let order = [];
let sequence = [];
let playerSequence = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let Strict =false;
let noise = true;
let on = false;
let win;
let offNoise = new Audio('');
let winNoise = new Audio('');
let strictNoise = new Audio('');
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
const topLeft = document.querySelector("#one");
const topRight = document.querySelector("#two");
const bottomLeft = document.querySelector("#three");
const bottomRight = document.querySelector("#four");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");



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
        }
 /*--------------------------------------------------------------------------------- What happens when start is clicked(after on has been clicked) */


if(on ==false){
    turnCounter.innerHTML = "--";
    clearColor();
    clearInterval(intervalId);
}
else{
 allowStart;
}



    /*----------------------------------------Power is clicked*/

$("#on").click(function() {
       window.on ==true;
      $("#on").addClass("begin-game-start");
      flashColor();
      turnCounter.innerHTML = "Score";

});

/*----------------------------------------Initialize game outs everything back to default settings */

function initializeGame() {
    clearInterval(playInterval);
    clearColor();
    turnCounter.innerHTML="0";
    sequence = [];
    playerSequence = [];
    turn = 0;
    $(".pad").addClass('disabled');
    playerTimeout();
    nextSequence();
    gamePlay();
    checkStrict();

}


/*----------------------------------------Pushes a number between 1-4 randomly into the sequence array */
function nextSequence() {
    var randomNumber = Math.ceil(Math.random() * 4);
    sequence.push(randomNumber);
    console.log(sequence);
    showSequence(sequence[sequence.length - 1]);
    playerSequence=[];
}

/*----------------------------------------This is the computers turn to generate a sequence. It sets the computer and player to 0. There is an array for the
player sequence. The turn increment sets the array, playerCount and computerCount back to 0 for the next count. The player interval is a switch that checks the sequence in the array. Each element of the sequence produces a flash and associated sound.
The value of the ComputerCount determines how many times this will be run. Once the sequence matches the computerCount, the playInterval will stop which allows the player to start clicking.
The computerCount is then incremented by 1.*/

function changeLevel() {
    turn++;
    turnCounter.innerHTML=playerCount};

function gamePlay() {
    changeLevel();
    playerCount = 0;
    computerCount = 0;
    playerSequence=[];
    playInterval = setInterval(function() {
        switch (sequence[computerCount]) {
            case 1:
                 $("one").css("opacity=1");
                soundOne.play();
                  playerTimeout();
                break;
            case 2:
                $("two").css("opacity=1");
                soundTwo.play();
                  playerTimeout();
                break;
            case 3:
                $("three").css("opacity=1");
                soundThree.play();
                  playerTimeout();
                break;
            case 4:
                $("four").css("opacity=1");
                soundFour.play();
                  playerTimeout();

                break;

        }
     if (sequence.length === computerCount) {
            clearInterval(playInterval);
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
              },250)

   break;

case 2:
        soundTwo.play();
   $("#two").addClass("flash");
       setTimeout(function(){
                  $("#two").removeClass("flash");
              },250)
       break;

case 3:
    soundThree.play();
  $("#three").addClass("flash");
       setTimeout(function(){
                  $("#three").removeClass("flash");
              },250)
   break;

case 4:
    soundFour.play();
  $("#four").addClass("flash");
       setTimeout(function(){
                  $("#four").removeClass("flash");
              },250)
    break;

    default:
    text = "No value found";

 }
};


//This converts the clicks into numbers and pushes it to a new array.

$(".pad").click(function(){
    clearTimeout(playTimeout);
    clearColor();
        let padID = $(this).attr("id");
        if (padID == one)
            {
                playerSequence.push(1);
                soundOne.play()
                showSequence(1);
            };

            if (padID == two)
                {playerSequence.push(2);
                soundTwo.play()
                showSequence(2);
               }

             if (padID == three)
                {playerSequence.push(3);
                soundThree.play();
                showSequence(3);
                }

              if (padID == four)
                {playerSequence.push(4);
                soundFour.play();
                showSequence(4);
               }

        check()
    });

 /*------------------------------------- function to check if the array of the computer matches the array the player has inputted and increment the count*/



function check() {
    playerCount++;
            /*-------------Assigns variables to see if the player and computer sequence match*/

  let playerSeqMatch =
   playerSequence[playerCount - 1] === sequence[playerCount - 1];
    good = true;

    let playerSeqNotMatch =
    playerSequence[playerCount - 1] !== sequence[playerCount - 1];
    good = false;


    /*-------------Assigns the boolean "good" which reacts to whether the sequence of the player and computer match and incorporates the strict rule*/
   if (good == false) {
    flashColor();
    turnCounter.innerHTML = "Nope!";
    setTimeout(function(){
      turnCounter.innerHTML = playerCount;
      clearColor();
      }, 3000);}

     if(good==true){
    flashColor();
    turnCounter.innerHTML = "WELL DONE!";
    setTimeout(function() {
      turnCounter.innerHTML = playerCount;
      clearColor();
     }, 3000);}

 /*-------------Assigns the rule that will apply if strict is on and the sequence does not match*/


    if (Strict == true && playerSeqNotMatch)
    {
        setTimeout(showGameOver(), 800);

    }


   /*-------------Assigns the rule that will apply if strict is off and the sequence does not match*/
  if (playerSeqNotMatch && !Strict) {
        $(".pad").addClass('disabled');
        turn--;
        turnCounter.innerhtml ="Try again!";
        offNoise;
        flashTimeout();
        setTimeout(function() {
                  turnCounter.innerhtml =playerCount}, 300);
        setTimeout(gamePlay, 500);
    }

   /*-------------Assigns the rule that will apply if the sequence of the player and computer match. The players score is displayed in the scoreboard
   before being timed out to the next round.*/

  if (playerSeqMatch) {
      if (playerSequence.length === turn) {
      nextSequence();
         $(".pad").addClass('disabled');
            turnCounter.innerHTML=playerCount;
            setTimeout(gamePlay, 500);
        }

}



 /*-------------Criteria for the game to be won and what occurs. This also stops the playInterval.*/

if (playerCount == 20 && playerSeqMatch) {
        clearInterval(playInterval);
        winGame();
};
}
 /*-------------------------------------Running the check function through when the pads have been clicked by the player*/



 /*--------------------------------------------------------------------------------- Strict button setting */



strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});



/*---------------------------This removes the flash of the pads after 500 milliseconds */

function flashTimeout() {
    flashColor;
    setTimeout(function() {
        clearColor();
    }, 500);
}



/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box */

function showGameOver() {
   turnCounter.innerHTML("GAME OVER");
   flashColor();
}

/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box if the player has won adn plays the winning music*/

function winGame() {
    turnCounter.innerHTML("WIN!");
    flashColor();
    setTimeout(function() {
        winNoise;
    }, 2000);
}

});