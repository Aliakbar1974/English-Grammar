
"use strict";

// ============================================================
// ENGLISH GRAMMAR QUIZ 30
// Topic: Pronoun Agreement & Exam-Oriented Usage
// 20 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122126686155435742&set=a.122102731923435742";

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
    id: 181,
    question: "Which sentence is traditionally preferred in formal grammar?",
    options: [
      "Every students must bring his book.",
      "Every student must brings his book.",
      "Every student must bring his or her book.",
      "Every student must bring them book."
    ],
    answer: 2,
    explanation: "In traditional formal grammar, 'every student' is singular, so 'his or her' is used as the corresponding pronoun. Modern English also widely accepts singular 'their'.",
    example: "Every student must bring his or her book to the examination."
  },
  {
    id: 182,
    question: "Which sentence follows traditional formal pronoun agreement?",
    options: [
      "Each boy has his own bag.",
      "Each boys has his own bag.",
      "Each boy have his own bag.",
      "Each boy has them own bag."
    ],
    answer: 0,
    explanation: "'Each' is grammatically singular, so the singular verb 'has' is required. In traditional formal usage, 'his' is used here, although singular 'their' is also common in modern English.",
    example: "Each boy has his own bag at school."
  },
  {
    id: 183,
    question: "Choose the correct sentence.",
    options: [
      "Neither Rahim nor Karim brought their book.",
      "Neither Rahim nor Karim brought them book.",
      "Neither Rahim nor Karim brought theirs book.",
      "Neither Rahim nor Karim brought his book."
    ],
    answer: 3,
    explanation: "In traditional grammar, 'neither...nor' connects two singular subjects. Since Rahim and Karim are both male, the singular possessive pronoun 'his' is appropriate.",
    example: "Neither Rahim nor Karim brought his book to class."
  },
  {
    id: 184,
    question: "Choose the correct sentence.",
    options: [
      "Rina is one of those students who works hard.",
      "Rina is one of those students who work hard.",
      "Rina is one of those student who work hard.",
      "Rina is one of that students who works hard."
    ],
    answer: 1,
    explanation: "The relative pronoun 'who' refers to 'students', which is plural. Therefore, the plural verb 'work' is correct.",
    example: "Rina is one of those students who work hard every day."
  },
  {
    id: 185,
    question: "Which sentence is traditionally preferred in formal grammar?",
    options: [
      "It is me who is responsible.",
      "It is I who is responsible.",
      "It is I who am responsible.",
      "It is me who am responsible."
    ],
    answer: 2,
    explanation: "In traditional formal grammar, 'I' is used as the subject complement, and the relative pronoun 'who' refers to 'I'. Therefore, the verb 'am' is used.",
    example: "It is I who am responsible for completing this task."
  },
  {
    id: 186,
    question: "Which expression is correct in formal English?",
    options: [
      "Between you and me",
      "Between you and I",
      "Between I and you",
      "Between me and yourself"
    ],
    answer: 0,
    explanation: "The preposition 'between' takes an object pronoun. Therefore, 'me' is correct, not the subject pronoun 'I'.",
    example: "Between you and me, this is a difficult decision."
  },
  {
    id: 187,
    question: "Choose the correct sentence.",
    options: [
      "He and me went there.",
      "He and I went there.",
      "Him and I went there.",
      "Him and me went there."
    ],
    answer: 1,
    explanation: "'He and I' form the compound subject of the sentence. Subject pronouns are required because they perform the action of going.",
    example: "He and I went to the library yesterday."
  },
  {
    id: 188,
    question: "Choose the correct sentence.",
    options: [
      "The teacher called he and I.",
      "The teacher called he and me.",
      "The teacher called him and I.",
      "The teacher called him and me."
    ],
    answer: 3,
    explanation: "'Him and me' are object pronouns. They are correct because they receive the action of the verb 'called'.",
    example: "The teacher called him and me after the examination."
  },
  {
    id: 189,
    question: "Which statement about the following sentence is correct: 'This is the man whom I met yesterday.'?",
    options: [
      "Both 'whom' and 'who' can be used here, but 'whom' is more formal.",
      "Only 'whose' is correct.",
      "Only 'which' is correct.",
      "The sentence is always incorrect."
    ],
    answer: 0,
    explanation: "'Whom' is the traditional object form and is more formal. 'Who' is also widely used as an object relative pronoun in modern English.",
    example: "This is the man whom I met yesterday. / This is the man who I met yesterday."
  },
  {
    id: 190,
    question: "Choose the correct sentence.",
    options: [
      "Whom do you think is coming?",
      "Whose do you think is coming?",
      "Who do you think is coming?",
      "Which do you think is coming?"
    ],
    answer: 2,
    explanation: "'Who' is correct because it functions as the subject of the verb 'is coming'. The phrase 'do you think' does not change its grammatical role.",
    example: "Who do you think is coming to the meeting?"
  },
  {
    id: 191,
    question: "Which sentence is correct in formal English?",
    options: [
      "Whom do you think I should invite?",
      "Whose do you think I should invite?",
      "Which do you think I should invite only?",
      "Whom do you think should I invite?"
    ],
    answer: 0,
    explanation: "'Whom' is correct because it functions as the object of the verb 'invite'. In everyday English, 'who' is also commonly used in this position.",
    example: "Whom do you think I should invite to the ceremony?"
  },
  {
    id: 192,
    question: "Which statement about the sentence 'It was him who called me' is correct?",
    options: [
      "Only 'his' is correct.",
      "The sentence is always incorrect.",
      "Only 'he' is correct in every context.",
      "Both 'It was him who called me' and 'It was he who called me' occur; the latter is more formal."
    ],
    answer: 3,
    explanation: "Both forms occur in English. 'It was he' follows the traditional formal use of the subject pronoun, while 'It was him' is common in everyday English.",
    example: "It was he who called me yesterday. / It was him who called me yesterday."
  },
  {
    id: 193,
    question: "Which sentence follows traditional formal grammar?",
    options: [
      "Everyone should do his or her duty.",
      "Everyone should do them duty.",
      "Everyone should do theirs duty.",
      "Everyone should does his duty."
    ],
    answer: 0,
    explanation: "'Everyone' is grammatically singular. Traditional formal grammar uses 'his or her' to agree with it. Modern English also widely accepts singular 'their'.",
    example: "Everyone should do his or her duty honestly."
  },
  {
    id: 194,
    question: "Which sentence is correct?",
    options: [
      "The book belongs to she.",
      "The book belongs to her.",
      "The book belongs to hers.",
      "The book belongs to herself."
    ],
    answer: 1,
    explanation: "The preposition 'to' requires an object pronoun. 'Her' is the correct object form of 'she'.",
    example: "This beautiful book belongs to her."
  },
  {
    id: 195,
    question: "Which sentence is correct?",
    options: [
      "This is the student who won the prize.",
      "This is the student which won the prize.",
      "This is the student whom won the prize.",
      "This is the student whose won the prize."
    ],
    answer: 0,
    explanation: "'Who' is used as a subject relative pronoun for people. It is correct because it performs the action of winning the prize.",
    example: "This is the student who won the first prize."
  },
  {
    id: 196,
    question: "Which sentence is correct in formal English?",
    options: [
      "The man to who I spoke was kind.",
      "The man to whose I spoke was kind.",
      "The man to which I spoke was kind.",
      "The man to whom I spoke was kind."
    ],
    answer: 3,
    explanation: "After the preposition 'to', the object form 'whom' is traditionally used when referring to a person.",
    example: "The man to whom I spoke was very helpful."
  },
  {
    id: 197,
    question: "Which sentence is correct?",
    options: [
      "The woman who car was stolen reported it.",
      "The woman whose car was stolen reported it.",
      "The woman whom car was stolen reported it.",
      "The woman which car was stolen reported it."
    ],
    answer: 1,
    explanation: "'Whose' is a possessive relative pronoun. It indicates that the car belongs to the woman.",
    example: "The woman whose car was stolen reported the incident to the police."
  },
  {
    id: 198,
    question: "Which sentence follows traditional formal use of the pronoun 'one'?",
    options: [
      "One should respect one's parents.",
      "One should respects one's parents.",
      "One should respecting one's parents.",
      "One should respect one parents."
    ],
    answer: 0,
    explanation: "When 'one' is used as an indefinite pronoun, 'one's' is traditionally used as its possessive form. The modal verb 'should' is followed by the base form 'respect'.",
    example: "One should respect one's parents and elders."
  },
  {
    id: 199,
    question: "Which sentence is correct?",
    options: [
      "Myself will do the work.",
      "Me myself will do the work.",
      "Mine myself will do the work.",
      "I myself will do the work."
    ],
    answer: 3,
    explanation: "'I' is the correct subject pronoun. 'Myself' is used as an emphatic pronoun to emphasize the subject.",
    example: "I myself will do the work before the deadline."
  },
  {
    id: 200,
    question: "Which sentence is correct?",
    options: [
      "Her and me completed the work ourselves.",
      "She and me completed the work ourself.",
      "She and I completed the work ourselves.",
      "Her and I completed the work ourselves."
    ],
    answer: 2,
    explanation: "'She and I' form the subject, so subject pronouns are required. 'Ourselves' is the correct plural reflexive pronoun referring to the compound subject.",
    example: "She and I completed the work ourselves without any help."
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
