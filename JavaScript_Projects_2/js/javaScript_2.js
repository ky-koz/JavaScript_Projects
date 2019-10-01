function validate_form() {
    var x = document.forms["form_1"]["fname"].value;
    var y = document.forms["form_1"]["lname"].value;
    var z = document.forms["form_1"]["pnumber"].value;
    if (x == "" || y == "" || z == "") {
        alert("Name must be filled out");
    }
}