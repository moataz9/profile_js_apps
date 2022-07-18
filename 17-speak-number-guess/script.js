const msgEl = document.getElementById('msg')
const rulesEl = document.getElementById('rules')
const detailsEl = document.getElementById('details')

const randomNum = getRandomNumber()

console.log('Number:', randomNum)

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (window.SpeechRecognition) {
  let recognition = new window.SpeechRecognition()
  // Start recognition and game
  recognition.start()

  // Speak result
  recognition.addEventListener('result', onSpeak)

  // End SR service
  recognition.addEventListener('end', () => recognition.start())

  document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
      window.location.reload()
    }
  })
} else {
  rulesEl.innerHTML = `<div>Sorry, your browser doesn't support our game</div>`
  detailsEl.innerHTML = `<p> try open it in chrome browser </p>`
}

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript

  writeMessage(msg)
  checkNumber(msg)
}

// Write what user speaks
function writeMessage(msg) {
  msgEl.innerHTML = /* html */ `
    <div>You said: </div>
    <span class="box">${msg}</span>
  `
}

// Check msg against number
function checkNumber(msg) {
  const num = +msg

  // Check if valid number
  if (Number.isNaN(num)) {
    msgEl.innerHTML += /* html */ `<div>That is not a valid number</div>`
    return
  }

  // Check in range
  if (num > 100 || num < 1) {
    msgEl.innerHTML += /* html */ `<div>Number must be between 1 and 100</div>`
    return
  }

  // Check number
  if (num === randomNum) {
    document.body.innerHTML = /* html */ `
      <h2>Congrats! You have guessed the number! <br><br>
      It was ${num}</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `
  } else if (num > randomNum) {
    msgEl.innerHTML += /* html */ `<div>GO LOWER</div>`
  } else {
    msgEl.innerHTML += /* html */ `<div>GO HIGHER</div>`
  }
}

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}
