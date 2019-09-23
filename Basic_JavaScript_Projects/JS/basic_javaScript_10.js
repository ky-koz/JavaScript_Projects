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