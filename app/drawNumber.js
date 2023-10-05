const smallerValue = 1;
const biggerValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * biggerValue + 1);
}

const elementSmallerValue = document.getElementById('smallerNumber')
elementSmallerValue.innerHTML = smallerValue;

const elementBiggerValue = document.getElementById('biggerNumber')
elementBiggerValue.innerHTML = biggerValue;