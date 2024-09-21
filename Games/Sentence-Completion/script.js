const questions = [
    {
        sentence: "She __ to the store yesterday.",
        options: ["goes", "went", "gone"],
        correctAnswer: "went"
    },
    {
        sentence: "I usually go to the gym __ the morning.",
        options: ["in", "on", "at"],
        correctAnswer: "in"
    },
    {
        sentence: "He has __ his homework already.",
        options: ["did", "done", "does"],
        correctAnswer: "done"
    },
    {
        sentence: "They __ watching a movie at the moment.",
        options: ["are", "is", "were"],
        correctAnswer: "are"
    },
    {
        sentence: "He __ his homework before dinner.",
        options: ["finished", "finish", "finishing"],
        correctAnswer: "finished"
    },
    {
        sentence: "The dog __ happily in the park.",
        options: ["runs", "run", "running"],
        correctAnswer: "runs"
    },
    {
        sentence: "I __ never been to that restaurant before.",
        options: ["have", "has", "had"],
        correctAnswer: "have"
    },
    {
        sentence: "We __ to the beach every summer.",
        options: ["go", "goes", "going"],
        correctAnswer: "go"
    },
    {
        sentence: "She __ a beautiful dress to the party last night.",
        options: ["wore", "wear", "wearing"],
        correctAnswer: "wore"
    },
    {
        sentence: "The children_____ a new game in the backyard.",
        options: ["played", "play", "playing"],
        correctAnswer: "played"
    },
    {
        sentence: "He _______ about the meeting this morning.",
        options: ["forgot", "forget", "forgetting"],
        correctAnswer: "forgot"
    },
    {
        sentence: "She _______ her friends at the café every weekend.",
        options: ["meets", "meet", "meeting"],
        correctAnswer: "meets"
    },
    {
        sentence: "By the time we ________, the movie will have ended.",
        options: ["reach","will reach","reached"],
        correctAnswer: "reach"
    },
    {
        sentence: "The teacher made the boy ___________his lesson.",
        options: ["learn","to learn", "that"],
        correctAnswer: "learn"
    },
    {
        sentence: "The children ______ to school by their parents.",
        options: ["were taken","have been taking","are taken"],
        correctAnswer: "were taken"
    },
    {
        sentence: "If she ______ harder, she would pass the exam.",
        options: ["study","studied","studies"],
        correctAnswer: "studied"
    },
    {
        sentence: "The book ______ by the time you arrive.",
        options: ["will have finished","will be finished","will have been finished"],
        correctAnswer: "will have been finished"
    },
    {
        sentence: "I ______ English for five years now.",
        options: ["study","am studying","have been studying"],
        correctAnswer: "have been studying"
    },
    {
        sentence: "By next year, she ______ her degree.",
        options: ["will complete","will have completed","completed"],
        correctAnswer: "will have completed"
    },
    {
        sentence: "They ______ in this city since 2010.",
        options: ["live","have lived","lived"],
        correctAnswer: "have lived"
    },
        {
            sentence: "They ______ in this city since 2010.",
            options: ["live", "have lived", "lived"],
            correctAnswer: "have lived"
        },
        {
            sentence: "He ______ to the market yesterday.",
            options: ["goes", "went", "gone"],
            correctAnswer: "went"
        },
        {
            sentence: "She ______ an amazing singer.",
            options: ["is", "are", "was"],
            correctAnswer: "is"
        },
        {
            sentence: "I ______ my homework by the time you arrived.",
            options: ["finished", "had finished", "will finish"],
            correctAnswer: "had finished"
        },
        {
            sentence: "They ______ their tickets yet.",
            options: ["didn't buy", "haven't bought", "won't buy"],
            correctAnswer: "haven't bought"
        },
        {
            sentence: "By next year, we ______ in this house for 10 years.",
            options: ["will live", "will have lived", "live"],
            correctAnswer: "will have lived"
        },
        {
            sentence: "If I ______ you, I would take that job.",
            options: ["am", "were", "was"],
            correctAnswer: "were"
        },
        {
            sentence: "The cake ______ by the time I got home.",
            options: ["was eaten", "had been eaten", "is eaten"],
            correctAnswer: "had been eaten"
        },
        {
            sentence: "I ______ English for five years.",
            options: ["study", "have been studying", "studied"],
            correctAnswer: "have been studying"
        },
        {
            sentence: "She ______ a lot of money last year.",
            options: ["earns", "earned", "has earned"],
            correctAnswer: "earned"
        },
        {
            sentence: "We ______ the movie before.",
            options: ["saw", "have seen", "seen"],
            correctAnswer: "have seen"
        },
        {
            sentence: "You ______ to finish your work on time.",
            options: ["should", "must", "can"],
            correctAnswer: "must"
        },
        {
            sentence: "They ______ dinner when the phone rang.",
            options: ["were having", "have", "had"],
            correctAnswer: "were having"
        },
        {
            sentence: "The letter ______ last night.",
            options: ["was written", "had written", "wrote"],
            correctAnswer: "was written"
        },
        {
            sentence: "I ______ to Paris three times.",
            options: ["have been", "was", "went"],
            correctAnswer: "have been"
        },
        {
            sentence: "They ______ the project before the deadline.",
            options: ["will complete", "complete", "completed"],
            correctAnswer: "will complete"
        },
        {
            sentence: "She ______ already eaten breakfast when I arrived.",
            options: ["had", "has", "was"],
            correctAnswer: "had"
        },
        {
            sentence: "He ______ to the office every day.",
            options: ["walks", "walked", "is walking"],
            correctAnswer: "walks"
        },
        {
            sentence: "I ______ the answer right now.",
            options: ["don't know", "haven't known", "didn't know"],
            correctAnswer: "don't know"
        },
        {
            sentence: "We ______ to the beach last weekend.",
            options: ["go", "went", "are going"],
            correctAnswer: "went"
        },
        {
            sentence: "If it ______, we will stay inside.",
            options: ["rains", "rain", "rained"],
            correctAnswer: "rains"
        },
        {
            sentence: "They ______ TV when I called.",
            options: ["were watching", "watched", "are watching"],
            correctAnswer: "were watching"
        },
        {
            sentence: "She ______ when the alarm went off.",
            options: ["was sleeping", "slept", "is sleeping"],
            correctAnswer: "was sleeping"
        },
        {
            sentence: "He ______ from university two years ago.",
            options: ["graduated", "has graduated", "was graduating"],
            correctAnswer: "graduated"
        },
        {
            sentence: "I ______ for my keys all morning.",
            options: ["look", "have been looking", "looked"],
            correctAnswer: "have been looking"
        },
        {
            sentence: "They ______ dinner when we arrived.",
            options: ["are cooking", "were cooking", "cooked"],
            correctAnswer: "were cooking"
        },
        {
            sentence: "We ______ a lot of fun at the party.",
            options: ["had", "have", "were having"],
            correctAnswer: "had"
        },
        {
            sentence: "The train ______ before I reached the station.",
            options: ["had left", "leaves", "is leaving"],
            correctAnswer: "had left"
        },
        {
            sentence: "He ______ the guitar since he was a child.",
            options: ["plays", "has played", "played"],
            correctAnswer: "has played"
        },
        {
            sentence: "She ______ here since last month.",
            options: ["works", "has worked", "is working"],
            correctAnswer: "has worked"
        },
        {
            sentence: "I ______ a book when he called.",
            options: ["was reading", "read", "am reading"],
            correctAnswer: "was reading"
        },
        {
            sentence: "The letter ______ sent yesterday.",
            options: ["was", "is", "had been"],
            correctAnswer: "was"
        },
        {
            sentence: "I ______ the movie before.",
            options: ["haven't seen", "didn't see", "don't see"],
            correctAnswer: "haven't seen"
        },
        {
            sentence: "She ______ all her exams last week.",
            options: ["passed", "passes", "has passed"],
            correctAnswer: "passed"
        },
        {
            sentence: "We ______ in New York for five years.",
            options: ["lived", "have lived", "are living"],
            correctAnswer: "have lived"
        },
        {
            sentence: "He ______ for the train when it started to rain.",
            options: ["was waiting", "waits", "waited"],
            correctAnswer: "was waiting"
        },
        {
            sentence: "They ______ here by tomorrow.",
            options: ["will arrive", "arrive", "arrived"],
            correctAnswer: "will arrive"
        },
        {
            sentence: "If I ______ the lottery, I would buy a car.",
            options: ["win", "won", "had won"],
            correctAnswer: "won"
        },
        {
            sentence: "She ______ as a teacher for ten years.",
            options: ["has worked", "worked", "works"],
            correctAnswer: "has worked"
        },
        {
            sentence: "They ______ the house before we arrived.",
            options: ["had cleaned", "cleaned", "clean"],
            correctAnswer: "had cleaned"
        },
        {
            sentence: "We ______ the meeting tomorrow at 9 AM.",
            options: ["have", "are having", "had"],
            correctAnswer: "are having"
        },
        {
            sentence: "I ______ this car for two years.",
            options: ["have owned", "owned", "own"],
            correctAnswer: "have owned"
        },
        {
            sentence: "He ______ home after the party.",
            options: ["went", "has gone", "was going"],
            correctAnswer: "went"
        },
        {
            sentence: "They ______ the package yesterday.",
            options: ["received", "receive", "have received"],
            correctAnswer: "received"
        },
        {
            sentence: "We ______ dinner by 7 PM.",
            options: ["will have eaten", "eat", "will eat"],
            correctAnswer: "will have eaten"
        },
        {
            sentence: "She ______ when the teacher asked her a question.",
            options: ["was daydreaming", "daydreamed", "is daydreaming"],
            correctAnswer: "was daydreaming"
        },
        {
            sentence: "I ______ to him before he moved away.",
            options: ["haven't spoken", "didn't speak", "wasn't speaking"],
            correctAnswer: "didn't speak"
        },
        {
            sentence: "We ______ in this office for three years.",
            options: ["worked", "have worked", "work"],
            correctAnswer: "have worked"
        },
        {
            sentence: "By the time we get there, they ______ already.",
            options: ["will have left", "left", "leave"],
            correctAnswer: "will have left"
        },
        {
            sentence: "I ______ the news just now.",
            options: ["heard", "have heard", "am hearing"],
            correctAnswer: "heard"
        },
        {
            sentence: "They ______ the project by the end of the week.",
            options: ["will finish", "finished", "will have finished"],
            correctAnswer: "will have finished"
        },
        {
            sentence: "The report ______ before the meeting started.",
            options: ["was submitted", "submitted", "is submitting"],
            correctAnswer: "was submitted"
        },
        {
            sentence: "I ______ the piano since I was six.",
            options: ["have played", "played", "am playing"],
            correctAnswer: "have played"
        },
        {
            sentence: "They ______ to the park every Sunday.",
            options: ["go", "went", "are going"],
            correctAnswer: "go"
        },
        {
            sentence: "The cake ______ by the time the guests arrived.",
            options: ["had been baked", "was baked", "bakes"],
            correctAnswer: "had been baked"
        },
        {
            sentence: "She ______ in the office when I called her.",
            options: ["was working", "worked", "works"],
            correctAnswer: "was working"
        },
        {
            sentence: "We ______ out last night.",
            options: ["went", "have gone", "go"],
            correctAnswer: "went"
        },
        {
            sentence: "I ______ the report by tomorrow morning.",
            options: ["will finish", "finished", "finish"],
            correctAnswer: "will finish"
        },
        {
            sentence: "The presentation ______ before we arrived.",
            options: ["had started", "started", "is starting"],
            correctAnswer: "had started"
        },
        {
            sentence: "She ______ at the bus stop when I saw her.",
            options: ["was standing", "stood", "is standing"],
            correctAnswer: "was standing"
        },
        {
            sentence: "They ______ this house for two years.",
            options: ["have owned", "owned", "are owning"],
            correctAnswer: "have owned"
        },
        {
            sentence: "By the time we get there, the movie ______.",
            options: ["will have started", "started", "starts"],
            correctAnswer: "will have started"
        },
        {
            sentence: "He ______ before the teacher arrived.",
            options: ["had left", "left", "was leaving"],
            correctAnswer: "had left"
        },
        {
            sentence: "We ______ the concert tickets last week.",
            options: ["bought", "have bought", "are buying"],
            correctAnswer: "bought"
        },
        {
            sentence: "They ______ already by the time we got there.",
            options: ["had eaten", "ate", "eat"],
            correctAnswer: "had eaten"
        },
        {
            sentence: "I ______ a letter to her last month.",
            options: ["sent", "have sent", "send"],
            correctAnswer: "sent"
        },
        {
            sentence: "She ______ dinner when I arrived.",
            options: ["was cooking", "cooked", "cooks"],
            correctAnswer: "was cooking"
        },
        {
            sentence: "We ______ a lot of fun at the party last night.",
            options: ["had", "have", "are having"],
            correctAnswer: "had"
        },
        {
            sentence: "He ______ for the bus when it started raining.",
            options: ["was waiting", "waited", "is waiting"],
            correctAnswer: "was waiting"
        },
        {
            sentence: "The book ______ on the table.",
            options: ["is", "was", "has been"],
            correctAnswer: "was"
        },
        {
            sentence: "They ______ a great job on the project.",
            options: ["did", "do", "have done"],
            correctAnswer: "did"
        },
        {
            sentence: "I ______ her yesterday at the store.",
            options: ["saw", "have seen", "see"],
            correctAnswer: "saw"
        },
        {
            sentence: "He ______ to London last week.",
            options: ["went", "has gone", "goes"],
            correctAnswer: "went"
        },
        {
            sentence: "By the time I wake up, he ______ already.",
            options: ["will have left", "leaves", "left"],
            correctAnswer: "will have left"
        },
        {
            sentence: "She ______ a letter when I arrived.",
            options: ["was writing", "wrote", "is writing"],
            correctAnswer: "was writing"
        },
        {
            sentence: "We ______ to the concert yesterday.",
            options: ["went", "have gone", "go"],
            correctAnswer: "went"
        },
    
    
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load a new set of 8 random questions
function loadRandomQuestions() {
    const shuffledQuestions = shuffleArray([...questions]);  // Shuffle questions
    selectedQuestions = shuffledQuestions.slice(0, 10);  // Pick first 10 shuffled questions
    currentQuestionIndex = 0;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadRandomQuestions);

function loadQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = question.sentence;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(selectedOption) {
    const question = selectedQuestions[currentQuestionIndex];
    const resultDiv = document.getElementById("result");

    if (selectedOption === question.correctAnswer) {
        resultDiv.textContent = "Correct!";
        resultDiv.className = "correct";
        score++;
    } else {
        resultDiv.textContent = `Incorrect! The correct answer is "${question.correctAnswer}".`;
        resultDiv.className = "incorrect";
    }

    document.querySelectorAll(".option").forEach(button => button.disabled = true);
    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = `<h2>Your Score: ${score}/${selectedQuestions.length}</h2>`;
        document.getElementById("next-question").style.display = "none";
    }
}

function resetGame() {
    // Reset the score and the game state
    score = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("question-container").innerHTML = `
        <p id="question"></p>
        <div id="options"></div>
        <div id="result"></div>
    `;
    document.getElementById("next-question").style.display = "none";
    
    // Reload new random questions
    loadRandomQuestions();
}
