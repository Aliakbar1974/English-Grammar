
"use strict";

// ============================================================
// ENGLISH Grammer Quiz 15
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122122373223435742&set=a.122102731923435742";

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
    id: "081",
    question: "Which is a material noun?",
    options: ["A person who gives legal advice", "A person who travels frequently", "Gold", "A person who enjoys public attention"],
    answer: 2,
    explanation: "Gold is a material noun because it refers to a substance or matter from which things are made.<br><br><strong>Example:</strong> Gold is a precious metal."
  },
  {
    id: "082",
    question: "Which is a material noun?",
    options: ["Water", "Swimming", "Wet", "River"],
    answer: 0,
    explanation: "Water is a material noun as it represents a physical substance.<br><br><strong>Example:</strong> Water is essential for survival."
  },
  {
    id: "083",
    question: "Which is a material noun?",
    options: ["Irony", "Strong", "Strength", "Iron"],
    answer: 3,
    explanation: "Iron is a material noun because it denotes a metal substance.<br><br><strong>Example:</strong> Iron is a strong and durable metal."
  },
  {
    id: "084",
    question: "Which is a material noun?",
    options: ["Forest", "Wood", "Garden", "Tree"],
    answer: 1,
    explanation: "Wood is a material noun as it is a substance obtained from trees.<br><br><strong>Example:</strong> The chair is made of wood."
  },
  {
    id: "085",
    question: "Which is a material noun?",
    options: ["Tailor", "Clothes", "Cotton", "Shirt"],
    answer: 2,
    explanation: "Cotton is a material noun because it is a raw fiber used to make clothes.<br><br><strong>Example:</strong> Cotton grows in warm climates."
  },
  {
    id: "086",
    question: "Which is a material noun?",
    options: ["Silver", "Jeweller", "Beauty", "Necklace"],
    answer: 0,
    explanation: "Silver is a material noun representing a precious metallic substance.<br><br><strong>Example:</strong> Silver is used to make coins and ornaments."
  },
  {
    id: "087",
    question: "Which is a material noun?",
    options: ["Farmer", "Dairy", "Cow", "Milk"],
    answer: 3,
    explanation: "Milk is a material noun as it is a physical substance or liquid food.<br><br><strong>Example:</strong> Milk is rich in calcium."
  },
  {
    id: "088",
    question: "Which is a material noun?",
    options: ["Plate", "Rice", "Restaurant", "Meal"],
    answer: 1,
    explanation: "Rice is a material noun representing a food grain substance.<br><br><strong>Example:</strong> Rice is the staple food for many people."
  },
  {
    id: "089",
    question: "Which is a material noun?",
    options: ["Sweetness", "Sweetly", "Sugar", "Sweet"],
    answer: 2,
    explanation: "Sugar is a material noun because it is a substance used to sweeten food.<br><br><strong>Example:</strong> Add some sugar to your tea."
  },
  {
    id: "090",
    question: "Which is a material noun?",
    options: ["Steel", "Engineer", "Strength", "Building"],
    answer: 0,
    explanation: "Steel is a material noun as it is an alloy of iron used in construction.<br><br><strong>Example:</strong> Modern bridges are built using steel."
  },
  {
    id: "091",
    question: "Which is NOT a material noun?",
    options: ["Gold", "Iron", "Silver", "Honesty"],
    answer: 3,
    explanation: "Honesty is an abstract noun, not a material noun, because it denotes a quality or state.<br><br><strong>Example:</strong> Honesty is the best policy."
  },
  {
    id: "092",
    question: "Which is NOT a material noun?",
    options: ["Water", "Happiness", "Rice", "Milk"],
    answer: 1,
    explanation: "Happiness is an abstract noun representing a feeling or state of mind, unlike material nouns.<br><br><strong>Example:</strong> Money cannot buy true happiness."
  },
  {
    id: "093",
    question: "“The ring is made of gold.” What type of noun is “gold”?",
    options: ["Proper", "Abstract", "Collective", "Material"],
    answer: 3,
    explanation: "Gold is a material noun because the ring is made out of this substance.<br><br><strong>Example:</strong> Material nouns denote the matter or substance of things."
  },
  {
    id: "094",
    question: "“The table is made of wood.” What type of noun is “wood”?",
    options: ["Material", "Abstract", "Proper", "Collective"],
    answer: 0,
    explanation: "Wood is a material noun as it is the substance used to manufacture the table.<br><br><strong>Example:</strong> Furniture is usually made of wood."
  },
  {
    id: "095",
    question: "Which noun names a substance from which things may be made?",
    options: ["Abstract noun", "Material noun", "Proper noun", "Collective noun"],
    answer: 1,
    explanation: "A material noun refers to a matter or substance of which things are made.<br><br><strong>Example:</strong> Examples include gold, iron, wood, and cotton."
  },
  {
    id: "096",
    question: "Which is a material noun?",
    options: ["Machine", "Factory", "Worker", "Copper"],
    answer: 3,
    explanation: "Copper is a material noun because it is a chemical element and metal substance.<br><br><strong>Example:</strong> Copper is an excellent conductor of electricity."
  },
  {
    id: "097",
    question: "Which is a material noun?",
    options: ["Engine", "Oil", "Driver", "Road"],
    answer: 1,
    explanation: "Oil is a material noun as it is a liquid substance used for various purposes.<br><br><strong>Example:</strong> Olive oil is good for health."
  },
  {
    id: "098",
    question: "Which is a material noun?",
    options: ["Mine", "Miner", "Coal", "Industry"],
    answer: 2,
    explanation: "Coal is a material noun because it is a combustible black rock substance.<br><br><strong>Example:</strong> Coal is used to generate electricity."
  },
  {
    id: "099",
    question: "Which is a material noun?",
    options: ["Leather", "Shoe", "Foot", "Fashion"],
    answer: 0,
    explanation: "Leather is a material noun as it is processed animal skin used to make goods.<br><br><strong>Example:</strong> This jacket is made of genuine leather."
  },
  {
    id: "100",
    question: "Which is a material noun?",
    options: ["Baker", "Bakery", "Hunger", "Bread"],
    answer: 3,
    explanation: "Bread is considered a material noun in terms of a substance/food item made from flour.<br><br><strong>Example:</strong> He ate a slice of bread for breakfast."
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
        optionsElement.innerHTML = "";
    }

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.innerHTML = "";

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
// SHOW EXAMPLE AND EXPLANATION
// ============================================================

function showFeedbackContent(q) {
    if (!exampleText) return;

    const exampleHeading = document.createElement("strong");
    exampleHeading.textContent = "Example:";

    const exampleParagraph = document.createElement("p");
    exampleParagraph.textContent = q.example;

    const explanationHeading = document.createElement("strong");
    explanationHeading.textContent = "Explanation:";

    const explanationParagraph = document.createElement("p");
    explanationParagraph.textContent = q.explanation;

    exampleText.replaceChildren(
        exampleHeading,
        exampleParagraph,
        explanationHeading,
        explanationParagraph
    );
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

        if (selectedMode === "learning" && feedbackElement) {
            feedbackElement.style.display = "block";
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
                "🌟 Very Good! Keep improving your Vocabulary.";
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
            "and follow our page for more vocabulary quizzes.";

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

    if (optionsElement) optionsElement.innerHTML = "";
    if (feedbackElement) feedbackElement.style.display = "none";

    playSound("start");
}

// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();

// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (
            Number.isInteger(q.answer) &&
            q.answer >= 0 &&
            q.answer <= 3
        ) {
            distribution[q.answer]++;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );

    const invalidQuestions = quizData.filter(q =>
        !Array.isArray(q.options) ||
        q.options.length !== 4 ||
        !Number.isInteger(q.answer) ||
        q.answer < 0 ||
        q.answer > 3 ||
        !q.options[q.answer] ||
        !q.example ||
        !q.explanation
    );

    if (invalidQuestions.length > 0) {
        console.error("Quiz data validation errors:", invalidQuestions);
    } else {
        console.log("Quiz data validation passed.");
    }
})();
