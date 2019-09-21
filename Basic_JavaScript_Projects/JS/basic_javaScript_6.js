function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<53)?"You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age<18)?"You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function key_function() {
    document.getElementById("key_const").innerHTML = "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}


function new_this_function() {
    document.getElementById("new_and_this").innerHTML = "Emily drives a " + Emily.vehicle_color + "-colored " + Emily.vehicle_model + " manufactured in " + Emily.vehicle_year;
}

function count_function() {
    document.getElementById("nested_function").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;} //This is the nested function.
        plus_one();
        return starting_point;
    }

}