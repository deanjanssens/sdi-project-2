//alert("JavaScript works!");
//Dean Janssens
//SDI 1406
//June 12, 2014
//Project 2
//Variables
var character = "Daryl";
var weapon2 = ".357 Magnum";
var weapon1 = "Crossbow";
var zombiesPresent;
var numberOfZombies = 3;
var numberOfSurvivors;

//Prompt

var weaponChoice = prompt("Which weapon will " + character + " use?", weapon1 + " or " + weapon2);

//Procedure

var getWeapon = function (weaponChoice, weapon1 ,weapon2){
	if (weaponChoice === weapon1){
	console.log("The " + weapon1 + " is " + character + "'s" + " weapon of choice.");
	}else{ 
	console.log(character + " can also use a " + weapon2 + ".");	
	}
};

getWeapon(weaponChoice, weapon1, weapon2);

//Confirm

var zombiesPresent = confirm("Are zombies present?");

//Boolean Function

var getzombiesPresent = function (zombiesPresent){
	var zombies = 3;
	while (zombiesPresent === true && zombies >0){
	zombies--;
	console.log ("It is " + zombiesPresent + " that zombies are present.");
	console.log ("Fire weapon.");
	console.log ("There are " + zombies + " zombies " + " present.");
	
	};
	console.log("There are no zombies present. You are safe for now.");
	return zombies;	
};


getzombiesPresent(zombiesPresent);

//Number Function

var number = function ( ){
};



//String Function

var string = function ( ){
};







