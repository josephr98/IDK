"use strict";

//Scales Background Image
/*function background() {
    var width = document.documentElement.clientWidth;
    var buttonPosW = width * 0.5 - 230;
    var buttonPosStringW = buttonPosW.toString() + "px";

    document.getElementById("Buttons").style.left = buttonPosStringW;
    
    var height = document.documentElement.clientHeight;
    var buttonPosH = height - 210;
    var buttonPosStringH = buttonPosH.toString() + "px";

    document.getElementById("Buttons").style.top = buttonPosStringH;
}
background();

window.addEventListener("resize", background);*/

//Centers Grey Block
function blockPosFunc() {
    var width = document.documentElement.clientWidth;
    var blockPosW = width * 0.5 - 240;
    var blockPosStringW = blockPosW.toString() + "px";

    document.getElementById("block").style.left = blockPosStringW;
}
blockPosFunc();

window.addEventListener("resize", blockPosFunc);

//Centers Button Div
function buttonPosFunc() {
    var width = document.documentElement.clientWidth;
    var buttonPosW = width * 0.5 - 215;
    var buttonPosStringW = buttonPosW.toString() + "px";

    document.getElementById("Buttons").style.left = buttonPosStringW;
}
buttonPosFunc();

window.addEventListener("resize", buttonPosFunc);

//Centers Options Div
function optionPosFunc() {
    var width = document.documentElement.clientWidth;
    var optionPosW = width * 0.5 - 215;
    var optionPosStringW = optionPosW.toString() + "px";

    document.getElementById("options").style.left = optionPosStringW;
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
var i18 = 0;
function wawa() {
    if (i18 == 0) {
        i18 = 1;
        document.styleSheets[0].addRule('button.wawa', 'background-color: #56039d;');
    } else {
        i18 = 0;
        document.styleSheets[0].addRule('button.wawa', 'background-color: #871de2;');
    }
}


//Button Functions
function food() {
    var foodArray = ["Tippy's", "Panera", "Sheetz", "Moe's", "McDank's", "Ford's", "Velocity", "Social House", "East Gate", "BonChon", "Chipotle", "CAVA", "Jersey Mikes", "Jimmy Johns", "Coal Fire", "Sarku", "Chick fil A", "Wawa"];
    
    if (i18==1){
        var r = foodArray.splice(17,1);
    }
    if (i17==1){
        var r1 = foodArray.splice(16,1);
    }
    if (i16==1){
        var r2 = foodArray.splice(15,1);
    }
    if (i15==1){
        var r3 = foodArray.splice(14,1);
    }
    if (i14==1){
        var r4 = foodArray.splice(13,1);
    }
    if (i13==1){
        var r5 = foodArray.splice(12,1);
    }
    if (i12==1){
        var r6 = foodArray.splice(11,1);
    }
    if (i11==1){
        var r7 = foodArray.splice(10,1);
    }
    if (i10==1){
        var r8 = foodArray.splice(9,1);
    }
    if (i9==1){
        var r9 = foodArray.splice(8,1);
    }
    if (i8==1){
        var r10 = foodArray.splice(7,1);
    }
    if (i7==1){
        var r11 = foodArray.splice(6,1);
    }
    if (i6==1){
        var r12 = foodArray.splice(5,1);
    }
    if (i5==1){
        var r13 = foodArray.splice(4,1);
    }
    if (i4==1){
        var r14 = foodArray.splice(3,1);
    }
    if (i3==1){
        var r15 = foodArray.splice(2,1);
    }
    if (i2==1){
        var r16 = foodArray.splice(1,1);
    }
    if (i1==1){
        var r17 = foodArray.splice(0,1);
    }
    
    var randNum = Math.floor(Math.random() * foodArray.length);
    
    alert(foodArray[randNum]);
}

function drive() {
    var randNum = Math.ceil(Math.random() * 3);
    
    if (randNum == 1) {
        var randNum2 = Math.ceil(Math.random() * 3);
        if (randNum2==1){
            alert("Brian (He's a dumbass)");
        }
        if (randNum2==2){
            alert("Brian (He's a headass)");
        }
        if (randNum2==3){
            alert("Brian (If he even shows up)");
        }
    }
    
    if (randNum == 2) {
        alert("Caleb");
    }
    
    if (randNum == 3) {
        alert("Joseph");
    }
}