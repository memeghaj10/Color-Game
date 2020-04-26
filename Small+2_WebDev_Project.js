/*var numsquares=6;
var colors=[];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbut=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");


init();

function init() {
	setupmodebuttons();
	setupsquares();
	reset();
}

function setupmodebuttons(){
	for(var i = 0; i < modebtn.length; i++){
		modebtn[i].addEventListener("click", function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
			reset();
		});
	}
}


function setupsquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedcolor){
				messagedisplay.textContent = "Correct!";
				resetbut.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messagedisplay.textContent = "Try Again"
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numsquares);
	//pick a new random color from array
	pickedcolor = pickcolor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedcolor;
	resetbut.textContent = "New Colors"
	messagedisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetbut.addEventListener("click", function(){
	reset();
})




function changecolor(color) {
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background=color;
	}
}


function pickcolor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr=[];
      for (var i=0;i<num;i++) {
           arr.push(randomcolor())
      }
	return arr;
}

function randomcolor() {

var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);

return "rgb("+r+", "+g+", "+b+")";


}*/




var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

