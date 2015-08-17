window.onload = function(){
	boxes();
	paint();
	setColor();
}

var color = "";

function boxes (){
	for (var i =0; i <600; i++){
		var newElement = document.createElement("div");
		newElement.style.width = "30px";
		newElement.style.height = "30px";
		newElement.style.float = "left";
		newElement.style.backgroundColor="grey";
		newElement.style.border = "1px solid black";
		document.getElementsByTagName("body")[0].appendChild(newElement);
	}
}

function paint(){
	var d = document.getElementsByTagName("div");
	for (i=6;i<600;i++){
		d[i].addEventListener("click", function(){
			this.style.backgroundColor = color;
			this.style.border="1px solid "+color;
		});
	}
}


function setColor(){
	document.getElementsByTagName("div")[0].style.backgroundColor="red";
	document.getElementsByTagName("div")[0].addEventListener("click",function(){
		color = "red";
	});
	document.getElementsByTagName("div")[1].style.backgroundColor="orange";
	document.getElementsByTagName("div")[1].addEventListener("click",function(){
		color = "orange";
	});	
	document.getElementsByTagName("div")[2].style.backgroundColor="yellow";
	document.getElementsByTagName("div")[2].addEventListener("click",function(){
		color = "yellow";
	});	
	document.getElementsByTagName("div")[3].style.backgroundColor="green";
	document.getElementsByTagName("div")[3].addEventListener("click",function(){
		color = "green";
	});	
	document.getElementsByTagName("div")[4].style.backgroundColor="blue";
	document.getElementsByTagName("div")[4].addEventListener("click",function(){
		color = "blue";
	});
	document.getElementsByTagName("div")[5].style.backgroundColor="purple";
	document.getElementsByTagName("div")[5].addEventListener("click",function(){
		color = "purple";
	});	
};



	//click on color to choose 
	//have a color variable; it changes when different options are selected
	//add event listener to each box, when clicked color variable is now that color


// var colors =["#000000","#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000", "#008000", "#800080", "#008080","#000080"]

// // create loop to go through the colors

// function setColors(){
// 	for (var i =0; i <colors.length;i++){
// 		document.getElementsByTagName("div")[i].style.backgroundColor = colors[i];
// 		document.getElementsByTagName("div")[i].addEventListener("click",function(){
// 			color = colors[i];
// 		})
// 	}
// }


