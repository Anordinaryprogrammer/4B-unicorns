// JavaScript Document

// Categories


//var categories = [food, sports, animals, countries];
var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "kimchi", "kale", "bread", "soup", "peach", "pear", "banana", "watermelon", "mango", "grapes", "tofu", "rice", "egg", "avocado", "doughnut", "cereal", "hamburger", "eggplant", "walnut", "cashew", "pie", "zucchini", "squash"];
var sports = ["baseball", "football", "soccer", "tennis", "badminton", "basketball", "hockey", "swimming", "volleyball", "fencing", "skiing", "snowboarding", "gymnastics", "golf", "boxing", "wrestling", "polo", "cricket", "bowling", "archery", "skating", "karate", "taekwondo", "cycling"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur", "chinchilla", "baboon", "deer", "badger", "owl", "caterpillar", "butterfly", "dolphin", "mouse", "fish"];
var countries = ["argentina", "america", "china", "japan", "russia", "canada", "brazil", "italy", "australia", "mexico", "spain", "korea", "egypt", "greece", "france", "greenland", "iceland", "england", "portugal", "vietnam", "india", "philippines"];




// Category Functions
function f() {
	category = "food";
	gen();
}
function s() {
	category = "sports";
	gen();
}
function a() {
	category = "animals";
	gen();
}
function c() {
	category = "countries";
	gen();
} 





var counter = 0;
var storage = 0;
var index = [];
var right = false;
var blank = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var imgCount = 1;
var testEqual = "";
var none = ["food", "sports", "animals", "countries"]
var wins = 0;
var losses = 0;

var category = "none";

function v(x) {
	var test = x.toLowerCase();
	for(var i = 0; i < randselect.length; i++) {
		if(randselect.charAt(i) == test) {
			right = true;
			index[counter] = i;
			counter++;
		}
		/*var array = document.getElementsByClassName("used button letter");
		for(var i = 0; i < array.length; i++) {
			array[i].style.display = "none";
		}
		var array2 = document.getElementsByClassName("button letter");
		for(var i = 0; i < array2.length; i++) {
			array2[i].style.display = "inline";
		}*/
	}
	document.getElementById("words").innerHTML = blank;
	//document.getElementById("words").innerHTML = "testing";
	$("#"+x.toLowerCase() + "_used").show();
	$("#" + x.toLowerCase()).hide();
	
	if(right == false) {
		imgCount++;
		$("#hangmanpng").attr("src", "images/Hangman-" + imgCount + ".png");
		if(imgCount == 11) {
			alert("Game Over. \nThe correct word was " + randselect.toUpperCase() + ".");
			losses++;
			document.getElementById("scores").innerHTML = "Wins: " + wins + " | Losses: " + losses;
			gen();
		}
		
	} else {
		for(var j = 0; j < index.length; j++) {
			if(index[j] == 0) {
				blank = x + blank.substring(1, blank.length);
			} else {// _ _ _ _ _ 
				blank = blank.substring(0, 2*index[j]) + x + blank.substring(2*index[j]+1, blank.length);
			}
		}
		update_display();
	}
	
	index = [];
	counter = 0;
	right = false;
	//alert(blank + "..." + testEqual + "...." + randselect);
	if(testEqual == blank) {
		alert("You win! \nThe correct word was " + randselect.toUpperCase() + ".");
		wins++;
		document.getElementById("scores").innerHTML = "Wins: " + wins + " | Losses: " + losses;
		gen();
	}
}

function update(a) {
	document.getElementById("words").innerHTML = a;
}
function gen() {
	blank = "";
	testEqual = "";
	if(category == "none") {
		category = none[Math.floor(Math.random() * none.length)];
	}
	if(category == "food") {
		randselect = food[Math.floor(Math.random() * food.length)];
		document.getElementById("categoryName").innerHTML = "Category: food";
	} else if(category == "sports") {
		randselect = sports[Math.floor(Math.random() * sports.length)];
		document.getElementById("categoryName").innerHTML = "Category: sports";
	} else if(category == "animals") {
		randselect = animals[Math.floor(Math.random() * animals.length)];
		document.getElementById("categoryName").innerHTML = "Category: animals";
	} else if(category == "countries") {
		randselect = countries[Math.floor(Math.random() * countries.length)];
		document.getElementById("categoryName").innerHTML = "Category: countries";
	}
	// Prints blank underscores
	for(var i = 0; i < randselect.length; i++) {
		blank += "_ ";
	}
	update_display();
	//document.getElementById("test").innerHTML = randselect;
	for(var i = 0; i < alphabet.length; i++) {
		$("#" + alphabet.charAt(i)).show();
		$("#" + alphabet.charAt(i) + "_used").hide();
	}
	for(var j = 0; j < randselect.length; j++) {
		testEqual += randselect[j] + " ";
		//alert(randselect[j] + "..." + randselect);
	}
	
	$("#hangmanpng").attr("src", "images/Hangman.png");
	imgCount = 1;
	
	testEqual = testEqual.toUpperCase();
}

function update_display() {
	document.getElementById("words").innerHTML = blank;
}

// Random Word Chooser

var randselect = "";
var blank = "";

window.onload = gen;
