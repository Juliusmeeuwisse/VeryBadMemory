var list = document.querySelector(".memory-container");
var plaatjesArray = ["images/whale.svg", "images/hammerhead.svg", "images/stingray.svg", "images/shark.svg", "images/Octopus.svg", "images/orca.svg"];

button = document.querySelector(".shuffle");
function shuffle(items) {
  let cached = items.slice(0);
  let temp, i = cached.length, rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = cached[rand];
    cached[rand] = cached[i];
    cached[i] = temp;
  }
  return cached;
}
function shuffleNodes() {
  const nodeList = Array.from(list.children);
  const shuffledNodes = shuffle(nodeList);
  
  for (let i = 0; i < shuffledNodes.length; i++) {
    list.appendChild(shuffledNodes[i]);
  }
}
button.onclick = shuffleNodes;
