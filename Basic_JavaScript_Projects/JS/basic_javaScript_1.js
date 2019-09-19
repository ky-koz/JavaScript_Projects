var A = "This is a string";
//var A = A.fontcolor("blue");

var B = "Here is a \" quotation mark, an \' apostrophe, and a \\ backslash"
        + " and some more text"
        + " in order to concatenate";
var B = B.fontcolor("blue");

var family = "Kozole's", dad = "Ken", mom = "Anna";
//var family = family.fontcolor("blue");

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");

function myFirstFunction () {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("green_text").innerHTML = result;
}

function secondFunction () {
    var str = "This is red text!";
    var result = str.fontcolor("red");
    document.getElementById("red_text").innerHTML = result;
}

// alert and window.alert will not allow for font.color change (or other styling code)
window.alert(A);
document.write(blues);
document.write(4+9);
alert(family);