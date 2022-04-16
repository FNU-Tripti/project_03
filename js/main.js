function effectCreator(){
  var effect = document.getElementById("effect");

  if( effect != null){
  // For the effect
  effect.addEventListener("mouseover", function( event ) {
   event.target.style.color = "red";
  }, false);

  effect.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
  }, false);
}
  // For the experience
  var exp = document.getElementById("exp");

  if( exp != null){
  exp.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
  }, false);

  exp.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
  }, false);
}

var anchor = document.getElementById("anchor");

if(anchor != null){  
  anchor.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "rgb(50, 61, 214)";
    event.target.style.color = "white";
    event.target.style.borderRadius = "4px";
    event.target.style.transition = "1s";
  }, false);

  anchor.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    event.target.style.borderRadius = "";
  }, false);
}

var lady = document.getElementById("lady");

if(lady != null){  
  lady.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "rgb(50, 61, 214)";
    event.target.style.color = "white";
    event.target.style.borderRadius = "4px";
    event.target.style.transition = "1s";
  }, false);

  lady.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    event.target.style.borderRadius = "";
  }, false);
}

var spider = document.getElementById("spider");

if(spider != null){  
  spider.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "rgb(50, 61, 214)";
    event.target.style.color = "white";
    event.target.style.borderRadius = "4px";
    event.target.style.transition = "1s";
  }, false);

  spider.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    event.target.style.borderRadius = "";
  }, false);
}


}

function setColor(index){
 
  // Flip the colors of the google map wrapper.
  var wrapper = document.getElementById("wrapper");
 
  if(wrapper != null){    
    var colorArray = ["red", "blue", "yellow", "red"]; // Google colors
    wrapper.style.backgroundColor = colorArray[index];
    wrapper.style.transition = "1s";
  }
}

window.setInterval(function() {
  var index = Math.floor((Math.random() * 3) + 1);
  setColor(index);
}, 2000);
window.addEventListener('load', effectCreator);