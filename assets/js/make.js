let order = [];
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
let playInterval;
let playTimeout; 
let computerCount;
let playerCount;


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

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});


  /*--------------------------------------------------------------------------------- What happens when Power is clicked */
  
    /*----------------------------------------Flash at start of the game */
 let flashColor = function flashColor() {
  $(".pad").addClass('begin-game-pads');
  };
  
      /*----------------------------------------Removal of flash */
  
  let clearColor = function clearColor(){
       $(".pad").removeClass('begin-game-pads');
  };
  /*----------------------------------------The game cannot start before power has been turned on */
let allowStart = startButton.click(function() {
        initializeGame();
});
   
      
 /*--------------------------------------------------------------------------------- What happens when start is clicked(after on has been clicked) */
if(on =false){
    turnCounter.innerHTML = "--";
    clearColor();
    clearInterval(intervalId);
}

if( on =true){
$("#start").click(function() {
      $("#start").addClass("begin-game-start");
      clearColor();
      allowStart();
});
}

  
    /*----------------------------------------Power is clicked*/
    
$("#on").click(function() {
        on =true;
      $("#on").addClass("begin-game-start");
      flashColor();
      turnCounter.innerHTML = "Score";
});




/*----------------------------------------Initialize game outs everything back to default settings */   
    
function initializeGame() {
    clearInterval(playInterval);
    clearColor();
    turnCounter.innerHTML('0');
    sequence = [];
    turn = 0;
    $(".pad").addClass('disabled');
    randomPad();
    gamePlay();
    intervalId = setInterval(gameTurn, 800);
    check();

}


/*----------------------------------------Pushes a number between 1-4 randomly into the sequence array */       
function randomNumber() {
      randomNum = Math.ceil(Math.random() * 4);
    sequence.push(randomNum);
    console.log(sequence);
}
    
/*----------------------------------------This is the computers turn to generate a sequence. It sets the computer and player to 0. There is an array for the
player sequence. The turn increment sets the array, playerCount and computerCount back to 0 for the next count. The player interval is a switch that checks the sequence in the array. Each element of the sequence produces a flash and associated sound. 
The value of the ComputerCount determines how many times this will be run. Once the sequence matches the computerCount, the playInterval will stop which allows the player to start clicking. 
The computerCount is then incremented by 1.*/      
    

    
function gamePlay() {
    turn++;
    playerCount = 0;
    computerCount = 0;
    playerSequence = [];
    playInterval = setInterval(function() {
        switch (sequence[computerCount]) {
            case 1:
               one();
                break;
            case 2:
                two();
                break;
            case 3:
                three();
                break;
            case 4:
                four();
                break;
            default:
                break;
        }
        if (sequence.length === computerCount) {
            clearInterval(playInterval);
            $(".pad").removeClass('disabled');
        }
        computerCount++;
    }, 800);
}s

 /*------------------------------------- function to check if the array of the computer matches the array the player has inputted */

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
      turnCounter.innerHTML = turn;
      clearColor();
      checkStrict();}, 3000);}
      
     if(good==true){
    flashColor();
    turnCounter.innerHTML = "WELL DONE!";
    setTimeout(function() {
      turnCounter.innerHTML = turn;
      clearColor();
      checkStrict();
      counter();}, 3000);}
 
 /*-------------Assigns the rule that will apply if strict is on*/
      
    if (Strict == true && playerSeqNotMatch) setTimeout(function() {
        showGameOver();
      }, 800); 
      
      else setTimeout(function()  {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
      }, 800);

    
 
  
   /*-------------Assigns the rule that will apply if the sequence of the player and computer match*/
    
  if (playerSeqMatch) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    good=true;
    counter();
    intervalId = setInterval(gameTurn, 800);}
    
};

 /*-------------Criteria for the game to be won and what occurs*/

if (playerCount === 20 && playerSeqMatch) {
        clearInterval(playInterval);
        winGame();
};   
 /*-------------------------------------Running the check function through when the pads have been clicked by the player*/
 
 
 
 /*--------------------------------------------------------------------------------- Strict button setting */



function checkStrict() {
    if ($("#strict").is(":checked")){
      Strict = true;
    } else {
      Strict = false;
    }
  };
  
  

 /*----------------------------------------------------------------------------------COUNTER: Sets the value of the new value as it is incremented by 1*/
 
function counter (){
    var currentVal = document.getElementById("counter");
    var newVal = 0;
    
    if (currentVal<20){
        newval = currentVal + 1;
    }
    document.getElementById("counter").innerHTML = newVal;
}



/*------------------------------------------------------- Pairing color change and audio*/
function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.css("opacity=1");
};

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight.css("opacity=1");
};

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft.css("opacity=1");
};

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight.css("opacity=1");
};

/*---------------------------This removes the flash of the pads after 500 milliseconds */

function flashTimeout() {
    flashColor = setTimeout(function() {
        clearColor();
    }, 500);
};



/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box */

function showGameOver() {
   turnCounter.innerHTML("GAME OVER");
   flashColor();
};

/*---------------------------This function is incurred when it is game over and reflects this message in the Counter box if the player has won adn plays the winning music*/

function winGame() {
    turnCounter.innerHTML("WIN!");
    flashColor()
    setTimeout(function() {
        winNoise;
    }, 2000);
};

});