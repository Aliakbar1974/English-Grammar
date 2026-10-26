
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 17
// Topic: Plurals
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122122890879435742&set=a.122102731923435742";

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
        id: "121",
        question: "What is the plural of “book”?",
        options: ["Books", "Bookes", "Bookies", "Book"],
        answer: 0,
        explanation: "Book-এর plural হলো Books। অধিকাংশ সাধারণ noun-এর শেষে s যোগ করে plural তৈরি করা হয়।",
        example: "I read many interesting books."
    },
    {
        id: "122",
        question: "What is the plural of “box”?",
        options: ["Boxs", "Boxes", "Boxies", "Boxen"],
        answer: 1,
        explanation: "সাধারণত s, x, z, ch বা sh দিয়ে শেষ হওয়া noun-এর শেষে es যোগ করে plural তৈরি করা হয়। Box থেকে Boxes হয়।",
        example: "He packed all the boxes."
    },
    {
        id: "123",
        question: "What is the plural of “class”?",
        options: ["Class", "Classs", "Classes", "Classies"],
        answer: 2,
        explanation: "Class-এর শেষে ss থাকায় es যোগ করে Classes হয়।",
        example: "All the classes started on time."
    },
    {
        id: "124",
        question: "What is the plural of “baby”?",
        options: ["Babys", "Babyes", "Babes", "Babies"],
        answer: 3,
        explanation: "Consonant + y দিয়ে শেষ হওয়া noun-এর y পরিবর্তন করে ies যোগ করা হয়। Baby থেকে Babies হয়।",
        example: "The babies are sleeping peacefully."
    },
    {
        id: "125",
        question: "What is the plural of “city”?",
        options: ["Cities", "Citys", "Cityes", "Citiez"],
        answer: 0,
        explanation: "City-এর আগে consonant থাকায় y পরিবর্তন করে ies যোগ করা হয়। তাই plural হলো Cities।",
        example: "London and Paris are major European cities."
    },
    {
        id: "126",
        question: "What is the plural of “boy”?",
        options: ["Boies", "Boys", "Boyes", "Boy"],
        answer: 1,
        explanation: "Vowel + y দিয়ে শেষ হওয়া noun-এর ক্ষেত্রে সাধারণত শুধু s যোগ করা হয়। Boy থেকে Boys হয়।",
        example: "The boys are playing football."
    },
    {
        id: "127",
        question: "What is the plural of “leaf”?",
        options: ["Leafs", "Leafes", "Leaves", "Leavs"],
        answer: 2,
        explanation: "অনেক f দিয়ে শেষ হওয়া noun-এর f পরিবর্তন করে ves যোগ করা হয়। Leaf থেকে Leaves হয়। তবে সব f-ending noun-এ এই নিয়ম প্রযোজ্য নয়।",
        example: "The trees shed their leaves in autumn."
    },
    {
        id: "128",
        question: "What is the plural of “knife”?",
        options: ["Knifes", "Knifees", "Knifs", "Knives"],
        answer: 3,
        explanation: "Knife-এর fe পরিবর্তন করে ves যোগ করা হয়। তাই plural হলো Knives।",
        example: "Keep the sharp knives away from children."
    },
    {
        id: "129",
        question: "What is the plural of “wife”?",
        options: ["Wives", "Wifes", "Wifees", "Wivs"],
        answer: 0,
        explanation: "Wife-এর fe পরিবর্তন করে ves যোগ করা হয়। তাই plural হলো Wives।",
        example: "Their wives attended the annual conference."
    },
    {
        id: "130",
        question: "What is the plural of “life”?",
        options: ["Lifes", "Lives", "Lifees", "Livs"],
        answer: 1,
        explanation: "Life-এর plural হলো Lives। এখানে fe পরিবর্তিত হয়ে ves হয়েছে।",
        example: "Firefighters risk their lives to save others."
    },
    {
        id: "131",
        question: "What is the plural of “child”?",
        options: ["Childs", "Childes", "Children", "Childrens"],
        answer: 2,
        explanation: "Child একটি irregular noun। এর plural Children; এখানে সাধারণ s বা es যোগ করার নিয়ম প্রযোজ্য নয়।",
        example: "The children are playing in the park."
    },
    {
        id: "132",
        question: "What is the plural of “man”?",
        options: ["Mans", "Mens", "Manes", "Men"],
        answer: 3,
        explanation: "Man-এর plural Men। এটি একটি irregular plural, যেখানে শব্দের vowel পরিবর্তিত হয়।",
        example: "Three men were standing near the building."
    },
    {
        id: "133",
        question: "What is the plural of “woman”?",
        options: ["Women", "Womens", "Womans", "Womanses"],
        answer: 0,
        explanation: "Woman-এর irregular plural হলো Women। উচ্চারণেও woman ও women-এর পার্থক্য রয়েছে।",
        example: "Women play important roles in society."
    },
    {
        id: "134",
        question: "What is the plural of “foot”?",
        options: ["Foots", "Feet", "Feets", "Footes"],
        answer: 1,
        explanation: "Foot-এর irregular plural হলো Feet।",
        example: "He injured both of his feet during the match."
    },
    {
        id: "135",
        question: "What is the plural of “tooth”?",
        options: ["Toothes", "Teaths", "Teeth", "Tooths"],
        answer: 2,
        explanation: "Tooth-এর irregular plural হলো Teeth।",
        example: "You should brush your teeth twice a day."
    },
    {
        id: "136",
        question: "What is the plural of “mouse”?",
        options: ["Mouses", "Meese", "Mousees", "Mice"],
        answer: 3,
        explanation: "Mouse-এর সাধারণ irregular plural হলো Mice। কম্পিউটারের pointing device বোঝাতেও mice এবং mouses—দুটিই ব্যবহৃত হতে পারে।",
        example: "The cat caught two mice in the kitchen."
    },
    {
        id: "137",
        question: "What is the plural of “goose”?",
        options: ["Geese", "Gooses", "Geeses", "Goose"],
        answer: 0,
        explanation: "Goose-এর irregular plural হলো Geese।",
        example: "A flock of geese was flying overhead."
    },
    {
        id: "138",
        question: "What is the plural of “ox”?",
        options: ["Oxes", "Oxen", "Oxs", "Oxies"],
        answer: 1,
        explanation: "Ox-এর প্রচলিত plural হলো Oxen। এটি একটি irregular plural form।",
        example: "The farmer used two oxen to pull the cart."
    },
    {
        id: "139",
        question: "What is the plural of “phenomenon”?",
        options: ["Phenomenons", "Phenomenas", "Phenomena", "Phenomen"],
        answer: 2,
        explanation: "Phenomenon-এর প্রচলিত formal plural হলো Phenomena। শব্দটি গ্রিক উৎস থেকে এসেছে।",
        example: "The northern lights are a fascinating natural phenomenon. Many such phenomena occur in nature."
    },
    {
        id: "140",
        question: "What is the plural of “criterion”?",
        options: ["Criterions", "Criterias", "Criteriones", "Criteria"],
        answer: 3,
        explanation: "Criterion-এর প্রচলিত formal plural হলো Criteria। Criterion একবচন, আর Criteria বহুবচন।",
        example: "Meeting all the criteria is necessary for selection."
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
