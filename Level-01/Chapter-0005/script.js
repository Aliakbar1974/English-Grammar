// ============================================================
// ENGLISH GRAMMAR QUIZ 0005
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122117064927435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {
    start: new Audio("Sounds/Start.wav"),
    correct: new Audio("Sounds/Correct.wav"),
    wrong: new Audio("Sounds/Wrong.wav"),
    tryAgain: new Audio("Sounds/TryAgain.wav"),
    success: new Audio("Sounds/Success.wav"),
    victory: new Audio("Sounds/Victory.wav"),
    complete: new Audio("Sounds/Complete.wav")
};


function playSound(soundName) {

    const sound = sounds[soundName];

    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log("Sound could not play:", error);
    });

}


// ============================================================
// ENGLISH GRAMMAR QUIZ
// 20 Questions
// Grammar Set
// ============================================================


const quizData = [
  {
    id: "GR081",
    question: "Which of the following is a verb?",
    options: [
      "Beautiful",
      "Happiness",
      "Write",
      "Slowly"
    ],
    answer: 2,
    explanation: "\"Write\" is a verb because it expresses an action.",
    example: "I write a letter every day."
  },

  {
    id: "GR082",
    question: "A verb generally expresses an ______.",
    options: [
      "Action or state",
      "Object only",
      "Place only",
      "Number only"
    ],
    answer: 0,
    explanation: "A verb generally expresses an action, occurrence, or state.",
    example: "She runs fast. / He is happy."
  },

  {
    id: "GR083",
    question: "Identify the verb: \"Birds fly in the sky.\"",
    options: [
      "Birds",
      "Sky",
      "The",
      "Fly"
    ],
    answer: 3,
    explanation: "\"Fly\" is the verb because it shows the action performed by the birds.",
    example: "Birds fly in the sky."
  },

  {
    id: "GR084",
    question: "Identify the verb: \"She reads books.\"",
    options: [
      "She",
      "Reads",
      "Books",
      "None"
    ],
    answer: 1,
    explanation: "\"Reads\" is the verb because it expresses the action performed by She.",
    example: "She reads books every evening."
  },

  {
    id: "GR085",
    question: "Which is an auxiliary verb?",
    options: [
      "Run",
      "Beautiful",
      "Have",
      "Quickly"
    ],
    answer: 2,
    explanation: "\"Have\" can function as an auxiliary verb to form perfect tenses.",
    example: "They have finished the work."
  },

  {
    id: "GR086",
    question: "Which is a modal verb?",
    options: [
      "Walk",
      "Beautiful",
      "School",
      "Can"
    ],
    answer: 3,
    explanation: "\"Can\" is a modal auxiliary verb used to express ability, possibility, or permission.",
    example: "She can swim."
  },

  {
    id: "GR087",
    question: "Which sentence contains a linking verb?",
    options: [
      "She is happy.",
      "He runs fast.",
      "They play football.",
      "We read books."
    ],
    answer: 0,
    explanation: "\"Is\" is a linking verb that connects the subject \"She\" with the adjective \"happy.\"",
    example: "She is happy."
  },

  {
    id: "GR088",
    question: "Which is the past form of \"go\"?",
    options: [
      "Gone",
      "Going",
      "Went",
      "Goed"
    ],
    answer: 2,
    explanation: "\"Went\" is the simple past form of the irregular verb \"go.\"",
    example: "He went to school yesterday."
  },

  {
    id: "GR089",
    question: "Which is the past participle of \"write\"?",
    options: [
      "Wrote",
      "Written",
      "Writing",
      "Writes"
    ],
    answer: 1,
    explanation: "\"Written\" is the past participle form of \"write.\"",
    example: "She has written a letter."
  },

  {
    id: "GR090",
    question: "Which is the present participle of \"run\"?",
    options: [
      "Ran",
      "Runs",
      "Running",
      "Run"
    ],
    answer: 2,
    explanation: "\"Running\" is the present participle form of \"run.\"",
    example: "He is running in the park."
  },

  {
    id: "GR091",
    question: "Choose the correct verb: \"He ___ football every day.\"",
    options: [
      "Playing",
      "Play",
      "Plays",
      "Played"
    ],
    answer: 2,
    explanation: "With the singular subject \"He,\" the simple present verb takes -s: \"plays.\"",
    example: "He plays football every day."
  },

  {
    id: "GR092",
    question: "Choose the correct verb: \"They ___ to school every morning.\"",
    options: [
      "Goes",
      "Go",
      "Going",
      "Gone"
    ],
    answer: 1,
    explanation: "With the plural subject \"They,\" we use the base form \"go.\"",
    example: "They go to school every morning."
  },

  {
    id: "GR093",
    question: "Choose the correct verb: \"She ___ a letter yesterday.\"",
    options: [
      "Writes",
      "Wrote",
      "Write",
      "Writing"
    ],
    answer: 1,
    explanation: "\"Yesterday\" indicates the past, so the past form \"wrote\" is correct.",
    example: "She wrote a letter yesterday."
  },

  {
    id: "GR094",
    question: "Choose the correct verb: \"I ___ my homework now.\"",
    options: [
      "Am doing",
      "Do",
      "Did",
      "Done"
    ],
    answer: 0,
    explanation: "\"Now\" indicates an action happening at the present time, so \"am doing\" is correct.",
    example: "I am doing my homework now."
  },

  {
    id: "GR095",
    question: "Which is an irregular verb?",
    options: [
      "Go",
      "Walk",
      "Play",
      "Work"
    ],
    answer: 0,
    explanation: "\"Go\" is irregular because its past form is \"went,\" not \"goed.\"",
    example: "I go to school. / I went to school."
  },

  {
    id: "GR096",
    question: "Which is a transitive verb?",
    options: [
      "Sleep",
      "Arrive",
      "Sit",
      "Eat"
    ],
    answer: 3,
    explanation: "\"Eat\" can take a direct object, making it a transitive verb.",
    example: "She eats an apple."
  },

  {
    id: "GR097",
    question: "Which sentence contains an intransitive verb?",
    options: [
      "The baby slept.",
      "She bought a book.",
      "He kicked the ball.",
      "They opened the door."
    ],
    answer: 0,
    explanation: "\"Slept\" is intransitive here because it does not take a direct object.",
    example: "The baby slept peacefully."
  },

  {
    id: "GR098",
    question: "Which is the correct past form of \"eat\"?",
    options: [
      "Eated",
      "Ate",
      "Eaten",
      "Eating"
    ],
    answer: 1,
    explanation: "\"Ate\" is the simple past form of the irregular verb \"eat.\"",
    example: "I ate rice yesterday."
  },

  {
    id: "GR099",
    question: "Which is the past participle of \"break\"?",
    options: [
      "Broke",
      "Breaking",
      "Broken",
      "Breaked"
    ],
    answer: 2,
    explanation: "\"Broken\" is the past participle form of \"break.\"",
    example: "He has broken the glass."
  },

  {
    id: "GR100",
    question: "Which sentence contains a modal verb?",
    options: [
      "He swims daily.",
      "He swam yesterday.",
      "He is swimming.",
      "He can swim."
    ],
    answer: 3,
    explanation: "\"Can\" is a modal verb expressing ability.",
    example: "He can swim very well."
  }
];




// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer = null;
let timeLeft = 15;
let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const questionNumber =
    document.getElementById("question-number");

const totalQuestions =
    document.getElementById("total-questions");

const timerElement =
    document.getElementById("timer");

const progressBar =
    document.getElementById("progress-bar");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const feedbackElement =
    document.getElementById("feedback");

const correctMessage =
    document.getElementById("correct-message");

const wrongMessage =
    document.getElementById("wrong-message");

const exampleText =
    document.getElementById("example-text");

const scoreElement =
    document.getElementById("score");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const statusElement =
    document.getElementById("status");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) {
    quizScreen.style.display = "none";
}

if (resultScreen) {
    resultScreen.style.display = "none";
}

if (feedbackElement) {
    feedbackElement.style.display = "none";
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {

    selectedMode = mode;

    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) {
        startScreen.style.display = "none";
    }

    if (resultScreen) {
        resultScreen.style.display = "none";
    }

    if (quizScreen) {
        quizScreen.style.display = "block";
    }

    if (statusElement) {
        statusElement.textContent = "";
    }

    playSound("start");

    showQuestion();

}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    clearInterval(timer);

    answered = false;

    const q = quizData[currentQuestion];

    if (!q) {
        showResult();
        return;
    }


    // --------------------------------------------------------
    // Question Number
    // --------------------------------------------------------

    if (questionNumber) {
        questionNumber.textContent =
            currentQuestion + 1;
    }


    // --------------------------------------------------------
    // Total Questions
    // --------------------------------------------------------

    if (totalQuestions) {
        totalQuestions.textContent =
            quizData.length;
    }


    // --------------------------------------------------------
    // Progress Bar
    // --------------------------------------------------------

    if (progressBar) {

        const progress =
            ((currentQuestion + 1) /
            quizData.length) * 100;

        progressBar.style.width =
            progress + "%";
    }


    // --------------------------------------------------------
    // Question
    // --------------------------------------------------------

    if (questionElement) {

        // IMPORTANT:
        // No q.word is used here.
        // This prevents "undefined" from appearing.

        questionElement.textContent =
            q.question;
    }


    // --------------------------------------------------------
    // Clear Old Options
    // --------------------------------------------------------

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }


    // --------------------------------------------------------
    // Clear Feedback
    // --------------------------------------------------------

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) {
        correctMessage.textContent = "";
    }

    if (wrongMessage) {
        wrongMessage.textContent = "";
    }

    if (exampleText) {
        exampleText.innerHTML = "";
    }


    // --------------------------------------------------------
    // Remove Old Next Button
    // --------------------------------------------------------

    const oldNextButton =
        document.getElementById(
            "next-question-btn"
        );

    if (oldNextButton) {
        oldNextButton.remove();
    }


    // --------------------------------------------------------
    // Create Answer Options
    // --------------------------------------------------------

    q.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "option-btn";

            button.type =
                "button";

            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${option}
                </span>
            `;

            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );

            if (optionsElement) {
                optionsElement.appendChild(button);
            }

        }
    );


    // ========================================================
    // EXAM MODE
    // ========================================================

    if (selectedMode === "exam") {

        timeLeft = 15;

        updateTimer();

        timer = setInterval(
            function () {

                timeLeft--;

                updateTimer();

                if (timeLeft <= 0) {

                    clearInterval(timer);

                    timeUp();
                }

            },
            1000
        );

    }


    // ========================================================
    // LEARNING MODE
    // ========================================================

    else {

        if (timerElement) {

            timerElement.textContent =
                "∞";

            timerElement.classList.remove(
                "timer-danger"
            );
        }
    }

}


// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimer() {

    if (!timerElement) return;

    timerElement.textContent =
        timeLeft;

    if (timeLeft <= 5) {

        timerElement.classList.add(
            "timer-danger"
        );

    }

    else {

        timerElement.classList.remove(
            "timer-danger"
        );

    }

}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(
    selectedIndex,
    clickedButton
) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q =
        quizData[currentQuestion];

    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // ========================================================
    // CORRECT ANSWER
    // ========================================================

    if (selectedIndex === q.answer) {

        score++;

        if (clickedButton) {

            clickedButton.classList.add(
                "correct"
            );

        }

        playSound("correct");


        if (correctMessage) {

            correctMessage.textContent =
                "✓ Correct Answer!";

        }


        if (wrongMessage) {

            wrongMessage.textContent =
                "";

        }


        // ----------------------------------------------------
        // Learning Mode Feedback
        // ----------------------------------------------------

        if (selectedMode === "learning") {

            if (feedbackElement) {

                feedbackElement.style.display =
                    "block";

            }

            if (exampleText) {

                exampleText.innerHTML = `

                    <strong>
                        Example:
                    </strong>

                    ${q.example}

                    <br><br>

                    <strong>
                        Explanation:
                    </strong>

                    ${q.explanation}

                `;

            }

        }

    }


    // ========================================================
    // WRONG ANSWER
    // ========================================================

    else {

        if (clickedButton) {

            clickedButton.classList.add(
                "wrong"
            );

        }


        // ----------------------------------------------------
        // Highlight Correct Answer
        // ----------------------------------------------------

        if (buttons[q.answer]) {

            buttons[q.answer].classList.add(
                "correct"
            );

        }


        playSound("wrong");


        if (wrongMessage) {

            wrongMessage.textContent =
                "✗ Wrong Answer!";

        }


        if (correctMessage) {

            correctMessage.innerHTML = `

                Correct Answer:
                <strong>
                    ${q.options[q.answer]}
                </strong>

            `;

        }


        // ----------------------------------------------------
        // Show Explanation
        // ----------------------------------------------------

        if (feedbackElement) {

            feedbackElement.style.display =
                "block";

        }


        if (exampleText) {

            exampleText.innerHTML = `

                <strong>
                    Example:
                </strong>

                ${q.example}

                <br><br>

                <strong>
                    Explanation:
                </strong>

                ${q.explanation}

            `;

        }

    }


    // --------------------------------------------------------
    // Show Next Button
    // --------------------------------------------------------

    showNextButton();

}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q =
        quizData[currentQuestion];

    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // --------------------------------------------------------
    // Highlight Correct Answer
    // --------------------------------------------------------

    if (buttons[q.answer]) {

        buttons[q.answer].classList.add(
            "correct"
        );

    }


    playSound("tryAgain");


    if (wrongMessage) {

        wrongMessage.textContent =
            "⏰ Time's Up!";

    }


    if (correctMessage) {

        correctMessage.innerHTML = `

            Correct Answer:
            <strong>
                ${q.options[q.answer]}
            </strong>

        `;

    }


    if (feedbackElement) {

        feedbackElement.style.display =
            "block";

    }


    if (exampleText) {

        exampleText.innerHTML = `

            <strong>
                Example:
            </strong>

            ${q.example}

            <br><br>

            <strong>
                Explanation:
            </strong>

            ${q.explanation}

        `;

    }


    showNextButton();

}


// ============================================================
// SHOW NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {

    const oldButton =
        document.getElementById(
            "next-question-btn"
        );

    if (oldButton) {
        oldButton.remove();
    }


    const nextButton =
        document.createElement("button");

    nextButton.id =
        "next-question-btn";

    nextButton.className =
        "next-btn";

    nextButton.type =
        "button";


    // --------------------------------------------------------
    // More Questions
    // --------------------------------------------------------

    if (
        currentQuestion <
        quizData.length - 1
    ) {

        nextButton.textContent =
            "Next Question →";

        nextButton.addEventListener(
            "click",
            nextQuestion
        );

    }


    // --------------------------------------------------------
    // Last Question
    // --------------------------------------------------------

    else {

        nextButton.textContent =
            "Show Result 🎉";

        nextButton.addEventListener(
            "click",
            showResult
        );

    }


    // --------------------------------------------------------
    // Add Button to Quiz Container
    // --------------------------------------------------------

    const quizContainer =
        quizScreen
            ? quizScreen.querySelector(
                ".quiz-container"
            )
            : null;


    if (quizContainer) {

        quizContainer.appendChild(
            nextButton
        );

    }

    else if (quizScreen) {

        quizScreen.appendChild(
            nextButton
        );

    }

}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {

    clearInterval(timer);

    currentQuestion++;

    if (
        currentQuestion <
        quizData.length
    ) {

        showQuestion();

    }

    else {

        showResult();

    }

}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {

    clearInterval(timer);


    // --------------------------------------------------------
    // Hide Quiz Screen
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Result Screen
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Remove Next Button
    // --------------------------------------------------------

    const nextButton =
        document.getElementById(
            "next-question-btn"
        );

    if (nextButton) {
        nextButton.remove();
    }


    // --------------------------------------------------------
    // Calculate Percentage
    // --------------------------------------------------------

    const percentage =
        Math.round(
            (score /
            quizData.length) * 100
        );


    // --------------------------------------------------------
    // Score
    // --------------------------------------------------------

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${quizData.length}`;

    }


    // --------------------------------------------------------
    // Percentage
    // --------------------------------------------------------

    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    // ========================================================
    // RESULT MESSAGE + SOUND
    // ========================================================

    if (resultMessage) {

        if (percentage >= 90) {

            resultMessage.textContent =
                "🏆 Excellent! Outstanding performance!";

            playSound("victory");

        }

        else if (percentage >= 75) {

            resultMessage.textContent =
                "🌟 Very Good! Keep improving your Grammar.";

            playSound("success");

        }

        else if (percentage >= 50) {

            resultMessage.textContent =
                "👍 Good Try! Keep practicing regularly.";

            playSound("complete");

        }

        else {

            resultMessage.textContent =
                "📚 Keep Learning! Try Again and improve your score.";

            playSound("tryAgain");

        }

    }


    // ========================================================
    // SOCIAL MESSAGE
    // ========================================================

    let socialBox =
        document.getElementById(
            "social-message"
        );


    // --------------------------------------------------------
    // Create Social Message if Missing
    // --------------------------------------------------------

    if (!socialBox && resultScreen) {

        const resultCard =
            resultScreen.querySelector(
                ".result-card"
            );

        if (resultCard) {

            socialBox =
                document.createElement(
                    "div"
                );

            socialBox.id =
                "social-message";

            socialBox.className =
                "social-message";

            resultCard.appendChild(
                socialBox
            );

        }

    }


    // --------------------------------------------------------
    // Social Message Content
    // --------------------------------------------------------

    if (socialBox) {

        socialBox.innerHTML = `

            ❤️
            <strong>
                Did you enjoy the quiz?
            </strong>

            <br><br>

            👍 Like our Facebook Post

            <br>

            💬 Comment your score

            <br>

            🔄 Share the quiz with your friends

            <br>

            ❤️ Follow our page for more quizzes!

        `;

        socialBox.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Make sure Facebook button works
    // --------------------------------------------------------

    setupFacebookButton();

}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {

    const facebookURL =
        FACEBOOK_POST_URL;


    if (!facebookURL) {

        alert(
            "Facebook post link is not available."
        );

        return;
    }


    // --------------------------------------------------------
    // Redirect directly to Facebook post
    // --------------------------------------------------------

    window.location.assign(
        facebookURL
    );

}


// ============================================================
// FACEBOOK BUTTON SETUP
// ============================================================

function setupFacebookButton() {

    const facebookButton =
        document.getElementById(
            "facebook-btn"
        );


    if (!facebookButton) return;


    // --------------------------------------------------------
    // Keep HTML onclick working
    // --------------------------------------------------------

    facebookButton.onclick =
        function () {

            returnToFacebook();

        };

}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {

    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";


    playSound("start");


    // --------------------------------------------------------
    // Hide Result
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Hide Quiz
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Start Screen
    // --------------------------------------------------------

    if (startScreen) {

        startScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Reset Status
    // --------------------------------------------------------

    if (statusElement) {

        statusElement.textContent =
            "";

    }


    // --------------------------------------------------------
    // Reset Timer
    // --------------------------------------------------------

    if (timerElement) {

        timerElement.textContent =
            "15";

        timerElement.classList.remove(
            "timer-danger"
        );

    }


    // --------------------------------------------------------
    // Reset Progress
    // --------------------------------------------------------

    if (progressBar) {

        progressBar.style.width =
            "0%";

    }

}


// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {

    const distribution =
        [0, 0, 0, 0];


    quizData.forEach(
        q => {

            if (
                Number.isInteger(q.answer) &&
                q.answer >= 0 &&
                q.answer <= 3
            ) {

                distribution[q.answer]++;

            }

        }
    );


    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );


})();


// ============================================================
// END OF SCRIPT
// ============================================================