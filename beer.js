

//VARIABLES
	var drink = document.getElementById("button-1");
	var clear = document.getElementById("button-2"); 


//PRINT-TEXT
	document.getElementById("output").innerHTML ="";


//sing song with button 1
	drink.onclick = function(){

		for (var x = 99; x>= 1; x--) {
		document.getElementById("output").innerHTML += x + " bottle of beers";
		}

	};


//stop singing song with button 2
	clear.onclick = function(){
		document.getElementById("output").innerHTML ="";
	};