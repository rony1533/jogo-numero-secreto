var accurate = false;

function verificationIfAnswerHaveValidValue(answer) {
    const number = +answer;

    if (answerForInvalid(number)) {
        elementAnswer.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numberGreaterThanAllowed() && numberLessThanAllowed()) {
        elementAnswer.innerHTML += `valor inválido: Fale um número entre ${smallerValue} e ${biggerValue}`;
        return;
    }

    if (number == secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id="playAgain" class="btn-play">Jogar novamente</button>
        `;
        accurate = true;

    } else if (number > secretNumber) {
        elementAnswer.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-square-caret-down"></i></div>
        `;
    } else {
        elementAnswer.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-square-caret-up"></i></div>
        `;
    }

}
function answerForInvalid(number) {
    return Number.isNaN(number);
}

function numberGreaterThanAllowed(number) {
    return number > biggerValue;
}

function numberLessThanAllowed(number) {
    return number < smallerValue;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'playAgain') {
        window.location.reload();
    }
})