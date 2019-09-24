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