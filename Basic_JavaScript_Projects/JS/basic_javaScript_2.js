
function two_elements() {
    var str = "Here are two variables!";
    var result = str.fontcolor("green");
    document.getElementById("two").innerHTML = result;
}

function conc_function() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}
