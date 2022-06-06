// let numberEl = document.getElementById("number").onclick();
let length = document.getElementById("results-conversion-text-length");
let volume = document.getElementById("results-conversion-text-volume");
let mass = document.getElementById("results-conversion-text-mass");
// console.log(numberEl);

function convertLength(valNum) {
  let lengthConversionRatio = 0.3048; // the number of feet in a meter
  let meters2feet = valNum / lengthConversionRatio;
  let feet2meters = valNum * lengthConversionRatio;
  length.textContent =
    valNum +
    " meters = " +
    meters2feet.toFixed(3) +
    " feet | " +
    valNum +
    " feet = " +
    feet2meters.toFixed(3) +
    " meters";
}

function convertVolume(valNum) {
  let volumeConversionRatio = 3.785411784; // the number of liters in a US gallon
  let liters2Gal = valNum / volumeConversionRatio;
  let gal2Liters = valNum * volumeConversionRatio;
  volume.textContent =
    valNum +
    " liters = " +
    liters2Gal.toFixed(3) +
    " gallons | " +
    valNum +
    " gallons = " +
    gal2Liters.toFixed(3) +
    " liters";
}

function convertMass(valNum) {
  let massConversionRatio = 0.45359237; // the number of kilograms in a pound
  let kilos2pounds = valNum / massConversionRatio;
  let pounds2kilos = valNum * massConversionRatio;
  mass.textContent =
    valNum +
    " kilos = " +
    kilos2pounds.toFixed(3) +
    " pounds | " +
    valNum +
    " pounds = " +
    pounds2kilos.toFixed(3) +
    " liters";
}
function convert() {
  valNum = document.getElementById("number").value;
  convertLength(valNum);
  convertVolume(valNum);
  convertMass(valNum);
}
