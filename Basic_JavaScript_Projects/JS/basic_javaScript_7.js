//Global Variable: 
var x = 10;
function add_numbers_1() {
    document.write(20 + x + "<br>");
}
function add_numbers_2() {
    document.write(x + 100 + "<br>");
}
add_numbers_1();
add_numbers_2();

//Local Variable:
function add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function add_numbers_4() {
    var y = 10;
    document.write(y + 100 + "<br>");
}
add_numbers_3();
add_numbers_4();

//Local Variable, y not defined:
function add_numbers_5() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function add_numbers_6() {
    document.write(y + 100 + "<br>");
}
add_numbers_5();
add_numbers_6();

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "How are you this evening?";
    }
}

function get_day() {
    if (new Date().getDay() < 5) { //Don't know how to create a day range
        document.getElementById("day").innerHTML = "Keep up the good work!";
    }
    else {
        document.getElementById("day").innerHTML = "Weekends are the best time to refuel!";
    }
}

function age_name() {
    year = document.getElementById("year").value;
    if (year < 1996 == year > 1981) {
        generation = "You are a Millenial.";
    }
    else if (year > 1996) {
        generation = "You are a Gen Z.";
    }
    else {
        generation = "You are not a Millenial.";
    }
    document.getElementById("generation").innerHTML = generation;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "It is the afternoon.";
    }
    else {
        reply = "Itis evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}