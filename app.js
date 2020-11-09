let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const inputNumberOfDice = document.querySelector("#inputNumberOfDice");
const inputNumberOfSides = document.querySelector("#inputNumberOfSides");
const inputBonusThreshold = document.querySelector("#inputBonusThreshold");
const inputBonus = document.querySelector("#inputBonus");

let numberOfDiceGlobal = 3;
let numberOfSidesGlobal = 8;
let bonusThresholdGlobal = 20;
let bonusGlobal = 50;

function rollDie(numberOfSides) {
    var rollResult = Math.floor(Math.random() * numberOfSides) + 1;
    //console.log("Rolled a " + rollResult.toString());
    return rollResult;
}

function rollDice(numberOfDice, numberOfSides) {
    diceArray = [];

    //console.log("Starting dice rolls");
    for (var x = 0; x < numberOfDice; x++) {
        var rollResult = rollDie(numberOfSides);
        diceArray.push(rollResult);
    }

    return diceArray;
}

function getPlayerResult() {
    //console.log("Rolling " + numberOfDiceGlobal.toString() + " " + numberOfSidesGlobal.toString() + "-sided dice");
    let diceResult = rollDice(numberOfDiceGlobal, numberOfSidesGlobal);

    var score = diceResult.reduce(function(a, b) { return a + b; }, 0);

    if (score >= bonusThresholdGlobal) {
        score += bonusGlobal;
    }

    let playerResult = [...diceResult, score];
    //console.log("Player result is:");
    //console.log(playerResult);

    return playerResult;
}

function getPlayerScore() {
    var result = getPlayerResult();
    //console.log("Result:");
    //console.log(result);
    return result[result.length - 1];
}

p1Button.addEventListener('click', function() {
    player1.innerHTML = "Player 1 scored " + getPlayerScore();
});

p2Button.addEventListener('click', function(event) {
    player2.innerHTML = "Player 2 scored " + getPlayerScore();
});

inputNumberOfDice.addEventListener('change', function() {
    numberOfDiceGlobal = parseInt(inputNumberOfDice.value);
});

inputNumberOfSides.addEventListener('change', function() {
    numberOfSidesGlobal = parseInt(inputNumberOfSides.value);
});

inputBonusThreshold.addEventListener('change', function() {
    bonusThresholdGlobal = parseInt(inputBonusThreshold.value);
});

inputBonus.addEventListener('change', function() {
    bonusGlobal = parseInt(inputBonus.value);
});
