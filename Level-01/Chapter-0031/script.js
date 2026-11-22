
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 31
// Topic: Adjectives
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122127320559435742&set=a.122102731923435742";

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
    id: "ADJ001",
    question: "Which word is an adjective in the sentence: “She has a beautiful dress”?",
    options: ["beautiful", "She", "has", "dress"],
    answer: 0,
    explanation: "Beautiful একটি adjective, কারণ এটি dress নামক noun-টির গুণ বা বৈশিষ্ট্য প্রকাশ করে।",
    example: "She has a beautiful dress. এখানে beautiful শব্দটি dress-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ002",
    question: "An adjective mainly modifies a—",
    options: ["Verb", "Noun or pronoun", "Preposition", "Conjunction"],
    answer: 1,
    explanation: "Adjective সাধারণত noun অথবা pronoun-এর গুণ, অবস্থা বা বৈশিষ্ট্য প্রকাশ করে।",
    example: "She is intelligent. এখানে intelligent শব্দটি She pronoun-টির বৈশিষ্ট্য প্রকাশ করছে।"
  },
  {
    id: "ADJ003",
    question: "Which word is an adjective in “He is a clever boy”?",
    options: ["He", "is", "clever", "boy"],
    answer: 2,
    explanation: "Clever একটি adjective, কারণ এটি boy-এর গুণ প্রকাশ করছে।",
    example: "He is a clever boy. এখানে clever শব্দটি boy-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ004",
    question: "Which sentence contains an adjective?",
    options: [
      "He runs quickly.",
      "She sings well.",
      "He works carefully.",
      "They have a large house."
    ],
    answer: 3,
    explanation: "They have a large house বাক্যে large একটি adjective, যা house-কে বর্ণনা করছে।",
    example: "They have a large house. এখানে large শব্দটি house-এর আকার বোঝাচ্ছে।"
  },
  {
    id: "ADJ005",
    question: "Which word describes the colour of the car in “The red car is fast”?",
options: ["red", "car", "is", "fast"],
answer: 0,
explanation: "Red একটি adjective, যা car-এর রং প্রকাশ করছে।",
example: "The red car is fast. এখানে red শব্দটি car-এর রং বোঝাচ্ছে।"
  },
  {
    id: "ADJ006",
    question: "In “I saw a tall man,” the word “tall” is a/an—",
    options: ["Noun", "Adjective", "Verb", "Adverb"],
    answer: 1,
    explanation: "Tall একটি adjective, কারণ এটি man-এর উচ্চতা বা বৈশিষ্ট্য প্রকাশ করছে।",
    example: "I saw a tall man. এখানে tall শব্দটি man-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ007",
    question: "Which word is an adjective?",
    options: ["Slowly", "Happiness", "Honest", "Run"],
    answer: 2,
    explanation: "Honest একটি adjective, যা কোনো ব্যক্তির সততার গুণ প্রকাশ করে।",
    example: "He is an honest man. এখানে honest শব্দটি man-এর গুণ প্রকাশ করছে।"
  },
  {
    id: "ADJ008",
    question: "“The little girl is sleeping.” Here “little” modifies—",
    options: ["sleeping", "the", "is", "girl"],
    answer: 3,
    explanation: "Little একটি adjective, যা girl-কে বর্ণনা করছে।",
    example: "The little girl is sleeping. এখানে little শব্দটি girl-এর বয়স বা আকারের ধারণা দিচ্ছে।"
  },
  {
    id: "ADJ009",
    question: "Which sentence has two adjectives?",
    options: [
      "He bought a beautiful red car.",
      "He drives carefully.",
      "She sings beautifully.",
      "They arrived yesterday."
    ],
    answer: 0,
    explanation: "Beautiful এবং red—দুটি adjective-ই car নামক noun-টিকে বর্ণনা করছে।",
    example: "He bought a beautiful red car. এখানে beautiful ও red দুটি adjective।"
  },
  {
    id: "ADJ010",
    question: "Which word is NOT an adjective?",
    options: ["Happy", "Quickly", "Beautiful", "Clever"],
    answer: 1,
    explanation: "Quickly একটি adverb, adjective নয়। এটি সাধারণত কোনো কাজ কীভাবে সম্পন্ন হয় তা বোঝায়।",
    example: "He runs quickly. এখানে quickly শব্দটি runs verb-টিকে বর্ণনা করছে।"
  },
  {
    id: "ADJ011",
    question: "In “The old man walked slowly,” which word is an adjective?",
    options: ["man", "walked", "old", "slowly"],
    answer: 2,
    explanation: "Old একটি adjective, যা man-এর বয়স বোঝাচ্ছে।",
    example: "The old man walked slowly. এখানে old শব্দটি man-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ012",
    question: "Which word describes “flower” in “This is a lovely flower”?",
    options: ["This", "is", "flower", "lovely"],
    answer: 3,
    explanation: "Lovely একটি adjective, যা flower-এর সৌন্দর্য বা বৈশিষ্ট্য প্রকাশ করছে।",
    example: "This is a lovely flower. এখানে lovely শব্দটি flower-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ013",
    question: "“The sky is blue.” Here “blue” is a/an—",
    options: ["Adjective", "Noun", "Verb", "Adverb"],
    answer: 0,
    explanation: "Blue একটি adjective, যা sky-এর রং প্রকাশ করছে।",
    example: "The sky is blue. এখানে blue হলো subject complement হিসেবে ব্যবহৃত adjective।"
  },
  {
    id: "ADJ014",
    question: "Which word is used to describe a person?",
    options: ["Run", "Honest", "Slowly", "School"],
    answer: 1,
    explanation: "Honest একটি adjective, যা কোনো ব্যক্তির সততার গুণ প্রকাশ করে।",
    example: "Rina is honest. এখানে honest শব্দটি Rina-র গুণ প্রকাশ করছে।"
  },
  {
    id: "ADJ015",
    question: "In “He lives in a small village,” “small” describes—",
    options: ["He", "lives", "village", "in"],
    answer: 2,
    explanation: "Small একটি adjective, যা village-এর আকার বোঝাচ্ছে।",
    example: "He lives in a small village. এখানে small শব্দটি village-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ016",
    question: "Which sentence contains the adjective “kind”?",
    options: [
      "He speaks kindly.",
      "He walked slowly.",
      "He works hard.",
      "He is a kind man."
    ],
    answer: 3,
    explanation: "He is a kind man বাক্যে kind একটি adjective, যা man-এর গুণ প্রকাশ করছে।",
    example: "He is a kind man. এখানে kind শব্দটি man-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ017",
    question: "Which word is an adjective in “The water is cold”?",
    options: ["cold", "water", "is", "the"],
    answer: 0,
    explanation: "Cold একটি adjective, যা water-এর অবস্থা বা তাপমাত্রা প্রকাশ করছে।",
    example: "The water is cold. এখানে cold শব্দটি water-এর অবস্থা বোঝাচ্ছে।"
  },
  {
    id: "ADJ018",
    question: "An adjective can describe—",
    options: ["Only people", "Nouns and pronouns", "Only things", "Only verbs"],
    answer: 1,
    explanation: "Adjective noun ও pronoun উভয়ের গুণ, অবস্থা বা বৈশিষ্ট্য প্রকাশ করতে পারে।",
    example: "A beautiful flower and She is beautiful. দুটি বাক্যেই adjective ব্যবহৃত হয়েছে।"
  },
  {
    id: "ADJ019",
    question: "Which word is an adjective?",
    options: ["Dangerously", "Danger", "Dangerous", "Endanger"],
    answer: 2,
    explanation: "Dangerous একটি adjective, যা বিপজ্জনক অবস্থা বা বৈশিষ্ট্য বোঝায়।",
    example: "This is a dangerous road. এখানে dangerous শব্দটি road-কে বর্ণনা করছে।"
  },
  {
    id: "ADJ020",
    question: "Which pair contains two descriptive adjectives in “My new shoes are comfortable”?",
options: [
  "My, shoes",
  "Shoes, comfortable",
  "Are, shoes",
  "New, comfortable"
],
answer: 3,
explanation: "New এবং comfortable—দুটি descriptive adjective। New শব্দটি shoes-এর নতুনত্ব এবং comfortable শব্দটি shoes-এর আরামদায়ক অবস্থা প্রকাশ করছে।",
example: "My new shoes are comfortable. এখানে new ও comfortable দুটি descriptive adjective।"
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
