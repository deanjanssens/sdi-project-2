//alert("JavaScript works!");
//Dean Janssens
//SDI 1406
//June 12, 2014
//Project 2
//Variables
var character1 = "Rick";
var character2 = "Daryl";
var character3 = "Michonne";
var weaponOfChoice1 = ".357 Magnum";
var weaponOfChoice2 = "Crossbow";
var weaponOfChoice3 = "Katana";
var zombiesPresent = true;
var numberOfZombies = 3;

//Prompt

var characterChoice = prompt("Which character do you choose?", "Please choose Rick, Daryl or Michonne.");

//Procedure


var getCharacter = function () {
    if (characterChoice === "Rick") {
        var characterName = character1
        console.log("Your character is " + characterName + " and your weapon of choice is a " + weaponOfChoice1 + ".");
    } else if (characterChoice === "Daryl") {
        var characterName = character2
        console.log("Your character is " + characterName + " and your weapon of choice is a " + weaponOfChoice2 + ".");
    } else if (characterChoice === "Michonne") {
        var characterName = character3
        console.log("Your character is " + characterName + " and your weapon of choice is a " + weaponOfChoice3 + ".");
    } else {
    console.log("Please refresh and choose a character." + " " + characterChoice);
    }
    return;

};

getCharacter();

//Confirm

var zombiesPresent = confirm(Are there zombies present?)


//Boolean Function

var getZombies = function () {
    var zombies = 0;
    while (zombies < 3) {
    console.log("There are zombies present. There are more to remove."}
    console.log("There are no zombies present.");
    return zombies;

};

getZombies();


//Number Function

var getNumber = function (numberOfZombies) {
    var ;
    for () {}
    return;
};




//String Function

var getString = function () {
    var;
    if () {} else {}

};

//Returned Values

getBoolean();
getNumber();
getString();