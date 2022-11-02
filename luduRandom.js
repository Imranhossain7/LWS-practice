

function luduRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(luduRandom(1,6));
