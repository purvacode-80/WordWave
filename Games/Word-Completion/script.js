let words = ['AROUND', 'ALONG', 'OUTSIDE', 'SCISSORS', 'SOFTWARE','GERANIUM','SQUIRREL','CARNATION','WITHOUT','TOWARDS',
    'DURING','INSIDE','SILENT','SUGGEST','CHOOSE','BEYOND','OPPOSITE','AGAINST',
];

let currentWordIndex = 0;

function loadWord() {
    const wordContainer = document.getElementById('word');
    const currentWord = words[currentWordIndex];
    const blankIndices = generateBlankIndices(currentWord.length);

    // Clear existing word display
    wordContainer.innerHTML = '';

    // Dynamically create the word display with blanks
    for (let i = 0; i < currentWord.length; i++) {
        if (blankIndices.includes(i)) {
            // Create a blank (contenteditable span)
            let blank = document.createElement('span');
            blank.classList.add('underline');
            blank.contentEditable = true;
            blank.setAttribute('data-index', i); // Store index to check answer later

            // Ensure input is always uppercase
            blank.addEventListener('input', function() {
                this.textContent = this.textContent.toUpperCase();
                if (this.textContent.length > 1) {
                    this.textContent = this.textContent.slice(0, 1); // Limit input to 1 character
                }
            });

            wordContainer.appendChild(blank);
        } else {
            // Display the fixed letter
            let letter = document.createElement('span');
            letter.classList.add('letter');
            letter.textContent = currentWord[i];
            wordContainer.appendChild(letter);
        }
    }

    // Clear previous results
    document.getElementById('result').textContent = '';
    document.getElementById('correct-word').textContent = '';
}

function generateBlankIndices(wordLength) {
    // Generate 3-4 random positions for blanks, depending on word length
    const numBlanks = Math.min(4, Math.floor(wordLength / 2)); // Limit to max 4 blanks
    const blankIndices = new Set();

    while (blankIndices.size < numBlanks) {
        const randomIndex = Math.floor(Math.random() * wordLength);
        blankIndices.add(randomIndex);
    }

    return Array.from(blankIndices);
}

function checkAnswer() {
    const wordContainer = document.getElementById('word');
    const currentWord = words[currentWordIndex];
    const result = document.getElementById('result');
    const correctWordDisplay = document.getElementById('correct-word');
    
    let isCorrect = true;

    // Loop through blanks and compare user input with correct letters
    wordContainer.querySelectorAll('.underline').forEach(blank => {
        const index = blank.getAttribute('data-index');
        const userAnswer = blank.textContent.toUpperCase(); // Compare in uppercase
        if (userAnswer !== currentWord[index]) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        result.textContent = `Correct! The word is "${currentWord}".`;
        result.style.color = 'green';
        correctWordDisplay.textContent = '';
    } else {
        result.textContent = 'Incorrect!';
        result.style.color = 'red';
        correctWordDisplay.textContent = `The correct word is "${currentWord}".`;
        correctWordDisplay.style.color = 'green';  // Display correct word in green
        correctWordDisplay.style.fontWeight = 'bold';  // Make it bold
    }
}

function resetGame() {
    currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through words
    loadWord();
}

// Load the first word on page load
window.onload = loadWord;
