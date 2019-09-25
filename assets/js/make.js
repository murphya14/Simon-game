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


$(document).ready(function() {
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
 function flashColor() {
  $(".pad").addClass('begin-game-pads');
    
  $("#on").addClass("begin-game-start");
  }
  
      /*----------------------------------------Removal of flash */
  
  let clearColor = function clearColor(){
       $(".pad").removeClass('begin-game-pads');
  }
  
    /*----------------------------------------Power is clicked*/
    
onButton.addEventListener('click', (event) => {
    on = true;
    flashColor();
    clearInterval(intervalId);
 });

if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "--";
  }setTimeout(function() {
                clearColor();
            }, 6000);;
  
 if(on = false){
    turnCounter.innerHTML = "Score";
    clearInterval(intervalId);
  };


 
   onButton.click(function() {
        initializeGame();
    });

  
 /*--------------------------------------------------------------------------------- What happens when start is clicked */
  
    $("#start").click(function() {
    checkStrict();
    
})
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


}



