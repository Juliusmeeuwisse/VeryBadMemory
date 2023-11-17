const memorie_kaarten = document.querySelector(".memory-container");
const kaarten = document.querySelectorAll(".memory-card");
const huidige_kaart = document.querySelector("#front-face");
const image_kaart = document.getElementsByTagName("img");
const score = document.querySelector(".score");
button = document.querySelector(".shuffle");
let flipcount = 0;
let firstCard, secondCard;
let audio = document.querySelector(".audio");
const Muziek = document.querySelector(".achtergrondMuziek");
Muziek.volume = 0.1;

function flipkaart() {
  if (flipcount < 1) {
    this.classList.add("flipped");
    flipcount = flipcount + 1;
    firstCard = this;
    audio.currentTime = 0; audio.play();
  } else if (flipcount === 1 && this !== firstCard) {
    this.classList.add("flipped");
    flipcount = flipcount + 1;
    secondCard = this;
    cardMatch();
    audio.currentTime = 0; audio.play();
  } else {
  }
}

function shuffle() {
  for (let i = memorie_kaarten.children.length; i >= 0; i--) {
    memorie_kaarten.appendChild(
      memorie_kaarten.children[(Math.random() * i) | 0]
    );
      reset();
  }
}

function cardMatch() {
  if (firstCard.dataset.type === secondCard.dataset.type) {
    console.log("Gelijk");
    firstCard.removeEventListener("click", flipkaart);
    secondCard.removeEventListener("click", flipkaart);
    score.innerHTML++;
    flipcount = 0;
  } else if (firstCard.dataset.type !== secondCard.dataset.type) {
    console.log("Niet gelijk");
    unFlip();
  }
}

function unFlip() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    flipcount = 0;
  }, 1000);
}

function reset() {
  kaarten.forEach((kaarten) => kaarten.classList.remove("flipped"));
  kaarten.forEach((kaart) => kaart.addEventListener("click",));
  flipcount = 0;
  score.innerHTML = 0;
  Muziek.currentTime = 0; Muziek.play();
}



kaarten.forEach((kaart) => kaart.addEventListener("click", flipkaart));
button.addEventListener("click", shuffle);


/*
if (kaart2 === kaart1) {
    
} else if (condition) {
    
}
*/
