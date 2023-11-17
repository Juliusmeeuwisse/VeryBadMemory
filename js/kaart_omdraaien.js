
var testjes = document.querySelector(".front-face1");
var statusKaart = "hidden";
function kaart_omdraaien() {
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
