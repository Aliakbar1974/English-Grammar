
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 20
// Topic: Uncountable & Special Nouns
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122123431509435742&set=a.122102731923435742";

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
// QUIZ DATA
// answer: 0 = A, 1 = B, 2 = C, 3 = D
// ============================================================





const quizData = [
    {
        id: "181",
        question: "Which sentence is correct?",
        options: [
            "He gave me many advices.",
            "He gave me much advice.",
            "He gave me an advice.",
            "He gave me advices."
        ],
        answer: 1,
        explanation: "Advice is an uncountable noun in standard English. We use much advice or some advice, not many advices.",
        example: "My teacher gave me much useful advice."
    },
    {
        id: "182",
        question: "Which sentence is correct?",
        options: [
            "I need some information.",
            "I need an information.",
            "I need informations.",
            "I need many information."
        ],
        answer: 0,
        explanation: "Information is an uncountable noun. We can say some information or a piece of information, but not an information.",
        example: "I need some information about the exam."
    },
    {
        id: "183",
        question: "Which sentence is correct?",
        options: [
            "The furniture are new.",
            "The furnitures are new.",
            "The furniture is new.",
            "The furniture were new."
        ],
        answer: 2,
        explanation: "Furniture is an uncountable noun and normally takes a singular verb when used as the subject.",
        example: "The furniture in our classroom is new."
    },
    {
        id: "184",
        question: "Which sentence is correct?",
        options: [
            "These equipments are expensive.",
            "These equipment are expensive.",
            "An equipment is expensive.",
            "This equipment is expensive."
        ],
        answer: 3,
        explanation: "Equipment is normally uncountable. Use this equipment is or these pieces of equipment are.",
        example: "This equipment is expensive."
    },
    {
        id: "185",
        question: "Which sentence is correct?",
        options: [
            "The news are good.",
            "The news is good.",
            "The news were good.",
            "A news is good."
        ],
        answer: 1,
        explanation: "News ends in s but is grammatically singular when referring to information or reports.",
        example: "The news is good today."
    },
    {
        id: "186",
        question: "Which sentence is correct?",
        options: [
            "I bought two pieces of furniture.",
            "I bought two furnitures.",
            "I bought two furniture.",
            "I bought a furniture."
        ],
        answer: 0,
        explanation: "To count furniture, use a phrase such as a piece of furniture or two pieces of furniture.",
        example: "We bought two pieces of furniture for our office."
    },
    {
        id: "187",
        question: "Which sentence is correct?",
        options: [
            "He gave me two advices.",
            "He gave me two advice.",
            "He gave me an advice.",
            "He gave me two pieces of advice."
        ],
        answer: 3,
        explanation: "Advice is uncountable. To specify a number, use piece or pieces of advice.",
        example: "My father gave me two pieces of advice."
    },
    {
        id: "188",
        question: "Which sentence is correct?",
        options: [
            "I received several informations.",
            "I received many information.",
            "I received several pieces of information.",
            "I received an informations."
        ],
        answer: 2,
        explanation: "Information is uncountable. Several pieces of information is the correct way to express a countable quantity.",
        example: "We received several pieces of information about the event."
    },
    {
        id: "189",
        question: "Which noun is normally used in the plural form?",
        options: [
            "Advice",
            "Information",
            "Scissors",
            "Furniture"
        ],
        answer: 2,
        explanation: "Scissors is normally a plural-form noun. When referring to one tool, we usually say a pair of scissors.",
        example: "These scissors are sharp."
    },
    {
        id: "190",
        question: "Which sentence is correct?",
        options: [
            "These scissors are sharp.",
            "This scissors is sharp.",
            "These scissor is sharp.",
            "This scissors are sharp."
        ],
        answer: 0,
        explanation: "Scissors normally takes a plural verb. Use these scissors are or this pair of scissors is.",
        example: "These scissors are sharp enough to cut the paper."
    },
    {
        id: "191",
        question: "Which sentence is correct?",
        options: [
            "A pair of scissors are on the table.",
            "A scissors is on the table.",
            "A scissors are on the table.",
            "A pair of scissors is on the table."
        ],
        answer: 3,
        explanation: "The subject is pair, which is singular. Therefore, the correct verb is is.",
        example: "A pair of scissors is on the table."
    },
    {
        id: "192",
        question: "Which noun is usually plural in form?",
        options: [
            "Advice",
            "Trousers",
            "Information",
            "Knowledge"
        ],
        answer: 1,
        explanation: "Trousers is normally plural in form. To refer to one item of clothing, we can say a pair of trousers.",
        example: "My trousers are new."
    },
    {
        id: "193",
        question: "Which sentence is correct?",
        options: [
            "My trousers is new.",
            "My trouser are new.",
            "My trousers are new.",
            "My trouser is new."
        ],
        answer: 2,
        explanation: "Trousers normally takes a plural verb. When referring to one garment, we commonly use a pair of trousers.",
        example: "My trousers are new, but my shoes are old."
    },
    {
        id: "194",
        question: "Which noun is singular in form but generally refers to a field of study?",
        options: [
            "People",
            "Scissors",
            "Cattle",
            "Mathematics"
        ],
        answer: 3,
        explanation: "Mathematics ends in s but is generally treated as singular when referring to the academic subject.",
        example: "Mathematics is an important subject."
    },
    {
        id: "195",
        question: "Which sentence is correct?",
        options: [
            "Mathematics is difficult.",
            "Mathematics are difficult.",
            "Mathematics were difficult.",
            "A mathematics is difficult."
        ],
        answer: 0,
        explanation: "When mathematics refers to the field of study, it normally takes a singular verb.",
        example: "Mathematics is difficult for some students."
    },
    {
        id: "196",
        question: "Which noun is plural in form and refers to people generally?",
        options: [
            "Information",
            "People",
            "Advice",
            "Furniture"
        ],
        answer: 1,
        explanation: "People is the usual plural of person when referring to human beings.",
        example: "Many people attended the meeting."
    },
    {
        id: "197",
        question: "Which sentence is correct?",
        options: [
            "The police is investigating the case.",
            "The police was investigating the case.",
            "The police are investigating the case.",
            "A police are investigating the case."
        ],
        answer: 2,
        explanation: "Police normally takes a plural verb when referring to the police force. For one individual, use a police officer.",
        example: "The police are investigating the case."
    },
    {
        id: "198",
        question: "Which sentence is correct?",
        options: [
            "The cattle is grazing.",
            "The cattles are grazing.",
            "A cattle is grazing.",
            "The cattle are grazing."
        ],
        answer: 3,
        explanation: "Cattle is a plural-form noun referring to cows, bulls, and related animals collectively. It normally takes a plural verb.",
        example: "The cattle are grazing in the field."
    },
    {
        id: "199",
        question: "Which sentence is grammatically correct?",
        options: [
            "The scenery is beautiful.",
            "The sceneries are beautiful.",
            "The scenery are beautiful.",
            "A scenery is beautiful."
        ],
        answer: 0,
        explanation: "Scenery is normally uncountable in English. We say beautiful scenery or a beautiful scene, not a scenery.",
        example: "The scenery in the hills is beautiful."
    },
    {
        id: "200",
        question: "Which sentence is grammatically correct?",
        options: [
            "He has good knowledges of English.",
            "He has a good knowledge of English.",
            "He has a good knowledges of English.",
            "He has many knowledge of English."
        ],
        answer: 1,
        explanation: "Knowledge is generally uncountable. We can say a good knowledge of English or extensive knowledge of English.",
        example: "She has a good knowledge of English."
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

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");
const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");
const statusElement = document.getElementById("status");

// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) quizScreen.style.display = "none";
if (resultScreen) resultScreen.style.display = "none";
if (feedbackElement) feedbackElement.style.display = "none";

// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {
    if (mode !== "learning" && mode !== "exam") {
        console.error("Invalid quiz mode:", mode);
        return;
    }

    selectedMode = mode;
    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

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

    if (questionNumber) {
        questionNumber.textContent = currentQuestion + 1;
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (progressBar) {
        progressBar.style.width =
            ((currentQuestion + 1) / quizData.length) * 100 + "%";
    }

    if (questionElement) {
        questionElement.textContent = q.question;
    }

    if (optionsElement) {
        optionsElement.replaceChildren();
    }

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";

    if (exampleText) {
        exampleText.replaceChildren();
    }

    const oldNextButton = document.getElementById("next-question-btn");
    if (oldNextButton) oldNextButton.remove();

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.type = "button";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = option;

        button.appendChild(letter);
        button.appendChild(optionText);

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else if (timerElement) {
        timerElement.textContent = "∞";
        timerElement.classList.remove("timer-danger");
    }
}

// ============================================================
// SHOW EXPLANATION AND EXAMPLE
// ============================================================

function showFeedbackContent(q) {
    if (!exampleText) return;

    exampleText.replaceChildren();

    const explanationHeading = document.createElement("strong");
    explanationHeading.textContent = "Explanation: ";

    const explanationParagraph = document.createElement("p");
    explanationParagraph.appendChild(explanationHeading);
    explanationParagraph.appendChild(
        document.createTextNode(q.explanation || "Explanation not available.")
    );

    const exampleHeading = document.createElement("strong");
    exampleHeading.textContent = "Example: ";

    const exampleParagraph = document.createElement("p");
    exampleParagraph.appendChild(exampleHeading);
    exampleParagraph.appendChild(
        document.createTextNode(q.example || "Example not available.")
    );

    exampleText.appendChild(explanationParagraph);
    exampleText.appendChild(exampleParagraph);
}

// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}

// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".option-btn")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;

        if (clickedButton) {
            clickedButton.classList.add("correct");
        }

        playSound("correct");

        if (correctMessage) {
            correctMessage.textContent = "✓ Correct Answer!";
        }

        if (wrongMessage) {
            wrongMessage.textContent = "";
        }

        if (selectedMode === "learning") {
            if (feedbackElement) {
                feedbackElement.style.display = "block";
            }

            showFeedbackContent(q);
        }
    } else {
        if (clickedButton) {
            clickedButton.classList.add("wrong");
        }

        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }

        playSound("wrong");

        if (wrongMessage) {
            wrongMessage.textContent = "✗ Wrong Answer!";
        }

        if (correctMessage) {
            correctMessage.textContent =
                "Correct Answer: " + q.options[q.answer];
        }

        if (feedbackElement) {
            feedbackElement.style.display = "block";
        }

        showFeedbackContent(q);
    }

    showNextButton();
}

// ============================================================
// TIME UP
// ============================================================

function timeUp() {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".option-btn")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) {
        buttons[q.answer].classList.add("correct");
    }

    playSound("tryAgain");

    if (wrongMessage) {
        wrongMessage.textContent = "⏰ Time's Up!";
    }

    if (correctMessage) {
        correctMessage.textContent =
            "Correct Answer: " + q.options[q.answer];
    }

    if (feedbackElement) {
        feedbackElement.style.display = "block";
    }

    showFeedbackContent(q);
    showNextButton();
}

// ============================================================
// NEXT BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "Next Question →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "Show Result 🎉";
        nextButton.addEventListener("click", showResult);
    }

    const quizContainer = quizScreen
        ? quizScreen.querySelector(".quiz-container")
        : null;

    if (quizContainer) {
        quizContainer.appendChild(nextButton);
    } else if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}

// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) {
        scoreElement.textContent = `${score} / ${quizData.length}`;
    }

    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent =
                "🏆 Excellent! Outstanding performance!";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent =
                "🌟 Very Good! Keep improving your Grammar.";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent =
                "👍 Good Try! Keep practicing regularly.";
            playSound("complete");
        } else {
            resultMessage.textContent =
                "📚 Keep Learning! Try Again and improve your score.";
            playSound("tryAgain");
        }
    }

    let socialBox = document.getElementById("social-message");

    if (!socialBox && resultScreen) {
        const resultCard = resultScreen.querySelector(".result-card");

        if (resultCard) {
            socialBox = document.createElement("div");
            socialBox.id = "social-message";
            socialBox.className = "social-message";
            resultCard.appendChild(socialBox);
        }
    }

    if (socialBox) {
        socialBox.textContent =
            "❤️ Did you enjoy the quiz? Like our Facebook post, " +
            "comment your score, share the quiz with your friends, " +
            "and follow our page for more English Grammar quizzes.";

        socialBox.style.display = "block";
    }

    setupFacebookButton();
}

// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (!FACEBOOK_POST_URL) {
        alert("Facebook post link is not available.");
        return;
    }

    window.location.assign(FACEBOOK_POST_URL);
}

function setupFacebookButton() {
    const facebookButton = document.getElementById("facebook-btn");
    if (!facebookButton) return;

    facebookButton.onclick = function () {
        returnToFacebook();
    };
}

// ============================================================
// RELOAD QUIZ
// ============================================================

function reloadQuiz() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";

    if (statusElement) statusElement.textContent = "";

    if (timerElement) {
        timerElement.textContent = "15";
        timerElement.classList.remove("timer-danger");
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (questionNumber) {
        questionNumber.textContent = "1";
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (optionsElement) {
        optionsElement.replaceChildren();
    }

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";

    if (exampleText) {
        exampleText.replaceChildren();
    }

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const socialBox = document.getElementById("social-message");
    if (socialBox) socialBox.style.display = "none";

    playSound("start");
}

// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();

// ============================================================
// QUIZ DATA VALIDATION + ANSWER DISTRIBUTION
// ============================================================

(function checkQuizData() {
    const distribution = [0, 0, 0, 0];
    const seenIds = new Set();
    const errors = [];

    quizData.forEach((q, index) => {
        const label = `Question ${index + 1} (ID: ${q.id})`;

        if (seenIds.has(q.id)) {
            errors.push(`${label}: Duplicate question ID.`);
        }
        seenIds.add(q.id);

        if (typeof q.question !== "string" || !q.question.trim()) {
            errors.push(`${label}: Missing question text.`);
        }

        if (!Array.isArray(q.options) || q.options.length !== 4) {
            errors.push(`${label}: Exactly four options are required.`);
        } else if (q.options.some(option =>
            typeof option !== "string" || !option.trim()
        )) {
            errors.push(`${label}: One or more options are empty.`);
        }

        if (
            !Number.isInteger(q.answer) ||
            q.answer < 0 ||
            q.answer > 3 ||
            !Array.isArray(q.options) ||
            !q.options[q.answer]
        ) {
            errors.push(`${label}: Invalid answer index.`);
        } else {
            distribution[q.answer]++;
        }

        if (typeof q.explanation !== "string" || !q.explanation.trim()) {
            errors.push(`${label}: Missing explanation.`);
        }

        if (typeof q.example !== "string" || !q.example.trim()) {
            errors.push(`${label}: Missing example.`);
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );

    if (quizData.length !== 20) {
        errors.push(`Expected 20 questions, found ${quizData.length}.`);
    }

    if (errors.length > 0) {
        console.error("Quiz data validation errors:", errors);
    } else {
        console.log("Quiz data validation passed.");
    }
})();
