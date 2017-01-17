/**Program 1**/
function myFunction(){
	document.getElementById("text").innerHTML = "Like Magic!";
	document.getElementById("text").style.color = "blue";
	document.getElementById("text").style.fontSize = "2em";
	
}

function myFunctionReset(){
	document.getElementById("text").innerHTML = "Click the button to see this text and it's color change.";
	document.getElementById("text").style.color = "black";
	document.getElementById("text").style.fontSize = "1.2em";
}

/**Program 2**/
function convert (){function celsiusToFahrenheit(f){
	return 5/9 * (f-32);
}
document.getElementById("celsius").innerHTML = "34C is equal to " + celsiusToFahrenheit(34) + "F";
document.getElementById("celsius").style.color = "blue"
}

function resetConvert(){
	document.getElementById("celsius").innerHTML = "What is 34 degree Celsius in Fahrenheit.";
	document.getElementById("celsius").style.color = "black"
}

/**Program 3**/
function randomNumber(){
	document.getElementById("rnumber").innerHTML = Math.floor(Math.random()*10+1);
}

/**Program 4**/
function todayDate(){
	var d = new Date();
	document.getElementById("tdate").innerHTML = "Today's date is " + d.toDateString();
}

/**Program 5**/
function tomorrowDay(){
	var d = new Date();
	var dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	document.getElementById("tday").innerHTML = dayOfWeek[d.getDay()+1];
}

/**Program 6**/
var color = ['Red','Yellow','Blue','Green','Purple'];
document.getElementById("color").innerHTML = color.join(" | ");
function addColor(){
	color.unshift(color.pop());
	document.getElementById("color").innerHTML = color.join(" | ");
}

/**Program 7**/
var score = [100, 49, 78, 658, 278, 458, 27, 747.90, 364.01, 0.09, 0.009];
document.getElementById("sorting").innerHTML = score.join(" | ");
function sortAlpha(){
	score.sort();
	document.getElementById("sorting").innerHTML = score.join(" | ");
}

function sortNumber(){
	score.sort(function(a, b){return a - b});
	document.getElementById("sorting").innerHTML = score.join(" | ");
}


/**Program 8**/
function test(){function checkLocalStorage(){
	var test = 'test';
	try{
		localStorage.setItem(test, test);
		return true;
	}
	catch(e){
		return false;
	}
}

if (checkLocalStorage() === true){
	document.getElementById('checkStorage').innerHTML = "Created item Test in Local Storage";
}
else {
	document.getElementById('checkStorage').innerHTML = 'No local storage';
}
}

function deleteStorage(){
	localStorage.getItem('test');
	if(localStorage.getItem('test') !== null){
		localStorage.removeItem('test');
		document.getElementById('checkStorage').innerHTML = 'Item deleted from Local Storage';
	}
	else {
		document.getElementById('checkStorage').innerHTML = 'No Items found in Local Storage';
	}
}

/**Program 9**/

function assignColor(){
	document.getElementById('dropdown').addEventListener('change', function(){
		var divColor = document.getElementById('dropdown').value;
		localStorage.setItem('divColor', divColor);
		document.getElementById('rectangle').style.backgroundColor = localStorage.getItem('divColor');
	})
}






	