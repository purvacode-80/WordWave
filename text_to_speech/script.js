// Text to Speech
function textToSpeech() {
    const text = document.getElementById("textInput").value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = 1;
    speech.volume = 1;
    speechSynthesis.speak(speech);
}

// Speech to Text
function startSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("outputText").textContent = transcript;
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onerror = function(event) {
        console.error("Error occurred in recognition: " + event.error);
    };
}
