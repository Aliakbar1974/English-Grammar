
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 22
// Topic: Uncountable & Special Nouns
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122124312021435742&set=a.122102731923435742";

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
        id: "021",
        question: "Which is a first-person singular pronoun?",
        options: ["We", "You", "I", "They"],
        answer: 2,
        explanation: "'I' is a first-person singular pronoun used by a speaker to refer to himself or herself.",
        example: "I am a student."
    },
    {
        id: "022",
        question: "Which is a first-person plural pronoun?",
        options: ["We", "He", "She", "I"],
        answer: 0,
        explanation: "'We' is a first-person plural pronoun. It refers to the speaker together with one or more other people.",
        example: "We are learning English."
    },
    {
        id: "023",
        question: "Which is a second-person pronoun?",
        options: ["He", "They", "I", "You"],
        answer: 3,
        explanation: "'You' is a second-person pronoun used to address the person or people being spoken to.",
        example: "You are a good student."
    },
    {
        id: "024",
        question: "Which is a third-person singular masculine pronoun?",
        options: ["She", "He", "They", "It"],
        answer: 1,
        explanation: "'He' is a third-person singular masculine pronoun traditionally used for a male person.",
        example: "He is my brother."
    },
    {
        id: "025",
        question: "Which is a third-person singular feminine pronoun?",
        options: ["He", "It", "We", "She"],
        answer: 3,
        explanation: "'She' is a third-person singular feminine pronoun traditionally used for a female person.",
        example: "She is my sister."
    },
    {
        id: "026",
        question: "Which is a third-person singular neuter pronoun?",
        options: ["It", "He", "They", "She"],
        answer: 0,
        explanation: "'It' is a third-person singular neuter pronoun generally used for things and animals when their sex is unknown or irrelevant.",
        example: "It is a beautiful flower."
    },
    {
        id: "027",
        question: "Which is a third-person plural pronoun?",
        options: ["He", "She", "They", "It"],
        answer: 2,
        explanation: "'They' is a third-person plural pronoun used for people or things being talked about.",
        example: "They are playing football."
    },
    {
        id: "028",
        question: "Choose the correct pronoun: '_____ am a student.'",
        options: ["Me", "My", "Mine", "I"],
        answer: 3,
        explanation: "'I' is the correct subject pronoun used before the verb 'am'.",
        example: "I am a student."
    },
    {
        id: "029",
        question: "Choose the correct pronoun: 'Rahim is my friend. _____ is honest.'",
        options: ["She", "It", "He", "They"],
        answer: 2,
        explanation: "'He' is correct because Rahim is a male person and the pronoun is the subject of the sentence.",
        example: "Rahim is my friend. He is honest."
    },
    {
        id: "030",
        question: "Choose the correct pronoun: 'The girls are here. _____ are ready.'",
        options: ["She", "They", "He", "It"],
        answer: 1,
        explanation: "'They' is the correct plural pronoun used to refer to the girls.",
        example: "The girls are here. They are ready."
    },
    {
        id: "031",
        question: "Choose the correct pronoun: 'The dog is hungry. _____ needs food.'",
        options: ["He", "They", "We", "It"],
        answer: 3,
        explanation: "'It' is generally used for an animal when its sex is unknown or not specified.",
        example: "The dog is hungry. It needs food."
    },
    {
        id: "032",
        question: "Choose the correct pronoun: 'My sister and I are ready. _____ will leave soon.'",
        options: ["They", "She", "We", "You"],
        answer: 2,
        explanation: "'We' is correct because the speaker and the speaker's sister are included.",
        example: "My sister and I are ready. We will leave soon."
    },
    {
        id: "033",
        question: "Choose the correct pronoun: 'Can _____ help me?'",
        options: ["He", "They", "I", "You"],
        answer: 3,
        explanation: "'You' is the correct second-person pronoun used as the subject of the question.",
        example: "Can you help me?"
    },
    {
        id: "034",
        question: "Which is an objective personal pronoun?",
        options: ["I", "Me", "He", "She"],
        answer: 1,
        explanation: "'Me' is an objective personal pronoun. It is used as the object of a verb or preposition.",
        example: "She called me yesterday."
    },
    {
        id: "035",
        question: "Which is an objective personal pronoun?",
        options: ["They", "We", "He", "Them"],
        answer: 3,
        explanation: "'Them' is the objective form of 'they' and is used as the object of a verb or preposition.",
        example: "I saw them at the park."
    },
    {
        id: "036",
        question: "Which is the object form of 'he'?",
        options: ["His", "Himself", "Him", "He"],
        answer: 2,
        explanation: "'Him' is the objective form of the subject pronoun 'he'.",
        example: "I know him very well."
    },
    {
        id: "037",
        question: "Which is the object form of 'she'?",
        options: ["Her", "Hers", "Herself", "She"],
        answer: 0,
        explanation: "'Her' is the objective form of the subject pronoun 'she'.",
        example: "I met her yesterday."
    },
    {
        id: "038",
        question: "Which is the object form of 'we'?",
        options: ["Our", "Ours", "Ourselves", "Us"],
        answer: 3,
        explanation: "'Us' is the objective form of the subject pronoun 'we'.",
        example: "The teacher helped us."
    },
    {
        id: "039",
        question: "Which is the object form of 'they'?",
        options: ["Their", "Theirs", "Them", "Themselves"],
        answer: 2,
        explanation: "'Them' is the objective form of the subject pronoun 'they'.",
        example: "We invited them to the party."
    },
    {
        id: "040",
        question: "Choose the correct sentence.",
        options: ["Him helped me.", "He helped me.", "His helped me.", "Himself helped me."],
        answer: 1,
        explanation: "'He' is the correct subject pronoun because a subject pronoun is needed before the verb 'helped'.",
        example: "He helped me with my homework."
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
