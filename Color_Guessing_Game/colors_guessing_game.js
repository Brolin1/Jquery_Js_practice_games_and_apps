window.setTimeout(function() {

var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square")
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.getElementById("message")
var h1=document.querySelector("h1")
var resetButton=document.querySelector("#reset")
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected")
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length ; i++){
		if(colors[i]){
		  squares[i].style.backgroundColor=colors[i];
		
		} else {
			squares[i].style.display="none"
		}

	}	
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length ; i++){
		  squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block"
	}
		
});


resetButton.addEventListener("click",function() {
	//generate all new colors
      colors=generateRandomColors(numSquares);
    //nestanak središnje corect ili try again izjave kada pogodimo boju
      messageDisplay.textContent="";
	//pick a new random color from array
      pickedColor=pickColor();
     //change colorDIsplay to match pickedColor
     colorDisplay.textContent=pickedColor;
     // da piše play again samo kad pobijedimo, dok pogađamo piše new colors(this===resetButton)
     this.textContent="New Colors"
	//change color of squares
    for(var i=0; i<squares.length; i++){
      squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue"
})

colorDisplay.textContent=pickedColor



for (var i =0; i <squares.length; i++) {
	//ad initial color to squares
	squares[i].style.backgroundColor=colors[i]

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
         
         var clickedColor=this.style.backgroundColor;
         
         console.log(clickedColor,pickedColor)
         
         if (clickedColor===pickedColor) {
         	messageDisplay.textContent="Correct"
         	resetButton.textContent="Play Again"

            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor
        
        }else{
         	this.style.backgroundColor="#232323"
         	messageDisplay.textContent="Try again"

         }
	});
}

function changeColors(color){
	//loop through all squares
    for(var i=0; i<squares.length ; i++){
    	//change each color to match given color
    	squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
     //make an array
     var arr=[]

     //repeat num times
     for(var i=0; i<num; i++){
        arr.push(randomColor())
     }

     //return array
     return arr;
}

function randomColor(){
	//pick a three colors from 0 to 255
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}










}, 50);
