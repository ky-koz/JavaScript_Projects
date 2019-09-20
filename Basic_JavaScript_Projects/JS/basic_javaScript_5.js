function type_funct() {
    var input = "cow";
   document.write(typeof input);
}

function nan_function() {
    var x = "This is a string";
    document.getElementById("nan").innerHTML = isNaN(x);
}

function false_nan() {
    var x = 10;
    document.getElementById("number").innerHTML = isNaN(x);
}

function infinity_pos() {
    var x = 2E310;
    document.write(x);
}

function infinity_neg() {
    var x = -3E310;
    document.write(x);
}