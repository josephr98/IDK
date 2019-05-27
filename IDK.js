/* eslint-env browser */
"use strict";

//Centers Button Div
function buttonPosFunc() {
    var width = document.documentElement.clientWidth;
    var buttonPosW = width * 0.5 - 230;
    var buttonPosStringW = buttonPosW.toString() + "px";

    document.getElementById("Buttons").style.left = buttonPosStringW;
    
    var height = document.documentElement.clientHeight;
    var buttonPosH = height - 210;
    var buttonPosStringH = buttonPosH.toString() + "px";

    document.getElementById("Buttons").style.top = buttonPosStringH;
}
buttonPosFunc();

window.addEventListener("resize", buttonPosFunc);

//Centers Options Div
function optionPosFunc() {
    var width = document.documentElement.clientWidth;
    var optionPosW = width * 0.5;
    var optionPosStringW = optionPosW.toString() + "px";

    document.getElementById("options").style.left = optionPosStringW;
    
    var height = document.documentElement.clientHeight;
    var optionPosH = height - 400;
    var optionPosStringH = optionPosH.toString() + "px";

    document.getElementById("options").style.top = optionPosStringH;
}
optionPosFunc();

window.addEventListener("resize", optionPosFunc);

//Options
var i1 = 0;
function tippy() {
    if (i1 == 0) {
        i1 = 1;
        
        document.styleSheets[0].addRule('button.tippy', 'background-color: #56039d;');
    } else {
        i1 = 0;
        
        document.styleSheets[0].addRule('button.tippy', 'background-color: #871de2;');
    }
}



//Button Functions
function food() {
    var foodArray = ["Tippy's", "Panera", "Sheetz", "Moe's", "McDank's", "Ford's", "Velocity", "Social House", "East Gate", "BonChon", "Chipotle", "CAVA", "Jersey Mikes", "Jimmy Johns", "Coal Fire", "Sarku", "Chick fil A"];
    var randNum = Math.floor(Math.random() * foodArray.length);
    
    alert(foodArray[randNum]);
}

function drive() {
    var randNum = Math.ceil(Math.random() * 3);
    
    if (randNum == 1) {
        alert("Brian (He is a dumbass)");
    }
    
    if (randNum == 2) {
        alert("Caleb");
    }
    
    if (randNum == 3) {
        alert("Joseph");
    }
}