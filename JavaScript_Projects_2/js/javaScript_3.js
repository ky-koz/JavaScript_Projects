function display_type(flower) {
    var flower_type = flower.getAttribute("data-flower-type");
    alert(flower_type + " is the state flower in " + flower.innerHTML);
}