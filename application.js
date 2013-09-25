$(document).ready(function() {
    $(".box").on("mouseenter", function() {
      $(".main h1").addClass("h2 p");
      $(".main").removeClass("h1 p");
    
      console.log("hokey", this);
  });
    
    // $(".box").on("mouseenter", function() {
      // $(".txtcenter").find("h2").hover();
      // $(".txt").find("p").hover();
      // console.log("mokey", this);
    // });
    
    $(".box").on("mouseleave", function() { 
      $(".main .mainp").addClass();
      $(".txtcenter").removeClass();
      console.log("pokey", this);
    });
  });
  

 // $(".main h1").text("put the text here"); 
  
    // $(".main h1")
   //$(".mainp").removeClass();  
  // });
 //$(".boxes .bc").hide();
// });       
  // $(".box").on("mouseenter", function() {
 

// $(".txtcenter .bc").show();
// $(".main").hide();