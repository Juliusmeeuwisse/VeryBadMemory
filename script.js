var memorie_kaarten = document.querySelector(".memory-container");
var plaatjesArray = ["images/whale.svg", "images/hammerhead.svg", "images/stingray.svg", "images/shark.svg", "images/Octopus.svg", "images/orca.svg"];
button = document.querySelector(".shuffle");

var slicen = memorie_kaarten.toString().slice(0);

var hoeveel = plaatjesArray.length
var aantal = slicen.length;
console.log(aantal);
console.log (hoeveel);

function shuffle(items) {
    let cached = items.slice(0);
    let aantal = cached.length;
    
    for (let i = 0; i < aantal; i++) {
        var random = Math.floor(Math.random() * aantal);
        var temporary = cached[random];
    }
    return temporary;
}
shuffle();
console.log(temporary);

var kaart = document.getElementById("memory-card1");
var testjes = document.getElementById("front-face1");
var statusKaart = "shown";

function klik() {
    switch (statusKaart) {
        case "shown":
            testjes.style.display = 'none';
            statusKaart = 'hidden';
            break;
        case "hidden":
            testjes.style.display = 'block';
            statusKaart = 'shown';
            break;
    }
}
kaart.addEventListener('click', klik);