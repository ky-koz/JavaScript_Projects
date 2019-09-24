function call_loop() {
    var digit = "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

function string_length() {
    var str = "Mississippi";
    var n = str.length;
    document.getElementById("string_l").innerHTML = n;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) {
    content += instruments [y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function array_function() {
    var words = [];
    words[0] = "zero";
    words[1] = "one";
    words[2] = "two";
    words[3] = "three";
    document.getElementById("array").innerHTML = "The word in this array index is " + words[3] + ".";
}

function constant_function() {
    const domestic_animal = {type:"chicken", brand:"Maran", color:"Black Copper"};
    domestic_animal.color = "Golden Cuckoo";
    domestic_animal.price = "$13";
    document.getElementById("constant").innerHTML = "The cost of the " + domestic_animal.type + " was " + domestic_animal.price + " and it was a " + domestic_animal.color + " color.";
}

function let_keyword() {
    var x = 94;
    document.write(x);
    {
        let x = 58;
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}

//----- return statement --------//

var z = return_statement(5, 9);

function return_statement(a, b) {
    return (a * b);
}

document.getElementById("return").innerHTML = z;

//-------- Object desciption function -----------//

let dog = {
    breed: "Black Labrador",
    stock: "English",
    year: "2009",
    color: "black",
    description: function() {
        return "The dog is a " + this.breed + ", "+ this.stock + " bred, born in " + this.year + " and is the color " + this.color + ".";
    }
};
document.getElementById("dog_object").innerHTML = dog.description();

//------ Break statement ---------//

function break_function() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 5) { break; }
        text += "Count " + i + "<br>";
    }
    document.getElementById("break_state").innerHTML = text;
}

function continue_function() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 7) { continue; } //this line skips 7
        text += "Count " + i + "<br>";
    }
    document.getElementById("continue_state").innerHTML = text;
}

