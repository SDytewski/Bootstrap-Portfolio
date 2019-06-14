  //Create an array
var words = ["<div>ANIMATIONS</div>", "<div>S T Y L I N G</div>", "<div>MOBILE-RESPONSIVENESS</div>", "<div>USER-FRIENDLY APPLICATIONS</div>", "<div>FUNCTIONALITY</div>","<div>RELIABLE</div>"];
var count = 0;
var interval = setInterval(function(){
    $("#rotate_word").css({"font-weight" : "600", "font-size" : "25px", "-webkit-text-stroke": ".4px black", "font-family" : "georgia", "letter-spacing": ".18rem", "text-shadow" : "0 0 16px grey",  "font-style" : "italic", "background-image" : "linear-gradient(to right, rgba(255,0,0,0), #ff8080", "border-radius":"25px 10px 35px 10px" }).html(words[count++ % words.length])},
    1200)
  ;

// for (var i = 0; i < words.length; i++){

// $("#rotate_word").html(words);


// }

// setInterval(function rotateWord(){

//     for (var i = 0; i < words.length; i++){

//         $("#rotate_word").html(words[i]);
   
//         }
// }, 2000)
// $(document).ready(function(){
//     $( ":header" ).css( "background-color", "#bbbbff" );
//   });