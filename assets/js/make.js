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

  $(".pad").css("opacity", "1")
  
  
})