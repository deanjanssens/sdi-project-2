//alert("JavaScript works!");
//Dean Janssens
//SDI 1406
//June 12, 2014
//Project 2
//Variables
var character = "Daryl";
var weapon2 = "Rifle";
var weapon1 = "Crossbow";
var numberOfZombies = 3;
var numberOfSurvivors;
var firstChoice = "Crossbow";
var secondChoice = "Rifle";


//Prompt

var weaponChoice = prompt("Which weapon will " + character + " use?", weapon1 + " or " + weapon2);

//Procedure

var getWeapon = function (weaponChoice, weapon1, weapon2) {
	var weapon = weaponChoice
    if (weaponChoice === weapon1 || weaponChoice === weapon2) {
        console.log("The weapon you have chosen for " + character + " is a " + weapon + ".");
    } else {
        console.log("You have not chosen a proper weapon.");
    }
};


getWeapon(weaponChoice, weapon1, weapon2);

//Confirm

var zombiesPresent = confirm("Are zombies present?");

//Boolean Function

var getzombiesPresent = function (zombiesPresent) {
	var thereAreZombies = zombiesPresent
    var zombies = 3;
    while (zombiesPresent === true && zombies > 0) {
        zombies--;
        console.log("It is " + zombiesPresent + " that zombies are present.");
        console.log("Fire weapon.");
        console.log("There are " + zombies + " zombies " + " present.");

    }
    console.log("There are no zombies present. You are safe for now.");
    return thereAreZombies;
};

//String Function

var weaponsToUse = function (firstChoice,secondChoice) {
    var weaponsAvailable = firstChoice + " and " + secondChoice;
    console.log(character + " has a " + firstChoice + " and a " + secondChoice + " to protect himself and the survivors from zombies.");  
    return weaponsAvailable;
};


//Number Function

var survivors = function (numberOfSurvivors){
	var totalSurvivorsTakenToSafety = numberOfSurvivors;
	console.log ("There are " + numberOfSurvivors + " survivors to take to safety.")
	for(var survivorsTakenToSafety = 1;survivorsTakenToSafety <= numberOfSurvivors;survivorsTakenToSafety++){
    console.log("Daryl has taken " + survivorsTakenToSafety + " survivors to safety.");
    }
	return totalSurvivorsTakenToSafety;
};

var thereAreZombies = getzombiesPresent(zombiesPresent);
var weaponsAvailable = weaponsToUse(firstChoice, secondChoice);
var totalSurvivorsTakenToSafety = survivors(6);

console.log("It is " + thereAreZombies + " that zombies are in Daryl's current area.");
console.log("Daryl has a " +  weaponsAvailable + " to fend off zombies.");
console.log("He has taken " + totalSurvivorsTakenToSafety + " survivors to safety.");







