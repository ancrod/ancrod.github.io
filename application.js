$(document).ready(function() {
  
  $(".box").on("mouseenter", function() {
   $(".main h1").text("put the text here");
    
    console.log("hokey", this);
  });
  
  $(".box").on("mouseleave", function() {
    $(".main h1")
    console.log("pokey", this);
  });
 
});       
