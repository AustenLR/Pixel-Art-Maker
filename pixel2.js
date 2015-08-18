window.onload = function(){
	boxes();
}

var color = "";
var colors =["#000000","#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000", "#008000", "#800080", "#008080","#000080"]


function boxes (){
	for (var i =0; i <600; i++){
		var newElement = document.createElement("div");
		newElement.style.width = "30px";
		newElement.style.height = "30px";
		newElement.style.float = "left";
		newElement.style.backgroundColor="grey";
		newElement.style.border = "1px solid black";
		document.getElementsByTagName("body")[0].appendChild(newElement);
		if ( i < colors.length){
			document.getElementsByTagName("div")[i].style.backgroundColor=colors[i];
			document.getElementsByTagName("div")[i].addEventListener("click",changeColor);
		} else {
			var d = document.getElementsByTagName("div");
			d[i].addEventListener("click", function(){
			this.style.backgroundColor = color;
			this.style.border="1px solid "+color;
		})
		}
	}
}

function changeColor (){
	color = this.style.backgroundColor
}