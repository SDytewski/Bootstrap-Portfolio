  //Create an array
var words = ["<div>ANIMATIONS</div>", "<div>S T Y L I N G</div>", "<div>MOBILE</div>", "<div>APPLICATIONS</div>", "<div>RELIABLE</div>", "<div>FUNCTIONALITY</div>"];
var count = 0;
var interval = setInterval(function(){
    $("#rotate_word").css({"font-weight" : "600", "font-size" : "25px", "-webkit-text-stroke": ".4px black", "font-family" : "georgia", "letter-spacing": ".18rem", "text-shadow" : "0 0 16px grey",  "font-style" : "italic", "background-image" : "linear-gradient(to right, rgba(255,0,0,0), #ff8080", "border-radius":"15px 10px 15px 10px", "margin-bottom" : "20px", "margin-left" : "-16px"}).html(words[count++ % words.length])},
    1200)
  ;

