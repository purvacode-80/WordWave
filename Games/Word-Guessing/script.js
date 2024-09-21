const wordList = [
    { word: "neuroethology", hint: "Study of animal brains and behavior." },
    { word: "appreciate", hint: "To recognize the full worth of something or someone." },
    { word: "astrochemistry", hint: "Study of the chemical elements in space" },
    { word: "effort", hint: "The exertion of physical or mental energy to achieve something." },
    { word: "bioinformatics", hint: "Technology applied to biology" },
    { word: "routine", hint: "A sequence of actions regularly followed." },
    { word: "epigenetics", hint: "BrigChanges in gene expression" },
    { word: "conversation", hint: "The informal exchange of thoughts, ideas, or feelings." },
    { word: "philosophy", hint: "Study of fundamental knowledge" },
    { word: "necessary", hint: "Required to be done, achieved, or present; essential." },
    { word: "neuroscience", hint: "Study of the nervous system" },
    { word: "manage", hint: "To handle or control something successfully." },
    { word: "photosynthesis", hint: "Process in plants converting light to energy" },
    { word: "relax", hint: "To become less tense or anxious." },
    { word: "thermodynamics", hint: "Study of heat and energy transfer" },
    { word: "schedule", hint: " A plan that gives details of when things will happen." },
    { word: "cryptography", hint: "Art of writing or solving codes" },
    { word: "priority", hint: "Something that is regarded as more important than others." },
    { word: "electromagnetism", hint: "Study of electric and magnetic fields" },
    { word: "neuroplasticity", hint: "Brain's ability to reorganize itself" },
    { word: "growth", hint: "The process of developing physically, mentally, or spiritually." },
    { word: "cryptanalysis", hint: "Breaking of cryptographic systems" },
    { word: "respect", hint: "A feeling of deep admiration for someone or something due to their qualities or achievements." },
    { word: "convenient", hint: "Fitting well with one’s needs or plans; easy to use." },
];

let chosenWord, maxGuesses, remainingGuesses, correctLetters, wrongLetters;

const hintElement = document.getElementById("hint");
const remainingElement = document.getElementById("remaining");
const wrongLettersElement = document.getElementById("wrong-letters");
const wordContainerElement = document.getElementById("word-container");
const letterInputElement = document.getElementById("letter-input");
const resetBtnElement = document.getElementById("reset-btn");

function initGame() {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    chosenWord = randomWord.word;
    maxGuesses = chosenWord.length + 2;
    remainingGuesses = maxGuesses;
    correctLetters = [];
    wrongLetters = [];

    hintElement.innerText = randomWord.hint;
    remainingElement.innerText = remainingGuesses;
    wrongLettersElement.innerText = "";
    wordContainerElement.innerHTML = "";

    chosenWord.split("").forEach(() => {
        const letterElement = document.createElement("span");
        letterElement.classList.add("word-letter");
        wordContainerElement.appendChild(letterElement);
    });
}

function handleGuess() {
    const guess = letterInputElement.value.toLowerCase();
    letterInputElement.value = "";

    if (guess && !wrongLetters.includes(guess) && !correctLetters.includes(guess)) {
        if (chosenWord.includes(guess)) {
            correctLetters.push(guess);
            updateWordContainer();
        } else {
            wrongLetters.push(guess);
            remainingGuesses--;
            wrongLettersElement.innerText = wrongLetters.join(", ");
            remainingElement.innerText = remainingGuesses;
        }
    }

    checkGameStatus();
}

function updateWordContainer() {
    const wordLetters = document.querySelectorAll(".word-letter");
    chosenWord.split("").forEach((letter, index) => {
        if (correctLetters.includes(letter)) {
            wordLetters[index].innerText = letter;
        }
    });
}

function checkGameStatus() {
    const wordLetters = document.querySelectorAll(".word-letter");
    const allLettersGuessed = [...wordLetters].every(
        (letterElement) => letterElement.innerText !== ""
    );

    if (allLettersGuessed) {
        alert(`Congratulations! You guessed the word: ${chosenWord.toUpperCase()}`);
        initGame();
    } else if (remainingGuesses <= 0) {
        alert(`Game over! The word was: ${chosenWord.toUpperCase()}`);
        initGame();
    }
}

resetBtnElement.addEventListener("click", initGame);
letterInputElement.addEventListener("input", handleGuess);

initGame();
