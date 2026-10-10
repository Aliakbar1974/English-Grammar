// ============================================================
// ENGLISH GRAMMAR QUIZ 0011
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122119195509435742&set=a.122102731923435742";


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
    id: "GR001",
    question: "Which of the following is a noun?",
    options: ["Honest", "Honestly", "Honesty", "Honourable"],
    answer: 2,
    explanation: "'Honesty' is an abstract noun that represents a quality. 'Honest' and 'Honourable' are adjectives, while 'Honestly' is an adverb.",
    example: "Example: Honesty is the best policy."
  },
  {
    id: "GR002",
    question: "Which is a proper noun?",
    options: ["Dhaka", "City", "Country", "River"],
    answer: 0,
    explanation: "'Dhaka' is a proper noun because it is the specific name of a city. 'City', 'Country', and 'River' are common nouns.",
    example: "Example: Dhaka is the capital of Bangladesh."
  },
  {
    id: "GR003",
    question: "Which is a common noun?",
    options: ["Bangladesh", "Asia", "Padma", "Teacher"],
    answer: 3,
    explanation: "'Teacher' is a common noun because it refers to a general class or profession, whereas the others are proper nouns.",
    example: "Example: The teacher is explaining the lesson."
  },
  {
    id: "GR004",
    question: "Which is an abstract noun?",
    options: ["Chair", "Honesty", "Table", "Book"],
    answer: 1,
    explanation: "'Honesty' is an abstract noun because it refers to a state or quality that cannot be seen or touched.",
    example: "Example: Her honesty inspired everyone."
  },
  {
    id: "GR005",
    question: "Which is a material noun?",
    options: ["Gold", "Army", "Kindness", "Student"],
    answer: 0,
    explanation: "'Gold' is a material noun because it represents a substance or material from which things are made.",
    example: "Example: This ring is made of gold."
  },
  {
    id: "GR006",
    question: "Which is a collective noun?",
    options: ["Boy", "Water", "Team", "Wisdom"],
    answer: 2,
    explanation: "'Team' is a collective noun because it denotes a group or collection of individuals taken as a single unit.",
    example: "Example: Our cricket team won the match."
  },
  {
    id: "GR007",
    question: "“Bangladesh” is a ______ noun.",
    options: ["Common", "Proper", "Collective", "Abstract"],
    answer: 1,
    explanation: "'Bangladesh' is a proper noun as it is the official, specific name of a country.",
    example: "Example: Bangladesh is our motherland."
  },
  {
    id: "GR008",
    question: "“Freedom” is a/an ______ noun.",
    options: ["Proper", "Material", "Collective", "Abstract"],
    answer: 3,
    explanation: "'Freedom' is an abstract noun as it describes a concept, condition, or state of being.",
    example: "Example: Millions sacrificed their lives for freedom."
  },
  {
    id: "GR009",
    question: "“Silver” is generally a ______ noun.",
    options: ["Abstract", "Collective", "Material", "Proper"],
    answer: 2,
    explanation: "'Silver' is a material noun because it refers to an uncounted physical element or substance.",
    example: "Example: Silver is a valuable metal."
  },
  {
    id: "GR010",
    question: "“Crowd” is a ______ noun.",
    options: ["Collective", "Proper", "Material", "Abstract"],
    answer: 0,
    explanation: "'Crowd' is a collective noun as it refers to a large collection of people assembled together.",
    example: "Example: A large crowd gathered in front of the stage."
  },
  {
    id: "GR011",
    question: "Which noun names a particular person or place?",
    options: ["Common noun", "Abstract noun", "Material noun", "Proper noun"],
    answer: 3,
    explanation: "A proper noun always names a specific or particular person, place, or thing, and typically begins with a capital letter.",
    example: "Example: 'John' and 'Paris' are proper nouns."
  },
  {
    id: "GR012",
    question: "Which noun names a general person, place, animal, or thing?",
    options: ["Proper noun", "Common noun", "Abstract noun", "Collective noun"],
    answer: 1,
    explanation: "A common noun gives a general name to any person, place, animal, or object belonging to the same class.",
    example: "Example: 'Boy', 'City', and 'Dog' are common nouns."
  },
  {
    id: "GR013",
    question: "Which noun refers to an idea or quality?",
    options: ["Abstract noun", "Material noun", "Proper noun", "Collective noun"],
    answer: 0,
    explanation: "An abstract noun denotes concepts, ideas, emotions, or qualities that exist beyond physical perception.",
    example: "Example: 'Love', 'Truth', and 'Justice' are abstract nouns."
  },
  {
    id: "GR014",
    question: "Which is a collective noun?",
    options: ["Soldier", "Gun", "Army", "War"],
    answer: 2,
    explanation: "'Army' is a collective noun denoting an organized group of soldiers acting together.",
    example: "Example: The army marched forward."
  },
  {
    id: "GR015",
    question: "Which is an abstract noun?",
    options: ["Beautiful", "Beautifully", "Beautify", "Beauty"],
    answer: 3,
    explanation: "'Beauty' is an abstract noun. 'Beautiful' is an adjective, 'Beautifully' is an adverb, and 'Beautify' is a verb.",
    example: "Example: Natural beauty attracts everyone."
  },
  {
    id: "GR016",
    question: "Which is a proper noun?",
    options: ["River", "Padma", "Country", "Mountain"],
    answer: 1,
    explanation: "'Padma' is a proper noun as it is the unique name of a specific river.",
    example: "Example: The Padma is a major river in Bangladesh."
  },
  {
    id: "GR017",
    question: "Which is a common noun?",
    options: ["Shakespeare", "Dhaka", "Poet", "Asia"],
    answer: 2,
    explanation: "'Poet' is a common noun referring to anyone who writes poetry, unlike specific names like 'Shakespeare'.",
    example: "Example: Kazi Nazrul Islam is our national poet."
  },
  {
    id: "GR018",
    question: "Which is a material noun?",
    options: ["Iron", "Class", "Happiness", "Teacher"],
    answer: 0,
    explanation: "'Iron' is a material noun as it denotes a raw substance/metal.",
    example: "Example: Iron is useful for construction."
  },
  {
    id: "GR019",
    question: "Which is an abstract noun?",
    options: ["Child", "Childhood", "School", "Toy"],
    answer: 1,
    explanation: "'Childhood' is an abstract noun describing a specific period or stage of life.",
    example: "Example: Childhood memories are precious."
  },
  {
    id: "GR020",
    question: "“Family” is an example of a ______ noun.",
    options: ["Proper", "Material", "Abstract", "Collective"],
    answer: 3,
    explanation: "'Family' is a collective noun as it stands for a group of related individuals living together.",
    example: "Example: I love my family."
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