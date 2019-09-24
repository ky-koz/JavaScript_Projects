function species_function() {
    var species_output;
    var species = document.getElementById("species_input").value;
    var species_string = " is a great species to protect!";
    switch(species) {
        case "Sumatran Orangutan":
            species_output = "Sumatran Orangutan" + species_string;
            break;
        case "Marine Iguana":
            species_output = "Marine Iguana" + species_string;
            break;
        case "Mountain Plover":
            species_output = "Mountain Plover" + species_string;
            break;
        case "Monarch Butterfly":
            species_output = "Monarch Butterfly" + species_string;
            break;
        case "Saola":
            species_output = "Saola" + species_string;
            break;
        case "Vaquita":
            species_output = "Vaquita" + species_string;
            break;
        case "Kagu":
            species_output = "Kagu" + species_string;
            break;
        case "Ozark Hellbender":
            species_output = "Ozark Hellbender" + species_string;
            break;
        case "Gila Chub":
            species_output = "Gila Chub" + species_string;
            break;
        case "Mexican Blindcat":
            species_output = "Mexican Blindcat" + species_string;
            break;
        case "Miami Tiger Beetle":
            species_output = "Miami Tiger Beetle" + species_string;
            break;
        case "Bone Cave Harvestman":
            species_output = "Bone Cave Harvestman" + species_string;
            break;
        case "Dakota Skipper":
            species_output = "Dakota Skipper" + species_string;
            break;
    }
    document.getElementById("output").innerHTML = species_output;
}

function hello_world_function() {
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "The text has changed!";
}

function canvas_draw() {
    var c = document.getElementById("canvas_1");
    var ctx = c.getContext("2d");

    ctx.font = "5em Arial";
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    //Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("FILL TEXT", 47, 150);
}

canvas_draw();

function canvas_draw_2() {
    var c = document.getElementById("canvas_2");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(100, 100, 250, 0);
    // Create gradient
    grd.addColorStop("0", "blue");
    grd.addColorStop("0.5", "magenta");
    grd.addColorStop("1.0", "yellow");
    //Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 600, 300);
}

canvas_draw_2();
