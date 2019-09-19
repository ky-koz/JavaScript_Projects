
function mult_function(a, b) {
    var multiplication = 6 * 8;
    document.getElementById("funct_1").innerHTML = "6 * 8 = " + multiplication;
}

function addition_function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2 = " + subtraction;
}

function division_function() {
    var division = 90 / 9;
    document.getElementById("divide").innerHTML = "90 / 9 = " + division;
}

function multiple_functions() {
    var multiple = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multiple").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + multiple;
}

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("neg").innerHTML = "The opposite/negative of var x (10) = " + -x;
}

function incr_function() {
    var x = 5;
    x++;
    document.getElementById("incr").innerHTML = "The increment of 5 is " + x;
}

function decr_function() {
    var x = 5;
    x--;
    document.getElementById("decr").innerHTML = "The decrement of 5 is " + x;
}

function random_function() {
    var x = Math.random() * 100;
    document.getElementById("random").innerHTML = "A random number between 1 and 100 is " + x;
}

function math_object() {
    var x = Math.floor(18.3);
    document.getElementById("round").innerHTML = "18.3 rounded down to the nearest integer is " + x;
}