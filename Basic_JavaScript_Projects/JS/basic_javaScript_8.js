function full_sent() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sent = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sent;
}

function slice_method() {
    var sentence = "All that glitters is not gold.";
    var section = sentence.slice(10,16);
    document.getElementById("slice").innerHTML = section;
}

function upper_case() {
    var str = "All Upper Case!";
    var res = str.toUpperCase();
    document.getElementById("upper_example").innerHTML = res;
}

function search_method() {
    var str = "How much wood would a wood chuck chuck if a woodchuck could chuck wood.";
    var n = str.search("woodchuck");
    document.getElementById("search_example").innerHTML = n;
}

function string_method() {
    var x = 578;
    document.getElementById("numbers_string").innerHTML = x.toString();
}

function precision_method() {
    var x = 18772.9878923234;
    document.getElementById("precision").innerHTML = x.toPrecision(7);
}

function fixed_method() {
    var num = 8.298042;
    var n = num.toFixed(1);
    document.getElementById("fixed").innerHTML = n;
}

function value_of_method() {
    var str = "Shiba Inu";
    var res = str.valueOf();
    document.getElementById("value_of").innerHTML = res;
}
