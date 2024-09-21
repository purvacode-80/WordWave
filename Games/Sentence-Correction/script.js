const sentences = [
    { incorrect: "She go to school every day.", correct: "She goes to school every day." },
    { incorrect: "I can plays the guitar.", correct: "I can play the guitar." },
    { incorrect: "He go to school everyday.", correct: "He goes to school every day." },
    { incorrect: "They is playing outside.", correct: "They are playing outside." },
    { incorrect: "I would had gone if I had known.", correct: "I would have gone if I had known." },
    { incorrect: "The committee have made a decision.", correct: "The committee has made a decision." },
    { incorrect: "She acts like she knew the answer. ", correct: "She acts as though she knew the answer." },
    { incorrect: "If he had known, he would have come earlier.", correct: "Had he known, he would have come earlier. " },
    { incorrect: "Finished the assignment, she went to bed.", correct: "Having finished the assignment, she went to bed." },
    { incorrect: "The report need to be completed by tomorrow.", correct: "The report needs to be completed by tomorrow." },
    { incorrect: "Was it not for the rain, we would go. ", correct: "Were it not for the rain, we would go." },
    { incorrect: "She were here yesterday.", correct: "She was here yesterday." },
    { incorrect: "I has eaten breakfast.", correct: "I have eaten breakfast." },
    { incorrect: "They was at the park.", correct: "They were at the park." },
    { incorrect: "She don't like coffee.", correct: " She doesn't like coffee." },
    { incorrect: "If I was you, I would go.", correct: " If I were you, I would go." },
];

let currentSentenceIndex = 0;

function loadSentence() {
    const sentence = sentences[currentSentenceIndex].incorrect;
    document.getElementById('sentence').textContent = sentence;
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('correct-answer').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-input').value.trim();
    const correctAnswer = sentences[currentSentenceIndex].correct;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').className = 'correct';
    } else {
        document.getElementById('feedback').textContent = "Incorrect, try again.";
        document.getElementById('feedback').className = '';
        document.getElementById('correct-answer').textContent = `The correct sentence is: "${correctAnswer}"`;
    }
}

function nextSentence() {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    loadSentence();
}

window.onload = loadSentence;
