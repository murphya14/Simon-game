let audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
audio1.play()





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
  
  document.getElementById("start").addEventListener("transitionend", myFunction);

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
let strictButton = document.querySelector('#strict')
let strict = false;
strict.addEventListener('click', () => {
    if (!strict) {
        strict = true;
      console.log('true')
    }
    else {
        strict = false;
        console.log('false')
    }
});
