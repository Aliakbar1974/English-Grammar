// ============================================================
// ENGLISH GRAMMAR QUIZ 0010
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122118962739435742&set=a.122102731923435742";


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
    id: "GR181",
    question: "What is the plural of “book”?",
    options: ["Bookes", "Bookies", "Books", "Book"],
    answer: 2,
    explanation: "The plural form of 'book' is 'books'. We normally add 's' to form the plural of regular nouns.",
    example: "Example: I have three books."
  },
  {
    id: "GR182",
    question: "What is the plural of “child”?",
    options: ["Children", "Childs", "Childes", "Childrens"],
    answer: 0,
    explanation: "The plural form of 'child' is 'children'. It is an irregular plural noun.",
    example: "Example: The children are playing in the park."
  },
  {
    id: "GR183",
    question: "What is the plural of “man”?",
    options: ["Mans", "Men", "Mens", "Manes"],
    answer: 1,
    explanation: "The plural form of 'man' is 'men'. It is an irregular plural noun.",
    example: "Example: The men are working together."
  },
  {
    id: "GR184",
    question: "What is the plural of “woman”?",
    options: ["Womans", "Womanses", "Woman", "Women"],
    answer: 3,
    explanation: "The plural form of 'woman' is 'women'. It is an irregular plural noun.",
    example: "Example: The women are teachers."
  },
  {
    id: "GR185",
    question: "What is the plural of “foot”?",
    options: ["Feet", "Foots", "Feets", "Footes"],
    answer: 0,
    explanation: "The plural form of 'foot' is 'feet'. It is an irregular plural noun.",
    example: "Example: My feet are tired after walking."
  },
  {
    id: "GR186",
    question: "What is the plural of “mouse”?",
    options: ["Mouses", "Mouse", "Mice", "Meese"],
    answer: 2,
    explanation: "The plural form of 'mouse' is 'mice'. It is an irregular plural noun.",
    example: "Example: There are two mice in the room."
  },
  {
    id: "GR187",
    question: "What is the feminine form of “king”?",
    options: ["Lady", "Queen", "Princess", "Woman"],
    answer: 1,
    explanation: "The feminine form of 'king' is 'queen'.",
    example: "Example: The king and queen ruled the kingdom."
  },
  {
    id: "GR188",
    question: "What is the masculine form of “queen”?",
    options: ["Lady", "Duke", "Prince", "King"],
    answer: 3,
    explanation: "The masculine form of 'queen' is 'king'.",
    example: "Example: The king and queen lived in the palace."
  },
  {
    id: "GR189",
    question: "What is the feminine form of “nephew”?",
    options: ["Niece", "Sister", "Aunt", "Daughter"],
    answer: 0,
    explanation: "The feminine form of 'nephew' is 'niece'.",
    example: "Example: My niece is ten years old."
  },
  {
    id: "GR190",
    question: "What is the masculine form of “niece”?",
    options: ["Brother", "Uncle", "Nephew", "Son"],
    answer: 2,
    explanation: "The masculine form of 'niece' is 'nephew'.",
    example: "Example: My nephew lives in Dhaka."
  },
  {
    id: "GR191",
    question: "Which sentence has the basic Subject + Verb structure?",
    options: [
      "Birds beautiful.",
      "Fly birds.",
      "Beautiful birds.",
      "Birds fly."
    ],
    answer: 3,
    explanation: "'Birds fly' has a basic Subject + Verb structure. 'Birds' is the subject and 'fly' is the verb.",
    example: "Example: Children laugh. — Children = Subject, laugh = Verb."
  },
  {
    id: "GR192",
    question: "Identify the subject: “Rahim reads a book.”",
    options: ["Reads", "Rahim", "Book", "A"],
    answer: 1,
    explanation: "'Rahim' is the subject because he performs the action of reading.",
    example: "Example: Rahim reads a book. — Rahim = Subject."
  },
  {
    id: "GR193",
    question: "Identify the verb: “Rahim reads a book.”",
    options: ["Rahim", "Book", "Reads", "A"],
    answer: 2,
    explanation: "'Reads' is the verb because it expresses the action performed by Rahim.",
    example: "Example: Rahim reads a book. — reads = Verb."
  },
  {
    id: "GR194",
    question: "Identify the object: “Rahim reads a book.”",
    options: ["Book", "Rahim", "Reads", "A"],
    answer: 0,
    explanation: "'A book' is the object of the verb 'reads'. The noun 'book' receives the action.",
    example: "Example: Rahim reads a book. — book = Object."
  },
  {
    id: "GR195",
    question: "Which sentence follows Subject + Verb + Object?",
    options: [
      "Birds fly.",
      "Very beautiful.",
      "In the garden.",
      "Rahim reads books."
    ],
    answer: 3,
    explanation: "'Rahim reads books' follows the Subject + Verb + Object structure: Rahim = Subject, reads = Verb, books = Object.",
    example: "Example: She writes a letter. — She = Subject, writes = Verb, a letter = Object."
  },
  {
    id: "GR196",
    question: "Which sentence is grammatically correct?",
    options: [
      "He go to school.",
      "He goes to school.",
      "He going to school.",
      "He gone to school."
    ],
    answer: 1,
    explanation: "With the singular subject 'He', the present simple verb takes 's', so 'goes' is correct.",
    example: "Example: He goes to school every day."
  },
  {
    id: "GR197",
    question: "Which sentence is grammatically correct?",
    options: [
      "They play football.",
      "They plays football.",
      "They playing football.",
      "They plays footballs."
    ],
    answer: 0,
    explanation: "With the plural subject 'They', we use the base form 'play' in the simple present tense.",
    example: "Example: They play football every afternoon."
  },
  {
    id: "GR198",
    question: "Which sentence has a singular subject?",
    options: [
      "The boy is playing.",
      "They are happy.",
      "The boys are playing.",
      "We are ready."
    ],
    answer: 0,
    explanation: "'The boy' is a singular subject because it refers to one person.",
    example: "Example: The boy is playing in the field."
  },
  {
    id: "GR199",
    question: "Which sentence has a plural subject?",
    options: [
      "The girl sings.",
      "The boy runs.",
      "The students study.",
      "He reads."
    ],
    answer: 2,
    explanation: "'The students' is a plural subject because it refers to more than one student.",
    example: "Example: The students study English every day."
  },
  {
    id: "GR200",
    question: "Which sentence is grammatically correct?",
    options: [
      "She are a teacher.",
      "She is a teacher.",
      "She am a teacher.",
      "She be a teacher."
    ],
    answer: 1,
    explanation: "The correct form of the verb 'be' with the singular subject 'She' is 'is'.",
    example: "Example: She is a teacher at a primary school."
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