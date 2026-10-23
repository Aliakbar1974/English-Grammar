
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
    question: "Which word names a precious metal commonly used to make jewellery?",
    options: ["Jeweller", "Ornament", "Gold", "Beauty"],
    answer: 2,
    explanation: "Gold is a material noun because it names a physical substance used to make objects.<br><br><strong>Example:</strong> Gold is a precious metal."
  },
  {
    id: "082",
    question: "Which word names a liquid substance essential for life?",
    options: ["Water", "Swim", "Wet", "River"],
    answer: 0,
    explanation: "Water is a material noun because it names a physical substance rather than an action or quality.<br><br><strong>Example:</strong> Clean water is essential for survival."
  },
  {
    id: "083",
    question: "Which option names a metal used to make tools and machinery?",
    options: ["Irony", "Strength", "Strong", "Iron"],
    answer: 3,
    explanation: "Iron is a material noun because it names a metal substance.<br><br><strong>Example:</strong> Iron is used to manufacture many tools."
  },
  {
    id: "084",
    question: "Which material is obtained from trees and often used to make furniture?",
    options: ["Forest", "Wood", "Garden", "Tree"],
    answer: 1,
    explanation: "Wood is a material noun because it names a substance obtained from trees and used to make objects.<br><br><strong>Example:</strong> The table is made of wood."
  },
  {
    id: "085",
    question: "Which natural fibre is used to make many types of clothing?",
    options: ["Tailor", "Shirt", "Cotton", "Clothing"],
    answer: 2,
    explanation: "Cotton is a material noun because it names a fibre used to manufacture fabric.<br><br><strong>Example:</strong> This shirt is made of cotton."
  },
  {
    id: "086",
    question: "Which precious metal is commonly used in coins and ornaments?",
    options: ["Silver", "Jeweller", "Beauty", "Necklace"],
    answer: 0,
    explanation: "Silver is a material noun because it names a metallic substance.<br><br><strong>Example:</strong> The necklace is made of silver."
  },
  {
    id: "087",
    question: "Which word names a liquid food substance produced by mammals?",
    options: ["Farmer", "Dairy", "Cow", "Milk"],
    answer: 3,
    explanation: "Milk is a material noun because it names a physical substance used as food.<br><br><strong>Example:</strong> Milk is rich in calcium."
  },
  {
    id: "088",
    question: "Which grain is commonly cooked as a staple food in Bangladesh?",
    options: ["Plate", "Rice", "Restaurant", "Meal"],
    answer: 1,
    explanation: "Rice is a material noun when it refers to the grain as a substance or food material.<br><br><strong>Example:</strong> Rice is cooked in many households every day."
  },
  {
    id: "089",
    question: "Which substance is often added to tea to make it sweet?",
    options: ["Sweetness", "Sweetly", "Sugar", "Sweet"],
    answer: 2,
    explanation: "Sugar is a material noun because it names a substance used to sweeten food and drinks.<br><br><strong>Example:</strong> Add a little sugar to the tea."
  },
  {
    id: "090",
    question: "Which alloy of iron is widely used in bridges and buildings?",
    options: ["Steel", "Engineer", "Strength", "Building"],
    answer: 0,
    explanation: "Steel is a material noun because it names an alloy used as a construction material.<br><br><strong>Example:</strong> The bridge is supported by steel beams."
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
    question: "Which word names a quality rather than a physical material?",
    options: ["Water", "Happiness", "Rice", "Milk"],
    answer: 1,
    explanation: "Happiness is an abstract noun because it names a feeling or state, not a physical substance.<br><br><strong>Example:</strong> Happiness can come from helping others."
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
    question: "Which metal is commonly used in electrical wiring?",
    options: ["Electrician", "Wire", "Current", "Copper"],
    answer: 3,
    explanation: "Copper is a material noun because it names a metal used to make many electrical wires.<br><br><strong>Example:</strong> Copper is a good conductor of electricity."
  },
  {
    id: "097",
    question: "Which material is refined to produce fuels such as petrol and diesel?",
    options: ["Coal", "Oil", "Engine", "Smoke"],
    answer: 1,
    explanation: "Oil is a material noun because it names a substance from which several fuels are produced.<br><br><strong>Example:</strong> Crude oil is processed in a refinery."
  },
  {
    id: "098",
    question: "Which solid fossil fuel is classified as a material noun?",
    options: ["Mine", "Miner", "Coal", "Smoke"],
    answer: 2,
    explanation: "Coal is a material noun because it names a natural substance used as a fuel.<br><br><strong>Example:</strong> Coal has been used to produce energy."
  },
  {
    id: "099",
    question: "Which animal-derived material is commonly used to make shoes and belts?",
    options: ["Leather", "Shoemaker", "Shoe", "Belt"],
    answer: 0,
    explanation: "Leather is a material noun because it names a material made from treated animal hide.<br><br><strong>Example:</strong> The belt is made of leather."
  },
  {
    id: "100",
    question: "Which natural substance is commonly used to make pottery and bricks?",
    options: ["Potter", "Vase", "Brick", "Clay"],
    answer: 3,
    explanation: "Clay is a material noun because it names a natural substance used to make pottery and bricks.<br><br><strong>Example:</strong> The potter shaped the clay into a bowl."
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
