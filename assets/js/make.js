let order = [];
let playerOrder = [];
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

const turnCounter = document.querySelector("#counter");
const topLeft = document.querySelector("#one");
const topRight = document.querySelector("#two");
const bottomLeft = document.querySelector("#three");
const bottomRight = document.querySelector("#four");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");



 /*--------------------------------------------------------------------------------Modal button*/
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
  
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});

 /*--------------------------------------------------------------------------------- Checking strict mode button*/


function checkStrict() {
    if ($("#strict").is(":checked")){
      Strict = true;
    } else {
      Strict = false;
    }
  }
  
  
  /*--------------------------------------------------------------------------------- What happens when Power is clicked */
  
    /*----------------------------------------Flash at start of the game */
 let flashColor = function flashColor() {
  $(".pad").addClass('begin-game-pads');
  };
  
      /*----------------------------------------Removal of flash */
  
  let clearColor = function clearColor(){
       $(".pad").removeClass('begin-game-pads');
  };
  
  
    /*----------------------------------------Power is clicked*/
    
$("#on").click(function() {
        on =true;
      $("#on").addClass("begin-game-start");
      flashColor();
      turnCounter.innerHTML = "--";
});
 /*--------------------------------------------------------------------------------- What happens when start is clicked */
if(on==false){
turnCounter.innerHTML = "Score";
    clearColor();
    clearInterval(intervalId);
}

if( on =true){
$("#start").click(function() {
      $("#start").addClass("begin-game-start");
      clearColor();
      allowStart();
      initializeGame();
});
}


/*----------------------------------------The game cannot start before power has been turned on */
let allowStart = startButton.click(function() {
        initializeGame();
});
    
 
/*----------------------------------------Initialize game outs everything back to default settings */   
    
function initializeGame() {
    clearInterval(playInterval);
    clearColor();
    turnCounter.innerHTML('0');
    sequence = [];
    turn = 0;
    $(".pad").addClass('disabled');
    randomNumber();
    gamePlay();
}
    
 /*--------------------------------------------------------------------------------- Strict button setting */

function toggle(button) 
{
     switch(button.value)
     {
          case "ON":
               button.value = "OFF";
               break;
          case "OFF":
               button.value = "ON";
               break;
     }
}


/*------------------------------------------------------- Pad reaction when clicked*/
function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.css("opacity=1");
}

function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight.css("opacity=1");
}

function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft.css("opacity=1");
}

function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight.css("opacity=1");
}














    
 /*----------------------------------------------------------------------------------COUNTER*/
function counter (){
    var currentVal = document.getElementById("counter").innerHTML;
    var newVal = 0;
    
    if (currentVal<20){
        newval = currentVal + 1;
    }
    
    document.getElementById("counter").innerHTML = newVal;
}


/*-------------------------------------------------------------------------------------Strict*/

strictButton.addEventListener('click', () => {
    if (strictButton.dataOn == true) {
        strict = true;
    }
    else {
        strict = false;
  
    }
});
