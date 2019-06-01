"use strict";

//Mobile Device Detection
var check = false;
function mobilecheck() {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
};
mobilecheck();
console.log(check);

//Scales Background Image
function background() {
    var height = document.documentElement.clientHeight;
    if (height >= 720) {
        var heightString = height.toString() + "px";
    } else {
        height = 720;
        heightString = height.toString() + "px";
    }

    document.getElementById("thanos").style.height = heightString;
}
background();

window.addEventListener("resize", background);

function resize() {
    var wscore = document.documentElement.clientWidth;
    if (wscore > 1060) {
        //Side Bar
        document.getElementById("sticky_").style.display = "inline-block";
        document.getElementById("notsticky").style.display = "none";
        
        //Text
        document.styleSheets[0].addRule('h1', 'font-size: 35px;');
        document.getElementById("uno").style.display = "inline-block";
        document.getElementById("dos").style.display = "none";
        
        //Centers Grey Block
        function blockPosFunc() {
            var width = document.documentElement.clientWidth;
            var blockPosW = width * 0.4 - 240;
            var blockPosStringW = blockPosW.toString() + "px";

            document.getElementById("block").style.left = blockPosStringW;
        }
        blockPosFunc();

        //Centers Button Div
        function buttonPosFunc() {
            var width = document.documentElement.clientWidth;
            var buttonPosW = width * 0.4 - 215;
            var buttonPosStringW = buttonPosW.toString() + "px";

            document.getElementById("Buttons").style.left = buttonPosStringW;
        }
        buttonPosFunc();
        

        //Centers Options Div
        function optionPosFunc() {
            var width = document.documentElement.clientWidth;
            var optionPosW = width * 0.4 - 215;
            var optionPosStringW = optionPosW.toString() + "px";

            document.getElementById("options").style.left = optionPosStringW;
        }
        optionPosFunc();
        
        //Side Bar Height;
        function sbar() {
            var height = document.documentElement.clientHeight;
            var H = height - 55;
            if (height >= 720) {
                var StringH = H.toString() + "px";
            } else {
                H = 665;
                StringH = H.toString() + "px";
            }
            document.getElementById("sticky_").style.height = StringH;
        }
        sbar();
        
    } else if (wscore > 540) {
        //Side Bar
        document.getElementById("sticky_").style.display = "inline-block";
        document.getElementById("notsticky").style.display = "none";
        
        //Text
        document.styleSheets[0].addRule('h1', 'font-size: 20px;');
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "inline-block";
        
        //Centers Grey Block
        function blockPosFunc_() {
            var width = document.documentElement.clientWidth;
            var blockPosW = width * 0.5 - 215;
            var blockPosStringW = blockPosW.toString() + "px";

            document.getElementById("block").style.left = blockPosStringW;
        }
        blockPosFunc_();

        //Centers Button Div
        function buttonPosFunc_() {
            var width = document.documentElement.clientWidth;
            var buttonPosW = width * 0.5 - 190;
            var buttonPosStringW = buttonPosW.toString() + "px";

            document.getElementById("Buttons").style.left = buttonPosStringW;
        }
        buttonPosFunc_();

        //Centers Options Div
        function optionPosFunc_() {
            var width = document.documentElement.clientWidth;
            var optionPosW = width * 0.5 - 190;
            var optionPosStringW = optionPosW.toString() + "px";

            document.getElementById("options").style.left = optionPosStringW;
        }
        optionPosFunc_();
        
        //Side Bar Height;
        function sbar() {
            var height = document.documentElement.clientHeight;
            var H = height - 55;
            if (height >= 720) {
                var StringH = H.toString() + "px";
            } else {
                H = 665;
                StringH = H.toString() + "px";
            }
            document.getElementById("sticky_").style.height = StringH;
        }
        sbar();
        
    } else {
        //Side Bar
        document.getElementById("sticky_").style.display = "none";
        document.getElementById("notsticky").style.display = "inline-block";
        
        //Text
        document.styleSheets[0].addRule('h1', 'font-size: 20px;');
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "inline-block";
        
        //Centers Grey Block
        function blockPosFunc() {
            var width = document.documentElement.clientWidth;
            var blockPosW = width * 0.5 - 240;
            var blockPosStringW = blockPosW.toString() + "px";

            document.getElementById("block").style.left = blockPosStringW;
        }
        blockPosFunc();

        //Centers Button Div
        function buttonPosFunc() {
            var width = document.documentElement.clientWidth;
            var buttonPosW = width * 0.5 - 215;
            var buttonPosStringW = buttonPosW.toString() + "px";

            document.getElementById("Buttons").style.left = buttonPosStringW;
        }
        buttonPosFunc();

        //Centers Options Div
        function optionPosFunc() {
            var width = document.documentElement.clientWidth;
            var optionPosW = width * 0.5 - 215;
            var optionPosStringW = optionPosW.toString() + "px";

            document.getElementById("options").style.left = optionPosStringW;
        }
        optionPosFunc();
    }
}
resize();
window.addEventListener("resize", resize);

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

function clearAll(){
    i1=1;
    i2=1;
    i3=1;
    i4=1;
    i5=1;
    i6=1;
    i7=1;
    i8=1;
    i9=1;
    i10=1;
    i11=1;
    i12=1;
    i13=1;
    i14=1;
    i15=1;
    i16=1;
    i17=1;
    i18=1;
    document.styleSheets[0].addRule('button.tippy', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.panera', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.sheetz', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.moes', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.danks', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.fords', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.velocity', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.social', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.east', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.bonchon', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.chipotle', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.cava', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.jersey', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.jimmy', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.coal', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.sarku', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.cfa', 'background-color: #56039d;');
    document.styleSheets[0].addRule('button.wawa', 'background-color: #56039d;');
}

function selectAll(){
    i1=0;
    i2=0;
    i3=0;
    i4=0;
    i5=0;
    i6=0;
    i7=0;
    i8=0;
    i9=0;
    i10=0;
    i11=0;
    i12=0;
    i13=0;
    i14=0;
    i15=0;
    i16=0;
    i17=0;
    i18=0;
    document.styleSheets[0].addRule('button.tippy', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.panera', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.sheetz', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.moes', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.danks', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.fords', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.velocity', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.social', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.east', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.bonchon', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.chipotle', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.cava', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.jersey', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.jimmy', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.coal', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.sarku', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.cfa', 'background-color: #871de2;');
    document.styleSheets[0].addRule('button.wawa', 'background-color: #871de2;');
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