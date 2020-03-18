var color1input = document.getElementById("color1");
var color2input = document.getElementById("color2");
var body = document.getElementById("body");
var cssText = document.querySelector("h3");
var directionChanger = document.getElementById("reverse");
var direction = "right";

console.log(color1input);
console.log(color2input);
console.log(body);


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1input.value + ","  + color2input.value +")";    
    setCssText();
}

function changeDirection() {
    var newDirection;
    if(direction === "right"){ 
        direction = "left";    
        newDirection = direction;
    }
    else {
        direction = "right";
        newDirection = direction;
    }
    body.style.background = "linear-gradient(to " + newDirection +" ," + color1input.value + ","  + color2input.value +")";
    setCssText();
}

function setCssText(params) {
    cssText.textContent = body.style.background;
}

color1input.addEventListener("input",setGradient);
color2input.addEventListener("input",setGradient);
directionChanger.addEventListener("click",changeDirection);