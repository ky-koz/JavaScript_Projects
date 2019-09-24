function validate_form() {
    var x = document.forms["form_1"]["fname"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}