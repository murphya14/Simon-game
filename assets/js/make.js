let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;

let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");

const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");



 /*Modal button*/
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
  
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});

 /*What happens when you press the start button*/

$("#start").click(function(){
  $(this).css("background-color", "#49fb35");

  $(".pad").css("opacity", "1");
  
  document.getElementById("start").addEventListener("transitionend", $(".pad"));

})



 /*COUNTER*/
function counter (){
    var currentVal = document.getElementById("counter").innerHTML;
    var newVal = 0;
    
    if (currentVal<20){
        newval = currentVal + 1;
    }
    
    document.getElementById("counter").innerHTML = newVal;
}


/*Strict*/
let strictButton = document.querySelector('#strictButton')
let strict = false;
strictButton.addEventListener('click', () => {
    if (strictButton.dataOn == true) {
        strict = true;
    }
    else {
        strict = false;
  
    }
});
