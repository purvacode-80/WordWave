const typingText = document.querySelector(".text-display p"),
    inpField = document.querySelector(".input-field"),
    timeLeftSpan = document.getElementById("time-left"),
    mistakesSpan = document.getElementById("mistakes"),
    wpmSpan = document.getElementById("wpm"),
    cpmSpan = document.getElementById("cpm"),
    restartBtn = document.getElementById("restart-btn");

let paragraphs = [
    "Once upon a time, in a small town, a little girl named Mia found a tiny kitten hiding under a bush. The kitten was frightened and alone. Mia decided to take the kitten home. She fed it, gave it a warm bed, and named it Whiskers. Over time, Whiskers grew to be a happy, playful cat. Mia and Whiskers became best friends. The story teaches vocabulary related to animals, emotions, and actions.",
    "Tom was a friendly man who lived next door to an elderly woman named Mrs. Brown. One day, Tom noticed Mrs. Brown struggling with her grocery bags. Without hesitation, he went over to help her. He carried the bags into her house and even helped her unpack. Mrs. Brown was very grateful and invited Tom to tea. They became good friends, and Tom learned the importance of kindness and community. This story introduces words related to kindness, community, and daily activities.",
    "Emma had always lived in the same neighborhood and knew everyone around. One day, a new family moved into the house next door. Emma was curious about them and decided to introduce herself. She brought cookies and a friendly smile. The new neighbors were warm and welcoming, and they soon became good friends. This story teaches vocabulary related to introductions, friendliness, and community.",
    "Jake found a strange pen on his way home from school. When he started writing with it, he realized that everything he wrote became real! He wrote about a beautiful park, and suddenly, he was standing in the middle of it. Jake soon understood the responsibility of his magical pen and used it wisely. He learned that magic is not just about fun but also about making good choices. This story introduces vocabulary related to magic, responsibility, and imagination."
];

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = 0,
    mistakes = 0,
    isTyping = false;

function loadParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[randomIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function startTyping() {
    const characters = typingText.querySelectorAll("span");
    const typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(countdown, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmSpan.innerText = wpm;
        mistakesSpan.innerText = mistakes;
        cpmSpan.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftSpan.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeLeftSpan.innerText = timeLeft;
    wpmSpan.innerText = 0;
    mistakesSpan.innerText = 0;
    cpmSpan.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", startTyping);
restartBtn.addEventListener("click", resetGame);
