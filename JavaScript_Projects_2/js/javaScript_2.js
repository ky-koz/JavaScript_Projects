function validate_form() {
    var x = document.forms["form_1"]["fname"].value;
    var y = document.forms["form_1"]["lname"].value;
    if (x == "" || y == "") {
        alert("Name must be filled out");
    }
}