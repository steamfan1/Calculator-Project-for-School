/*document.getElementById("num1").onclick = function write1()
{
$("#screen").append(1);
}

document.getElementById("num2").onclick = function writeClear()
{
    $("#screen").append(2);
}

document.getElementById("num3").onclick = function writeClear()
{
    $("#screen").append(3);
}

document.getElementById("num4").onclick = function writeClear()
{
    $("#screen").append(4);
}

document.getElementById("num5").onclick = function writeClear()
{
    $("#screen").append(5);
}

document.getElementById("num6").onclick = function writeClear()
{
    $("#screen").append(6);
}

document.getElementById("num7").onclick = function writeClear()
{
    $("#screen").append(7);
}

document.getElementById("num8").onclick = function writeClear()
{
    $("#screen").append(8);
}

document.getElementById("num9").onclick = function writeClear()
{
    $("#screen").append(9);
}

document.getElementById("num0").onclick = function writeClear()
{
    $("#screen").append(0);
}
*/

/* Old Code
var num1 = 11;
var num2 = 11;

var $screen = $("#screen");
var $number = $(".number");

$('.number').on('click', function() {
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    if (num1 == 11) {
        num1 = numberPressed;
    } else if (num2 == 11) {
        num2 = numberPressed;
    }
});



document.getElementById("clear").onclick = function writeClear()
{
    $("#screen").empty();
}

document.getElementById("plus").onclick = function writePlus()
{
    $("#screen").append("+");
    op = "+";
}

document.getElementById("minus").onclick = function writeMinus()
{
    $("#screen").append("-");
    op = "-";
}

document.getElementById("multiply").onclick = function writeMultiply()
{
    $("#screen").append("x");
    op = "x";
}

document.getElementById("divide").onclick = function writeDivide()
{
    $("#screen").append("/");
    op = "/";
}

document.getElementById("equal").onclick = function writeEqual()
{
    $("#screen").append("=");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, op, num2);
    if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "x") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    $screen.append(answer);
    num1 = 11;
    num2 = 11;
};

*/
/*
var currentNumber = 1;
var num1;
var num2;

var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    
    if (currentNumber == 1) {
        if (num1 == null) {
        num1 = numberPressed;
    } else {
   num1 = num1 + numberPressed;
    }
}
if (currentNumber == 2) {
    if (num2 == null) {
        num2 =numberPressed;
    } else {
        num2 = num2 + numberPressed;
    }
}
});



$("#clear").on('click', function()
{
    $screen.empty();
    num1 = null;
    num2 = null;
currentNumber = 1;
});

$("#plus").on('click' , function()
{
    $("#screen").append("+");
    op = "+";
  currentNumber++;
})

$("#minus").on('click' , function()
{
    $("#screen").append("-");
    op = "-";
    currentNumber++;
})

$("#multiply").on('click' , function()
{
    $("#screen").append("x");
    op = "x";
    currentNumber++;
})

$("#divide").on('click' , function()
{
    $("#screen").append("/");
    op = "/";
    currentNumber++;
})

$("#equal").on('click' , function()
{
    $("#screen").append("=");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, op, num2);
    if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "x") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    $screen.append(answer);
    num1 = null;
    num2 = null;
    currentNumber = 1;
})
*/












/*

var currentNumber = 1;
var num1;
var num2;
var click = 1;

var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
    click++;
    if (click > 8){
        return;
    }
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    
    if (currentNumber == 1) {
        if (num1 == null) {
        num1 = numberPressed;
    } else {
   num1 = num1 + numberPressed;
    }
}
if (currentNumber == 2) {
    if (num2 == null) {
        num2 =numberPressed;
    } else {
        num2 = num2 + numberPressed;
    }
}
});

function findAnswer() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
     if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "x") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    num1 = answer;
    num2 = null;
    currentNumber = 1;
}

function more(){
    if (click > 8){
        click = click - 5;
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
    currentNumber = 2;
}

$("#clear").on('click', function()
{
    $screen.empty();
    num1 = null;
    num2 = null;
currentNumber = 1;
click = 0;
});



$("#plus").on('click' , function()
{
    more();
    $screen.append("+");
    op = "+";
})

$("#minus").on('click' , function()
{
    more();
    $screen.append("-");
    op = "-";
})

$("#multiply").on('click' , function()
{
    more();
    $screen.append("x");
    op = "x";
})

$("#divide").on('click' , function()
{
    more();
    $screen.append("/");
    op = "/";
})



$("#equal").on('click' , function()
{
    $screen.append("=");
    console.log(num1, op, num2);
    findAnswer();
    if (click > 8){
        $screen.empty();
        var answerLength = answer.toString();
        click = answerLength.length;
        console.log(click);
    }
})

*/






var currentNumber = 1;
var num1;
var num2;
var click = 1;

var $screen = $("#screen");
var $number = $(".number");

$number.on('click', function() {
    click++;
    if (click > 8){
        return;
    }
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    
    if (currentNumber == 1) {
        if (num1 == null) {
        num1 = numberPressed;
    } else {
   num1 = num1 + numberPressed;
    }
}
if (currentNumber == 2) {
    if (num2 == null) {
        num2 =numberPressed;
    } else {
        num2 = num2 + numberPressed;
    }
}
});

function findAnswer() {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
     if (op == "+") {
        answer = num1 + num2;
    }
    if (op == "-") {
        answer = num1 - num2;
    }
    if (op == "x") {
        answer = num1 * num2;
    }
    if (op == "/") {
        answer = num1 / num2;
    }
    num1 = answer;
    num2 = null;
    currentNumber = 1;
}

function more(){
    if (click > 8){
        click = click - 5;
    }
    if (currentNumber == 2) {
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
    currentNumber = 2;
}

$("#clear").on('click', function()
{
    $screen.empty();
    num1 = null;
    num2 = null;
currentNumber = 1;
click = 0;
});



$("#plus").on('click' , function()
{
    more();
    $screen.append("+");
    op = "+";
})

$("#minus").on('click' , function()
{
    more();
    $screen.append("-");
    op = "-";
})

$("#multiply").on('click' , function()
{
    more();
    $screen.append("x");
    op = "x";
})

$("#divide").on('click' , function()
{
    more();
    $screen.append("/");
    op = "/";
})



$("#equal").on('click' , function()
{
    $screen.append("=");
    console.log(num1, op, num2);
    findAnswer();
    if (click > 8){
        $screen.empty();
        var answerLength = answer.toString();
        click = answerLength.length;
        console.log(click);
    }
    $screen.append(answer);
})