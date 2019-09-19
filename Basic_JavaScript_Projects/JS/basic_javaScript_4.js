function my_dictionary() {
    var animal = {
        species: "Dog",
        color: "Black",
        breed: "Labrador",
        age:5,
        sound:"Bark!",
        sound:"Meow!"
    };
    delete animal.sound;
    document.getElementById("dictionary").innerHTML = animal.sound;
}