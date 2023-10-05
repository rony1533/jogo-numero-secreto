const elementAnswer = document.getElementById('answer');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  answer = event.results[0][0].transcript;
  showAnswerOnScreen(answer);
  verificationIfAnswerHaveValidValue(answer);
}

function showAnswerOnScreen(answer) {
  elementAnswer.innerHTML = `
    <div>Você disse</div>
    <span class="box">${answer}</span>
  `
}

recognition.addEventListener('end', () => recognition.start());