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
    var optionPosH = height - 550;
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

var i2 = 0;
function panera() {
    if (i2 == 0) {
        i2 = 1;
        document.styleSheets[0].addRule('button.panera', 'background-color: #56039d;');
    } else {
        i2 = 0;
        document.styleSheets[0].addRule('button.panera', 'background-color: #871de2;');
    }
}

var i3 = 0;
function sheetz() {
    if (i3 == 0) {
        i3 = 1;
        document.styleSheets[0].addRule('button.sheetz', 'background-color: #56039d;');
    } else {
        i3 = 0;
        document.styleSheets[0].addRule('button.sheetz', 'background-color: #871de2;');
    }
}

var i4 = 0;
function moes() {
    if (i4 == 0) {
        i4 = 1;
        document.styleSheets[0].addRule('button.moes', 'background-color: #56039d;');
    } else {
        i4 = 0;
        document.styleSheets[0].addRule('button.moes', 'background-color: #871de2;');
    }
}

var i5 = 0;
function danks() {
    if (i5 == 0) {
        i5 = 1;
        document.styleSheets[0].addRule('button.danks', 'background-color: #56039d;');
    } else {
        i5 = 0;
        document.styleSheets[0].addRule('button.danks', 'background-color: #871de2;');
    }
}

var i6 = 0;
function fords() {
    if (i6 == 0) {
        i6 = 1;
        document.styleSheets[0].addRule('button.fords', 'background-color: #56039d;');
    } else {
        i6 = 0;
        document.styleSheets[0].addRule('button.fords', 'background-color: #871de2;');
    }
}

var i7 = 0;
function velocity() {
    if (i7 == 0) {
        i7 = 1;
        document.styleSheets[0].addRule('button.velocity', 'background-color: #56039d;');
    } else {
        i7 = 0;
        document.styleSheets[0].addRule('button.velocity', 'background-color: #871de2;');
    }
}

var i8 = 0;
function social() {
    if (i8 == 0) {
        i8 = 1;
        document.styleSheets[0].addRule('button.social', 'background-color: #56039d;');
    } else {
        i8 = 0;
        document.styleSheets[0].addRule('button.social', 'background-color: #871de2;');
    }
}

var i9 = 0;
function east() {
    if (i9 == 0) {
        i9 = 1;
        document.styleSheets[0].addRule('button.east', 'background-color: #56039d;');
    } else {
        i9 = 0;
        document.styleSheets[0].addRule('button.east', 'background-color: #871de2;');
    }
}

var i10 = 0;
function bonchon() {
    if (i10 == 0) {
        i10 = 1;
        document.styleSheets[0].addRule('button.bonchon', 'background-color: #56039d;');
    } else {
        i10 = 0;
        document.styleSheets[0].addRule('button.bonchon', 'background-color: #871de2;');
    }
}

var i11 = 0;
function chipotle() {
    if (i11 == 0) {
        i11 = 1;
        document.styleSheets[0].addRule('button.chipotle', 'background-color: #56039d;');
    } else {
        i11 = 0;
        document.styleSheets[0].addRule('button.chipotle', 'background-color: #871de2;');
    }
}

var i12 = 0;
function cava() {
    if (i12 == 0) {
        i12 = 1;
        document.styleSheets[0].addRule('button.cava', 'background-color: #56039d;');
    } else {
        i12 = 0;
        document.styleSheets[0].addRule('button.cava', 'background-color: #871de2;');
    }
}

var i13 = 0;
function jersey() {
    if (i13 == 0) {
        i13 = 1;
        document.styleSheets[0].addRule('button.jersey', 'background-color: #56039d;');
    } else {
        i13 = 0;
        document.styleSheets[0].addRule('button.jersey', 'background-color: #871de2;');
    }
}

var i14 = 0;
function jimmy() {
    if (i14 == 0) {
        i14 = 1;
        document.styleSheets[0].addRule('button.jimmy', 'background-color: #56039d;');
    } else {
        i14 = 0;
        document.styleSheets[0].addRule('button.jimmy', 'background-color: #871de2;');
    }
}

var i15 = 0;
function coal() {
    if (i15 == 0) {
        i15 = 1;
        document.styleSheets[0].addRule('button.coal', 'background-color: #56039d;');
    } else {
        i15 = 0;
        document.styleSheets[0].addRule('button.coal', 'background-color: #871de2;');
    }
}

var i16 = 0;
function sarku() {
    if (i16 == 0) {
        i16 = 1;
        document.styleSheets[0].addRule('button.sarku', 'background-color: #56039d;');
    } else {
        i16 = 0;
        document.styleSheets[0].addRule('button.sarku', 'background-color: #871de2;');
    }
}

var i17 = 0;
function cfa() {
    if (i17 == 0) {
        i17 = 1;
        document.styleSheets[0].addRule('button.cfa', 'background-color: #56039d;');
    } else {
        i17 = 0;
        document.styleSheets[0].addRule('button.cfa', 'background-color: #871de2;');
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