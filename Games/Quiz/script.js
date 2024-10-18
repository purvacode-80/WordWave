const quizData = [
        {
          question: 'Which of the following is a proper noun?',
          options: ['dog','city','London','river'],
          answer: 'London',
        },
        {
          question: 'Identify the abstract noun in the following sentence: "Her happiness was evident to everyone."',
          options: ['Her','happiness','evident','everyone'],
          answer: 'happiness',
        },
       {
          question: 'Which of the following sentences contains a reflexive pronoun?',
          options: ['He himself built the house.','She loves her cat.','They went to the park.','It was a sunny day.'],
          answer: 'He himself built the house.',
        },
        {
          question: 'Select the correct pronoun to complete the sentence: "Neither of the boys did ______ homework."',
          options: ['their','his','her','its'],
          answer: 'his',
        },
        {
          question: 'Which of the following sentences uses a comparative adjective?',
          options: [
            'She is the tallest girl in the class.',
            'This cake is sweeter than that one.',
            'He is a good singer.',
            'The room is very bright.',
          ],
          answer: 'This cake is sweeter than that one.',
        },
        {
          question: 'Choose the correct adjective: "She bought a _______ dress for the party."',
          options: ['beautifully','beautiful','beauty','beautify',],
          answer: 'beautiful',
        },
        {
          question: 'Which of the following sentences contains an irregular verb?',
          options: [
            'She walked to the store.',
            'He runs every morning.',
            'They went to the cinema yesterday.',
            'We listened to music.',
          ],
          answer: 'They went to the cinema yesterday.',
        },
        {
          question: 'Identify the verb in the following sentence: "The dog barked loudly at the stranger."',
          options: [ 'dog','barked','loudly','stranger',],
          answer: 'barked',
        },
        {
          question: 'Which sentence uses an adverb correctly?',
          options: [
            'She sings beautiful.',
            'He quickly ran to the store.',
            'They are very hungry.',
            'I work hardly.',
          ],
          answer: 'He quickly ran to the store.',
        },
        {
          question: 'What type of adverb is used in the sentence: "She will arrive soon"?',
          options: ['Adverb of time',
                    'Adverb of place',
                    'Adverb of manner',
                    'Adverb of frequency',],
          answer: 'Adverb of time',
        },
        {
          question: 'Identify the conjunction in the following sentence: "She wanted to go to the movie, but she had no money."',
          options: ['wanted','to','but','she',],
          answer: 'but',
        },
        {
          question: 'Which of the following is a subordinating conjunction?',
          options: ['and','or','but','although', ],
          answer: 'although',
        },
        {
          question: 'Choose the correct article: "She is _____ honest person."',
          options: ['a','an','the','no article needed'],
          answer: 'an',
        },
        {
          question: 'Which sentence uses the definite article correctly?',
          options: [ 'She is the teacher in my class.',
                     'I want an apple from the bowl.',
                     'The sun is shining brightly.',
                    'I read a book about the universe.', ],
          answer: 'The sun is shining brightly.',
        },
        {
          question: 'Which sentence uses a preposition correctly?',
          options: ['He jumped in the pool.',
                    'She is afraid from spiders.',
                    'I went at home.',
                    'They arrived to the airport.', ],
          answer: 'He jumped in the pool.',
        },
        {
          question: 'Identify the preposition in the following sentence: "The cat is under the table."',
          options: [ 'is',
                      'under',
                      'the',
                      'table',],
          answer: 'under',
        },
        {
          question: 'Which of the following sentences is punctuated correctly?',
          options: ['I went to the store, and I bought some milk.',
                    'She said "I love ice cream".',
                    'Where are you going.',
                    'The books, on the shelf are old.', ],
          answer: 'I went to the store, and I bought some milk.',
        },
        {
          question: ' Which punctuation mark is used to indicate possession?',
          options: [ 'comma',
                    'semicolon',
                    'apostrophe',
                    'colon',
             ],
          answer: 'apostrophe',
        },
        {
          question: 'Which of the following is an independent clause?',
          options: [ 'When she arrived',
                      'If it rains',
                      'Because I was tired',
                      'She danced all night',],
          answer: 'She danced all night',
        },
        {
          question: 'Identify the type of clause in the following sentence: "I will call you when I arrive."',
          options: ['Independent clause',
                    'Dependent clause',
                    'Adjective clause',
                    'Noun clause', ],
          answer: 'Dependent clause',
        },
        {
          question: ' What part of speech is the word "quickly" in the sentence "He runs quickly"?',
          options: [ 'Noun',
                      'Verb',
                      'Adverb',
                      'Adjective',],
          answer: 'Adverb',
        },
        {
          question: 'What part of speech is the word "happiness" in the sentence "Happiness is contagious"?',
          options: ['Noun',
                    'Verb',
                    'Adjective',
                    'Adverb', ],
          answer: 'Noun',
        },
        {
          question: 'Identify the tense used in the sentence: "She has been reading for an hour."',
          options: ['Present Simple',
                    'Present Continuous',
                    'Present Perfect',
                    'Present Perfect Continuous', ],
          answer: 'Present Perfect Continuous',
        },
        {
          question: 'Convert the sentence to past tense: "She eats an apple every day."',
          options: [ 'She will eat an apple every day.',
                      'She is eating an apple every day.',
                      'She ate an apple every day.',
                      'She has eaten an apple every day.',],
          answer: 'She ate an apple every day.',
        },
        {
          question: ' Which pair of words are homophones?',
          options: ['write, right',
                    'their, there',
                    'break, brake',
                    'All of the above', ],
          answer: 'All of the above',
        },
        {
          question: 'Choose the correct homophone: "I will _____ a letter to my friend."',
          options: [ 'right',
                      'write',
                      'rite',
                      'wright',],
          answer: 'write',
        },
        {
          question: ' Which word is a homonym?',
          options: ['bank (financial institution and river bank)',
                    'flower (plant)',
                    'table (piece of furniture)',
                    'cat (animal)',],
          answer: 'bank (financial institution and river bank)',
        },
        {
          question: 'What is a homonym for "bat"?',
          options: ['An animal',
                    'A sports equipment',
                    'Both a and b',
                    'Neither', ],
          answer: 'Both a and b',
        },
        {
          question: 'Which of the following words is a homograph?',
          options: ['lead (to go in front) and lead (a metal)',
                    'see and sea',
                    'flour and flower',
                    'night and knight',],
          answer: 'lead (to go in front) and lead (a metal)',
        },
        {
          question: 'Choose the homograph from the options:',
          options: ['close (near) and close (to shut)',
                    'no and know',
                    'sale and sail',
                    'buy and bye',],
          answer: 'close (near) and close (to shut)',
        },
          // Nouns
          {
            question: 'Which of the following is a proper noun?',
            options: ['dog', 'city', 'London', 'river'],
            answer: 'London'
          },
          {
            question: 'Which of the following is a common noun?',
            options: ['cat', 'New York', 'Sunday', 'Mount Everest'],
            answer: 'cat'
          },
          {
            question: 'Which of the following is a collective noun?',
            options: ['team', 'book', 'run', 'beautiful'],
            answer: 'team'
          },
          {
            question: 'Which of the following is a concrete noun?',
            options: ['dog', 'happiness', 'bravery', 'kindness'],
            answer: 'dog'
          },
          {
            question: 'Which of the following is an abstract noun?',
            options: ['love', 'tree', 'rock', 'phone'],
            answer: 'love'
          },
          {
            question: 'Which of the following is a plural noun?',
            options: ['cats', 'apple', 'foot', 'river'],
            answer: 'cats'
          },
          {
            question: 'Which of the following is a singular noun?',
            options: ['dog', 'apples', 'feet', 'rivers'],
            answer: 'dog'
          },
          {
            question: 'Which of the following is a countable noun?',
            options: ['apple', 'water', 'salt', 'sugar'],
            answer: 'apple'
          },
          {
            question: 'Which of the following is an uncountable noun?',
            options: ['water', 'book', 'pen', 'car'],
            answer: 'water'
          },
          
          // Pronouns
          {
            question: 'Which of the following is a personal pronoun?',
            options: ['he', 'book', 'John', 'city'],
            answer: 'he'
          },
          {
            question: 'Which of the following is a reflexive pronoun?',
            options: ['myself', 'dog', 'city', 'teacher'],
            answer: 'myself'
          },
          {
            question: 'Which of the following is a possessive pronoun?',
            options: ['mine', 'book', 'he', 'Paris'],
            answer: 'mine'
          },
          {
            question: 'Which of the following is a demonstrative pronoun?',
            options: ['this', 'house', 'run', 'fast'],
            answer: 'this'
          },
          {
            question: 'Which of the following is a relative pronoun?',
            options: ['who', 'dog', 'beautiful', 'run'],
            answer: 'who'
          },
          {
            question: 'Which of the following is an indefinite pronoun?',
            options: ['someone', 'tree', 'beautiful', 'fast'],
            answer: 'someone'
          },
          
          // Verbs
          {
            question: 'Which of the following is a regular verb?',
            options: ['played', 'ran', 'swam', 'sung'],
            answer: 'played'
          },
          {
            question: 'Which of the following is an irregular verb?',
            options: ['ran', 'jumped', 'walked', 'talked'],
            answer: 'ran'
          },
          {
            question: 'Which of the following is a transitive verb?',
            options: ['throw', 'arrive', 'go', 'sleep'],
            answer: 'throw'
          },
          {
            question: 'Which of the following is an intransitive verb?',
            options: ['arrive', 'take', 'bring', 'hit'],
            answer: 'arrive'
          },
          {
            question: 'Which of the following is a verb in past tense?',
            options: ['walked', 'run', 'swim', 'write'],
            answer: 'walked'
          },
          {
            question: 'Which of the following is a verb in present tense?',
            options: ['run', 'ran', 'jumped', 'walked'],
            answer: 'run'
          },
          {
            question: 'Which of the following is a verb in future tense?',
            options: ['will go', 'went', 'go', 'gone'],
            answer: 'will go'
          },
          
          // Adjectives
          {
            question: 'Which of the following is an adjective?',
            options: ['fast', 'run', 'city', 'river'],
            answer: 'fast'
          },
          {
            question: 'Which of the following is a comparative adjective?',
            options: ['bigger', 'big', 'run', 'quickly'],
            answer: 'bigger'
          },
          {
            question: 'Which of the following is a superlative adjective?',
            options: ['biggest', 'big', 'bigger', 'run'],
            answer: 'biggest'
          },
          {
            question: 'Which of the following is a descriptive adjective?',
            options: ['blue', 'run', 'quickly', 'happiness'],
            answer: 'blue'
          },
          {
            question: 'Which of the following is a demonstrative adjective?',
            options: ['this', 'quick', 'run', 'walk'],
            answer: 'this'
          },
          
          // Adverbs
          {
            question: 'Which of the following is an adverb of manner?',
            options: ['quickly', 'slow', 'happiness', 'tree'],
            answer: 'quickly'
          },
          {
            question: 'Which of the following is an adverb of time?',
            options: ['yesterday', 'slow', 'tree', 'happy'],
            answer: 'yesterday'
          },
          {
            question: 'Which of the following is an adverb of place?',
            options: ['here', 'fast', 'dog', 'happy'],
            answer: 'here'
          },
          {
            question: 'Which of the following is an adverb of frequency?',
            options: ['often', 'run', 'city', 'river'],
            answer: 'often'
          },
          {
            question: 'Which of the following is an adverb of degree?',
            options: ['very', 'jump', 'slowly', 'book'],
            answer: 'very'
          },
          
          // Prepositions
          {
            question: 'Which of the following is a preposition?',
            options: ['under', 'car', 'quickly', 'John'],
            answer: 'under'
          },
          {
            question: 'Which of the following is a preposition of place?',
            options: ['in', 'book', 'run', 'jump'],
            answer: 'in'
          },
          {
            question: 'Which of the following is a preposition of time?',
            options: ['before', 'apple', 'write', 'city'],
            answer: 'before'
          },
          {
            question: 'Which of the following is a preposition of direction?',
            options: ['towards', 'tree', 'happy', 'write'],
            answer: 'towards'
          },
          
          // Conjunctions
          {
            question: 'Which of the following is a conjunction?',
            options: ['and', 'book', 'jump', 'sad'],
            answer: 'and'
          },
          {
            question: 'Which of the following is a subordinating conjunction?',
            options: ['because', 'run', 'car', 'apple'],
            answer: 'because'
          },
          {
            question: 'Which of the following is a coordinating conjunction?',
            options: ['but', 'city', 'jump', 'fast'],
            answer: 'but'
          },
          {
            question: 'Which of the following is a correlative conjunction?',
            options: ['either...or', 'run', 'book', 'quick'],
            answer: 'either...or'
          },
          
          // Homophones
          {
            question: 'Which of the following is a homophone?',
            options: ['sea - see', 'book', 'car', 'fast'],
            answer: 'sea - see'
          },
          {
            question: 'Which pair of words are homophones?',
            options: ['to - too', 'car - bike', 'big - small', 'fast - quickly'],
            answer: 'to - too'
          },
          
          // Interjections
          {
            question: 'Which of the following is an interjection?',
            options: ['wow', 'run', 'tall', 'behind'],
            answer: 'wow'
          },
          {
            question: 'Which of the following is used to express surprise?',
            options: ['oh!', 'book', 'run', 'beautiful'],
            answer: 'oh!'
          },
          
          // Punctuation
          {
            question: 'Which punctuation mark is used to indicate possession?',
            options: ['comma', 'semicolon', 'apostrophe', 'colon'],
            answer: 'apostrophe'
          },
          
          // Articles
          {
            question: 'Which of the following is a definite article?',
            options: ['the', 'a', 'an', 'book'],
            answer: 'the'
          },
          {
            question: 'Which of the following is an indefinite article?',
            options: ['a', 'the', 'run', 'city'],
            answer: 'a'
          },
          
          // Determiners
          {
            question: 'Which of the following is a determiner?',
            options: ['those', 'quick', 'run', 'teacher'],
            answer: 'those'
          },
          {
            question: 'Which of the following is a possessive determiner?',
            options: ['my', 'run', 'book', 'teacher'],
            answer: 'my'
          }
        
        
        
];

const container = document.getElementById('container');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let selectedQuestions = [];

// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load 20 random questions
function loadRandomQuestions() {
    const shuffledQuestions = shuffleArray([...quizData]);
    selectedQuestions = shuffledQuestions.slice(0, 20);
    currentQuestion = 0;
    displayQuestion();
}

function displayQuestion() {
    const questionData = selectedQuestions[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    // Shuffle options before displaying
    const shuffledOptions = shuffleArray([...questionData.options]);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === selectedQuestions[currentQuestion].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: selectedQuestions[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: selectedQuestions[currentQuestion].answer,
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < selectedQuestions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored <span id="score">${score}</span> out of ${selectedQuestions.length}!`;
}

function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    loadRandomQuestions(); // Load new random questions
}

function showAnswer() {
    container.style.width = '800px';
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
    resultContainer.style.height = '100%';

    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
        incorrectAnswersHtml += `
            <p>
                <strong>Question :</strong> ${incorrectAnswers[i].question}<br>
                <strong>Your Answer :</strong> <span id="incorrect_ans"> ${incorrectAnswers[i].incorrectAnswer} </span> <br>
                <strong>Correct Answer :</strong> <span id="correct_ans"> ${incorrectAnswers[i].correctAnswer} </span>
            </p>
        `;
    }
    resultContainer.innerHTML = `
        <p>You scored <span id="score"> ${score} </span> out of ${selectedQuestions.length}!</p>
        <p id="incorrect">Incorrect Answers :</p>
        ${incorrectAnswersHtml}
    `;
}

// Event listeners for buttons
submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

// Initial call to load random questions
loadRandomQuestions();
