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

function boolean_true() {
    var x = 10 > 2;
    document.write(x);
}

function boolean_false() {
    var x = 5 > 20;
    document.write(x);
}

console.log(2+2);
console.log(2>10);

function coercion() {
    var x = "10" + 5;
    document.write(x);
}

function compare_true() {
    var x = 10==10;
    document.write(x);
}

function compare_false() {
    var x = 10==20;
    document.write(x);
}

function compare_triple_1() {
    x = 82;
    y = "82";
    document.write(x===y);
}

function compare_triple_2() {
    x = "people";
    y = "people";
    document.write(x===y);
}

function compare_triple_3() {
    x = 82;
    y = "10";
    document.write(x===y);
}

function compare_triple_4() {
    x = "people";
    y = "dogs";
    document.write(x===y);
}