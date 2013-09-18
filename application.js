$(document).ready(function() {
  
  $(".box").on("mouseenter", function() {
    // $(this).addClass("txtcenter");
    console.log("hokey", this);
  });
  
  $(".box").on("mouseleave", function() {
    // $(".main").append("mainp");
    console.log("pokey", this);
  });
 
});       
