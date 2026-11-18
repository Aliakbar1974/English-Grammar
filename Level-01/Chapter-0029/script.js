
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 29
// Topic: Distributive & Reciprocal 
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122126366547435742&set=a.122102731923435742";

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
    id: 161,
    question: "Which is a distributive pronoun?",
    options: ["They", "Who", "This", "Each"],
    answer: 3,
    explanation: "'Each' is a distributive pronoun because it refers to individual members of a group separately.",
    example: "Each of the students received a certificate."
  },
  {
    id: 162,
    question: "Which is a distributive pronoun?",
    options: ["Either", "Someone", "He", "Which"],
    answer: 0,
    explanation: "'Either' is a distributive pronoun used to refer to one of two persons or things.",
    example: "Either of the two roads leads to the railway station."
  },
  {
    id: 163,
    question: "Which is a distributive pronoun?",
    options: ["They", "This", "Neither", "Who"],
    answer: 2,
    explanation: "'Neither' is a distributive pronoun that means not one and not the other of two persons or things.",
    example: "Neither of the two answers is correct."
  },
  {
    id: 164,
    question: "\"Each of the boys brought _____ book.\"",
    options: ["their", "them", "theirs", "his"],
    answer: 3,
    explanation: "In traditional formal grammar, 'each' is singular, so the singular pronoun 'his' is used in this sentence. Singular 'their' is also widely accepted in modern English.",
    example: "Each of the boys brought his book to school."
  },
  {
    id: 165,
    question: "\"Each of the students _____ a pen.\"",
    options: ["have", "has", "are", "were"],
    answer: 1,
    explanation: "'Each' is grammatically singular, so it takes the singular verb 'has', even when followed by a plural noun.",
    example: "Each of the students has a pen for the examination."
  },
  {
    id: 166,
    question: "\"Neither of the answers _____ correct.\"",
    options: ["are", "were", "is", "have"],
    answer: 2,
    explanation: "'Neither' is traditionally treated as singular in formal grammar, so the singular verb 'is' is appropriate here.",
    example: "Neither of the answers is correct."
  },
  {
    id: 167,
    question: "\"Either of the two plans _____ acceptable.\"",
    options: ["are", "is", "were", "have"],
    answer: 1,
    explanation: "'Either' refers to one of two choices and is normally treated as singular. Therefore, 'is' is correct.",
    example: "Either of the two plans is acceptable to the committee."
  },
  {
    id: 168,
    question: "Which pronoun refers to two persons or things considered separately?",
    options: ["Many", "Both", "Several", "Each"],
    answer: 3,
    explanation: "'Each' refers to the members of a group individually. It can be used for two or more persons or things.",
    example: "Each of the two players received a medal."
  },
  {
    id: 169,
    question: "Which is a reciprocal pronoun?",
    options: ["Himself", "Someone", "Which", "Each other"],
    answer: 3,
    explanation: "'Each other' is a reciprocal pronoun used to express a mutual action or relationship between two or more people or things.",
    example: "The two sisters love each other."
  },
  {
    id: 170,
    question: "Which is a reciprocal pronoun?",
    options: ["Myself", "One another", "Whose", "This"],
    answer: 1,
    explanation: "'One another' is a reciprocal pronoun that expresses a mutual relationship or action among people or things.",
    example: "The team members always encourage one another."
  },
  {
    id: 171,
    question: "\"The two friends helped _____.\"",
    options: ["themselves", "himself", "each other", "itself"],
    answer: 2,
    explanation: "'Each other' is the correct reciprocal pronoun because the two friends helped one another.",
    example: "The two friends helped each other with their homework."
  },
  {
    id: 172,
    question: "\"The team members supported _____.\"",
    options: ["one another", "himself", "itself", "herself"],
    answer: 0,
    explanation: "'One another' expresses mutual support among the members of a team.",
    example: "The team members supported one another during the competition."
  },
  {
    id: 173,
    question: "Which pronoun expresses a mutual relationship?",
    options: ["Demonstrative pronoun", "Interrogative pronoun", "Possessive pronoun", "Reciprocal pronoun"],
    answer: 3,
    explanation: "A reciprocal pronoun expresses a mutual action or relationship between two or more people or things. 'Each other' and 'one another' are reciprocal pronouns.",
    example: "The two neighbours help each other whenever necessary."
  },
  {
    id: 174,
    question: "Which pronoun refers to members individually?",
    options: ["They", "Both", "Each", "Many"],
    answer: 2,
    explanation: "'Each' refers to every member of a group individually rather than considering the group as a whole.",
    example: "Each of the players has a separate locker."
  },
  {
    id: 175,
    question: "\"Each of the girls _____ a prize.\"",
    options: ["have", "has", "are", "were"],
    answer: 1,
    explanation: "'Each' is singular and requires a singular verb. Therefore, 'has' is the correct choice.",
    example: "Each of the girls has a prize for her excellent performance."
  },
  {
    id: 176,
    question: "\"Neither of the boys _____ ready.\"",
    options: ["are", "were", "have", "is"],
    answer: 3,
    explanation: "'Neither' is normally treated as singular in formal grammar, so it takes the singular verb 'is'.",
    example: "Neither of the boys is ready for the competition."
  },
  {
    id: 177,
    question: "\"Either of the answers _____ acceptable.\"",
    options: ["are", "is", "were", "have"],
    answer: 1,
    explanation: "'Either' refers to one of two alternatives and normally takes a singular verb. Therefore, 'is' is correct.",
    example: "Either of the answers is acceptable to the teacher."
  },
  {
    id: 178,
    question: "Which sentence is correct?",
    options: [
      "Each of the students have a book.",
      "Each of the students are having a book.",
      "Each students has a book.",
      "Each of the students has a book."
    ],
    answer: 3,
    explanation: "'Each' is singular and takes the singular verb 'has'. The correct structure is 'Each of the students has a book.'",
    example: "Each of the students has a book for the English class."
  },
  {
    id: 179,
    question: "Which sentence is correct?",
    options: [
      "The two brothers helped himself.",
      "The two brothers helped themselves each.",
      "The two brothers helped each other.",
      "The two brothers helped itself."
    ],
    answer: 2,
    explanation: "'Each other' is the correct reciprocal pronoun because the two brothers performed the action mutually.",
    example: "The two brothers helped each other during the difficult time."
  },
  {
    id: 180,
    question: "Which sentence is correct?",
    options: [
      "The players congratulated himself.",
      "The players congratulated one another.",
      "The players congratulated itself.",
      "The players congratulated herself."
    ],
    answer: 1,
    explanation: "'One another' is the correct reciprocal pronoun because the players congratulated one another.",
    example: "The players congratulated one another after winning the tournament."
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
