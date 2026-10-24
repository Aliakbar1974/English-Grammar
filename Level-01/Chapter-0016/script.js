
"use strict";

// ============================================================
// ENGLISH Grammer Quiz 16
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122122583883435742&set=a.122102731923435742";

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
    id: "101",
    question: "Which is a countable noun?",
    options: ["Water", "Information", "Book", "Advice"],
    answer: 2,
    explanation: "Book is a countable noun because we can count it. We can say one book, two books, or three books.",
    example: "I bought three books from the school library."
  },
  {
    id: "102",
    question: "Which is an uncountable noun?",
    options: ["Apple", "Information", "Chair", "Pen"],
    answer: 1,
    explanation: "Information is an uncountable noun. We do not normally use a number directly before it. We can say 'a piece of information' when referring to one item.",
    example: "The teacher gave us some useful information."
  },
  {
    id: "103",
    question: "Which is an uncountable noun?",
    options: ["Advice", "Suggestion", "Book", "Chair"],
    answer: 0,
    explanation: "Advice is an uncountable noun. We do not normally say 'an advice' or 'two advices'. We can use 'a piece of advice' instead.",
    example: "My father gave me a useful piece of advice."
  },
  {
    id: "104",
    question: "Which is a countable noun?",
    options: ["Furniture", "Luggage", "Information", "Chair"],
    answer: 3,
    explanation: "Chair is a countable noun because individual chairs can be counted. Furniture, luggage, and information are generally uncountable nouns.",
    example: "There are four chairs around the dining table."
  },
  {
    id: "105",
    question: "Which is generally an uncountable noun?",
    options: ["Rice", "Apple", "Orange", "Egg"],
    answer: 0,
    explanation: "Rice is generally an uncountable noun when referring to the food in general. We can use a measure such as 'a bowl of rice' to express an amount.",
    example: "We usually eat rice with vegetables for lunch."
  },
  {
    id: "106",
    question: "Which is generally an uncountable noun?",
    options: ["Loaf", "Bread", "Cake", "Biscuit"],
    answer: 1,
    explanation: "Bread is generally an uncountable noun. To count individual portions, we can say 'a loaf of bread' or 'two slices of bread'.",
    example: "She bought a loaf of bread from the bakery."
  },
  {
    id: "107",
    question: "Which is an uncountable noun?",
    options: ["Fact", "Book", "Knowledge", "Lesson"],
    answer: 2,
    explanation: "Knowledge is an uncountable abstract noun. It refers to the understanding or information a person has gained.",
    example: "Reading regularly helps us gain knowledge."
  },
  {
    id: "108",
    question: "Which is an uncountable noun?",
    options: ["Machine", "Computer", "Device", "Equipment"],
    answer: 3,
    explanation: "Equipment is an uncountable noun. We do not normally say 'an equipment' or 'equipments'. We can say 'a piece of equipment' when counting individual items.",
    example: "The laboratory has modern equipment for scientific experiments."
  },
  {
    id: "109",
    question: "Which is an uncountable noun?",
    options: ["Furniture", "Table", "Chair", "Desk"],
    answer: 0,
    explanation: "Furniture is an uncountable noun that refers to items such as tables, chairs, and desks collectively. The individual items are countable.",
    example: "We bought some new furniture for our living room."
  },
  {
    id: "110",
    question: "Which is an uncountable noun?",
    options: ["Bag", "Luggage", "Suitcase", "Box"],
    answer: 1,
    explanation: "Luggage is an uncountable noun. Individual items can be counted using expressions such as 'two bags' or 'three suitcases'.",
    example: "We have too much luggage to carry on our own."
  },
  {
    id: "111",
    question: "Which is a countable noun?",
    options: ["Money", "Advice", "Coin", "Information"],
    answer: 2,
    explanation: "Coin is a countable noun because individual coins can be counted. Money, advice, and information are generally uncountable nouns.",
    example: "I found two coins under the sofa."
  },
  {
    id: "112",
    question: "Which is a countable noun?",
    options: ["Milk", "Water", "Sugar", "Bottle"],
    answer: 3,
    explanation: "Bottle is a countable noun. We can say 'one bottle' or 'two bottles'. Milk, water, and sugar are generally uncountable when referring to them as substances.",
    example: "Please put three bottles of water in the refrigerator."
  },
  {
    id: "113",
    question: "Which is an uncountable noun?",
    options: ["Traffic", "Car", "Bus", "Bicycle"],
    answer: 0,
    explanation: "Traffic is generally an uncountable noun when referring to the movement of vehicles on roads. We say 'much traffic' or 'a lot of traffic', not normally 'many traffics'.",
    example: "There is a lot of traffic on this road during rush hour."
  },
  {
    id: "114",
    question: "Which is an uncountable noun?",
    options: ["Newspaper", "News", "Article", "Report"],
    answer: 1,
    explanation: "News is an uncountable noun, even though it ends in '-s'. It normally takes a singular verb, as in 'The news is good'.",
    example: "The news about the school competition is exciting."
  },
  {
    id: "115",
    question: "Which is a countable noun?",
    options: ["Work", "Information", "Advice", "Job"],
    answer: 3,
    explanation: "Job is a countable noun. We can say 'a job', 'two jobs', or 'many jobs'. Work is generally uncountable when referring to employment or tasks in general.",
    example: "She applied for three jobs last week."
  },
  {
    id: "116",
    question: "Which is generally an uncountable noun?",
    options: ["Exercise", "Question", "Homework", "Task"],
    answer: 2,
    explanation: "Homework is generally an uncountable noun. We say 'some homework' or 'a lot of homework', rather than 'homeworks'. Individual activities can be called assignments or tasks.",
    example: "I have a lot of homework to complete tonight."
  },
  {
    id: "117",
    question: "Which is a countable noun?",
    options: ["Research", "Book", "Information", "Knowledge"],
    answer: 1,
    explanation: "Book is a countable noun because we can count individual books. Research, information, and knowledge are generally uncountable nouns when used in their usual senses.",
    example: "I borrowed two books from the library yesterday."
  },
  {
    id: "118",
    question: "Which is generally an uncountable noun?",
    options: ["Achievement", "Result", "Success", "Progress"],
    answer: 3,
    explanation: "Progress is generally an uncountable noun. We say 'some progress' or 'a lot of progress', rather than normally using 'progresses' to mean general improvement.",
    example: "Rina has made great progress in English this year."
  },
  {
    id: "119",
    question: "Which is a countable noun?",
    options: ["Suggestion", "Advice", "Information", "Knowledge"],
    answer: 0,
    explanation: "Suggestion is a countable noun. We can say 'a suggestion' or 'several suggestions'. Advice, information, and knowledge are generally uncountable nouns.",
    example: "The teacher gave us two suggestions for improving our writing."
  },
  {
    id: "120",
    question: "Which is generally an uncountable noun?",
    options: ["Poem", "Novel", "Poetry", "Story"],
    answer: 2,
    explanation: "Poetry generally refers to the art or body of poems and is an uncountable noun. An individual piece of poetry can be called a poem, which is countable.",
    example: "My younger sister enjoys reading poetry before bedtime."
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
