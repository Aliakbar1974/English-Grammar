
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 24
// Topic: reflexive Pronouns
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo?fbid=122124982593435742&set=a.122102731923435742";

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
    id: "061",
    question: "Which is a reflexive pronoun?",
    options: ["Himself", "Him", "His", "He"],
    answer: 0,
    explanation: "Himself is a reflexive pronoun. It refers back to the subject when the subject and object are the same person.",
    example: "He hurt himself while playing."
  },
  {
    id: "062",
    question: "Which is the reflexive form of “I”?",
    options: ["Me", "Myself", "My", "Mine"],
    answer: 1,
    explanation: "Myself is the reflexive form of the personal pronoun 'I'. It is used when the subject and object refer to the same person.",
    example: "I prepared myself for the examination."
  },
  {
    id: "063",
    question: "Which is the reflexive form of “you” (singular)?",
    options: ["Yours", "Your", "Yourself", "You"],
    answer: 2,
    explanation: "Yourself is the singular reflexive form of 'you'. It refers to the person being addressed.",
    example: "You should believe in yourself."
  },
  {
    id: "064",
    question: "Which is the reflexive form of “he”?",
    options: ["Him", "His", "He", "Himself"],
    answer: 3,
    explanation: "Himself is the reflexive form of 'he'. It is used when a male person performs an action on himself.",
    example: "He introduced himself to the teacher."
  },
  {
    id: "065",
    question: "Which is the reflexive form of “she”?",
    options: ["Herself", "Her", "Hers", "She"],
    answer: 0,
    explanation: "Herself is the reflexive form of 'she'. It refers back to a female subject.",
    example: "She looked at herself in the mirror."
  },
  {
    id: "066",
    question: "Which is the reflexive form of “it”?",
    options: ["Its", "Itself", "It", "Its own"],
    answer: 1,
    explanation: "Itself is the reflexive form of 'it'. It is used for animals, objects, or other non-human subjects when appropriate.",
    example: "The cat cleaned itself."
  },
  {
    id: "067",
    question: "Which is the reflexive form of “we”?",
    options: ["Us", "Our", "Ourselves", "Ours"],
    answer: 2,
    explanation: "Ourselves is the reflexive form of 'we'. It refers back to the speaker and other people included in 'we'.",
    example: "We enjoyed ourselves at the party."
  },
  {
    id: "068",
    question: "Which is the reflexive form of “they”?",
    options: ["Them", "Their", "Theirs", "Themselves"],
    answer: 3,
    explanation: "Themselves is the reflexive form of 'they'. It refers back to the plural subject.",
    example: "They introduced themselves to the guests."
  },
  {
    id: "069",
    question: "Complete the sentence: “I hurt _____.”",
    options: ["myself", "me", "my", "mine"],
    answer: 0,
    explanation: "Myself is correct because the subject 'I' and the object refer to the same person. A reflexive pronoun is needed.",
    example: "I hurt myself while running."
  },
  {
    id: "070",
    question: "Complete the sentence: “She looked at _____ in the mirror.”",
    options: ["her", "herself", "hers", "she"],
    answer: 1,
    explanation: "Herself is correct because 'she' is both the subject and the person being looked at.",
    example: "She looked at herself in the mirror."
  },
  {
    id: "071",
    question: "Complete the sentence: “He blamed _____ for the mistake.”",
    options: ["him", "his", "himself", "he"],
    answer: 2,
    explanation: "Himself is correct because the subject 'he' blames the same person who made the mistake.",
    example: "He blamed himself for the failure."
  },
  {
    id: "072",
    question: "Complete the sentence: “We enjoyed _____ at the party.”",
    options: ["us", "our", "ours", "ourselves"],
    answer: 3,
    explanation: "Ourselves is correct because it refers back to the subject 'we'. The verb 'enjoy' commonly takes a reflexive pronoun in this expression.",
    example: "We enjoyed ourselves at the party."
  },
  {
    id: "073",
    question: "Complete the sentence: “They introduced _____ to the guests.”",
    options: ["them", "their", "theirs", "themselves"],
    answer: 3,
    explanation: "Themselves is correct because the subject 'they' performs the action of introducing the same people.",
    example: "They introduced themselves to the guests."
  },
  {
    id: "074",
    question: "Complete the sentence: “You should do it _____.”",
    options: ["yourself", "yours", "your", "you"],
    answer: 0,
    explanation: "Yourself is correct because it emphasizes that the person being addressed should do the task without help.",
    example: "You should complete the work yourself."
  },
  {
    id: "075",
    question: "Which sentence is correct?",
    options: [
      "He hurt him.",
      "He hurt himself.",
      "He hurt his.",
      "He hurt he."
    ],
    answer: 1,
    explanation: "He hurt himself is correct when the person who was hurt is the same person who performed the action. 'Himself' is the reflexive pronoun.",
    example: "He hurt himself while playing football."
  },
  {
    id: "076",
    question: "Which sentence is correct?",
    options: [
      "She taught her English herselfs.",
      "She taught hers English.",
      "She taught herself English.",
      "She taught she English."
    ],
    answer: 2,
    explanation: "She taught herself English is grammatically correct. 'Herself' is used as the reflexive object of the verb 'taught'.",
    example: "She taught herself English at home."
  },
  {
    id: "077",
    question: "Which sentence uses a reflexive pronoun for emphasis?",
    options: [
      "Me completed the task.",
      "I my completed the task.",
      "Mine completed the task.",
      "I myself completed the task."
    ],
    answer: 3,
    explanation: "In this sentence, 'myself' is used as an emphatic pronoun to emphasize that the speaker personally completed the task.",
    example: "I myself completed the entire project."
  },
  {
    id: "078",
    question: "In “The principal himself attended the meeting,” “himself” is used for ____.",
    options: ["Emphasis", "Possession", "Question", "Comparison"],
    answer: 0,
    explanation: "Himself is used for emphasis in this sentence. It stresses that the principal personally attended the meeting.",
    example: "The principal himself welcomed the students."
  },
  {
    id: "079",
    question: "Which sentence is correct?",
    options: [
      "We our solved the problem.",
      "We ourselves solved the problem.",
      "Us ourselves solved the problem.",
      "We ours solved the problem."
    ],
    answer: 1,
    explanation: "We ourselves solved the problem is correct. 'Ourselves' emphasizes that we personally solved the problem.",
    example: "We ourselves completed the assignment."
  },
  {
    id: "080",
    question: "Which sentence is correct?",
    options: [
      "Them themselves built the house.",
      "They theirselves built the house.",
      "They themselves built the house.",
      "Their themselves built the house."
    ],
    answer: 2,
    explanation: "They themselves built the house is correct. 'Themselves' is the standard plural reflexive and emphatic form of 'they'.",
    example: "They themselves built their new house."
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
