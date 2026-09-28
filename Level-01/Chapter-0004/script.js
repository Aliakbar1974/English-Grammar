// ============================================================
// ENGLISH GRAMMAR QUIZ 0004
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122117064927435742&set=a.122102731923435742";


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
// ENGLISH GRAMMAR QUIZ
// 20 Questions
// Grammar Set
// ============================================================


const quizData = [
    {
        id: "GR061",
        question: "Which word is an adjective?",
        options: ["Beautiful", "Beauty", "Beautifully", "Beautify"],
        answer: 0,
        explanation: "Beautiful শব্দটি একটি Adjective কারণ এটি কোনো ব্যক্তি বা বস্তুর গুণ, বৈশিষ্ট্য বা অবস্থা প্রকাশ করে। (Beauty হলো Noun, Beautifully হলো Adverb এবং Beautify হলো Verb)",
        example: "She is a beautiful girl."
    },
    {
        id: "GR062",
        question: "An adjective usually modifies a ______.",
        options: ["Preposition", "Conjunction", "Interjection", "Noun or pronoun"],
        answer: 3,
        explanation: "Adjective সাধারণত Noun বা Pronoun-এর গুণ, বৈশিষ্ট্য, সংখ্যা বা অবস্থা নির্দেশ করে বা তাদেরকে Modify করে।",
        example: "He is a wise man. (এখানে wise শব্দটি Noun 'man'-কে Modify করেছে)"
    },
    {
        id: "GR063",
        question: "Identify the adjective: “She has a red dress.”",
        options: ["She", "Red", "Has", "Dress"],
        answer: 1,
        explanation: "এখানে 'Red' শব্দটি 'dress' (Noun)-এর রঙ বর্ণনা করছে, তাই এটি একটি Adjective।",
        example: "I bought a red car."
    },
    {
        id: "GR064",
        question: "Identify the adjective: “He is an honest man.”",
        options: ["He", "Honest", "Is", "Man"],
        answer: 1,
        explanation: "'Honest' শব্দটি 'man' (Noun)-এর গুণ প্রকাশ করছে, তাই এটি একটি Adjective।",
        example: "Honest people are respected everywhere."
    },
    {
        id: "GR065",
        question: "Which word describes the size of something?",
        options: ["Run", "Quickly", "Under", "Big"],
        answer: 3,
        explanation: "'Big' শব্দটি কোনো ব্যক্তি বা বস্তুর আকার বা সাইজ প্রকাশ করে, তাই এটি একটি Adjective of Quality।",
        example: "They live in a big house."
    },
    {
        id: "GR066",
        question: "Which is a numeral adjective?",
        options: ["Five", "Beautiful", "This", "My"],
        answer: 0,
        explanation: "'Five' একটি Numeral Adjective বা Adjective of Number, কারণ এটি একটি নির্দিষ্ট সংখ্যা নির্দেশ করে।",
        example: "I have five pens."
    },
    {
        id: "GR067",
        question: "Which is a demonstrative adjective?",
        options: ["Quickly", "Honesty", "Run", "This"],
        answer: 3,
        explanation: "'This', 'That', 'These', 'Those'—এগুলো যখন কোনো Noun-এর পূর্বে বসে তাকে নির্দিষ্ট করে নির্দেশ করে, তখন তা Demonstrative Adjective।",
        example: "This book is very interesting."
    },
    {
        id: "GR068",
        question: "Which is a possessive adjective?",
        options: ["Mine", "Me", "My", "Myself"],
        answer: 2,
        explanation: "'My' একটি Possessive Adjective কারণ এটি Noun-এর আগে বসে মালিকানা নির্দেশ করে। (Mine হলো Possessive Pronoun)",
        example: "This is my pencil."
    },
    {
        id: "GR069",
        question: "“There are several students in the class.” The word “several” is a/an ______.",
        options: ["Adverb", "Verb", "Adjective", "Pronoun"],
        answer: 2,
        explanation: "এখানে 'several' শব্দটি 'students' (Noun)-এর অনির্দিষ্ট সংখ্যা প্রকাশ করছে, তাই এটি একটি Indefinite Numeral Adjective বা Adjective of Number।",
        example: "She has several friends in London."
    },
    {
        id: "GR070",
        question: "Which adjective shows quality?",
        options: ["Five", "These", "My", "Beautiful"],
        answer: 3,
        explanation: "'Beautiful' শব্দটি কোনো ব্যক্তি বা বস্তুর গুণ বা বৈশিষ্ট্য প্রকাশ করে, তাই এটি একটি Adjective of Quality।",
        example: "The garden has beautiful flowers."
    },
    {
        id: "GR071",
        question: "Choose the adjective: “The old man walked slowly.”",
        options: ["Man", "Old", "Walked", "Slowly"],
        answer: 1,
        explanation: "'Old' শব্দটি 'man' (Noun)-এর বয়সের অবস্থা প্রকাশ করছে, তাই এটি একটি Adjective। ('Slowly' হলো Adverb)",
        example: "An old tree fell down."
    },
    {
        id: "GR072",
        question: "Which is a comparative adjective?",
        options: ["Tall", "Tally", "Taller", "Tallest"],
        answer: 2,
        explanation: "দুইজন বা দুটি বস্তুর মধ্যে তুলনা করতে Adjective-এর Comparative Degree ব্যবহৃত হয়। Tall-এর Comparative রূপ হলো Taller।",
        example: "Rahim is taller than Karim."
    },
    {
        id: "GR073",
        question: "Which is a superlative adjective?",
        options: ["Highest", "High", "Higher", "Highly"],
        answer: 0,
        explanation: "সবার মধ্যে সর্বোচ্চ তুলনা বোঝাতে Superlative Degree ব্যবহৃত হয়। High-এর Superlative রূপ হলো Highest।",
        example: "Mount Everest is the highest peak in the world."
    },
    {
        id: "GR074",
        question: "What is the comparative form of “small”?",
        options: ["Smallest", "Smaller", "More small", "Most small"],
        answer: 1,
        explanation: "এক সিলেবলবিশিষ্ট Adjective 'small'-এর শেষে '-er' যুক্ত করে Comparative রূপ 'smaller' গঠন করা হয়।",
        example: "My phone is smaller than yours."
    },
    {
        id: "GR075",
        question: "What is the superlative form of “good”?",
        options: ["Best", "Gooder", "Better", "More good"],
        answer: 0,
        explanation: "'Good' একটি Irregular Adjective। এর রূপগুলো হলো: Good (Positive) → Better (Comparative) → Best (Superlative)।",
        example: "She is the best student in the class."
    },
    {
        id: "GR076",
        question: "What is the comparative form of “bad”?",
        options: ["Badder", "Worse", "Worst", "More bad"],
        answer: 1,
        explanation: "'Bad' একটি Irregular Adjective। এর রূপগুলো হলো: Bad → Worse → Worst। তাই Comparative রূপ হলো 'Worse'।",
        example: "Today's weather is worse than yesterday's."
    },
    {
        id: "GR077",
        question: "What is the superlative form of “beautiful”?",
        options: ["Beautifuler", "More beautiful", "Most beautiful", "Beautifullest"],
        answer: 2,
        explanation: "'Beautiful' একটি দীর্ঘ (তিন-সিলেবলের) Adjective। এ ধরনের Adjective-এর Superlative সাধারণত 'most' ব্যবহার করে গঠিত হয়: most beautiful।",
        example: "It was the most beautiful scene I have ever seen."
    },
    {
        id: "GR078",
        question: "Which adjective indicates number?",
        options: ["Beautiful", "Red", "Clever", "Many"],
        answer: 3,
        explanation: "'Many' শব্দটি সংখ্যা বা কতজন/কতগুলো বোঝায়, তাই এটি Adjective of Number বা Numeral Adjective।",
        example: "There are many books on the shelf."
    },
    {
        id: "GR079",
        question: "“Each student received a book.” The word “each” is a/an ______.",
        options: ["Adjective", "Adverb", "Verb", "Noun"],
        answer: 0,
        explanation: "এখানে 'each' শব্দটি 'student' (Noun)-এর ঠিক পূর্বে বসে প্রত্যেককে আলাদাভাবে নির্দেশ করছে, তাই এটি একটি Distributive Adjective।",
        example: "Each boy was given a prize."
    },
    {
        id: "GR080",
        question: "“Which book do you want?” The word “which” is a/an ______.",
        options: ["Demonstrative adjective", "Possessive adjective", "Interrogative adjective", "Proper adjective"],
        answer: 2,
        explanation: "'Which' শব্দটি প্রশ্ন করার জন্য 'book' (Noun)-এর পূর্বে ব্যবহৃত হওয়ায় এটি একটি Interrogative Adjective।",
        example: "Which color do you like most?"
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

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const questionNumber =
    document.getElementById("question-number");

const totalQuestions =
    document.getElementById("total-questions");

const timerElement =
    document.getElementById("timer");

const progressBar =
    document.getElementById("progress-bar");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const feedbackElement =
    document.getElementById("feedback");

const correctMessage =
    document.getElementById("correct-message");

const wrongMessage =
    document.getElementById("wrong-message");

const exampleText =
    document.getElementById("example-text");

const scoreElement =
    document.getElementById("score");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const statusElement =
    document.getElementById("status");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) {
    quizScreen.style.display = "none";
}

if (resultScreen) {
    resultScreen.style.display = "none";
}

if (feedbackElement) {
    feedbackElement.style.display = "none";
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {

    selectedMode = mode;

    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) {
        startScreen.style.display = "none";
    }

    if (resultScreen) {
        resultScreen.style.display = "none";
    }

    if (quizScreen) {
        quizScreen.style.display = "block";
    }

    if (statusElement) {
        statusElement.textContent = "";
    }

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


    // --------------------------------------------------------
    // Question Number
    // --------------------------------------------------------

    if (questionNumber) {
        questionNumber.textContent =
            currentQuestion + 1;
    }


    // --------------------------------------------------------
    // Total Questions
    // --------------------------------------------------------

    if (totalQuestions) {
        totalQuestions.textContent =
            quizData.length;
    }


    // --------------------------------------------------------
    // Progress Bar
    // --------------------------------------------------------

    if (progressBar) {

        const progress =
            ((currentQuestion + 1) /
            quizData.length) * 100;

        progressBar.style.width =
            progress + "%";
    }


    // --------------------------------------------------------
    // Question
    // --------------------------------------------------------

    if (questionElement) {

        // IMPORTANT:
        // No q.word is used here.
        // This prevents "undefined" from appearing.

        questionElement.textContent =
            q.question;
    }


    // --------------------------------------------------------
    // Clear Old Options
    // --------------------------------------------------------

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }


    // --------------------------------------------------------
    // Clear Feedback
    // --------------------------------------------------------

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) {
        correctMessage.textContent = "";
    }

    if (wrongMessage) {
        wrongMessage.textContent = "";
    }

    if (exampleText) {
        exampleText.innerHTML = "";
    }


    // --------------------------------------------------------
    // Remove Old Next Button
    // --------------------------------------------------------

    const oldNextButton =
        document.getElementById(
            "next-question-btn"
        );

    if (oldNextButton) {
        oldNextButton.remove();
    }


    // --------------------------------------------------------
    // Create Answer Options
    // --------------------------------------------------------

    q.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "option-btn";

            button.type =
                "button";

            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${option}
                </span>
            `;

            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );

            if (optionsElement) {
                optionsElement.appendChild(button);
            }

        }
    );


    // ========================================================
    // EXAM MODE
    // ========================================================

    if (selectedMode === "exam") {

        timeLeft = 15;

        updateTimer();

        timer = setInterval(
            function () {

                timeLeft--;

                updateTimer();

                if (timeLeft <= 0) {

                    clearInterval(timer);

                    timeUp();
                }

            },
            1000
        );

    }


    // ========================================================
    // LEARNING MODE
    // ========================================================

    else {

        if (timerElement) {

            timerElement.textContent =
                "∞";

            timerElement.classList.remove(
                "timer-danger"
            );
        }
    }

}


// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimer() {

    if (!timerElement) return;

    timerElement.textContent =
        timeLeft;

    if (timeLeft <= 5) {

        timerElement.classList.add(
            "timer-danger"
        );

    }

    else {

        timerElement.classList.remove(
            "timer-danger"
        );

    }

}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(
    selectedIndex,
    clickedButton
) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q =
        quizData[currentQuestion];

    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // ========================================================
    // CORRECT ANSWER
    // ========================================================

    if (selectedIndex === q.answer) {

        score++;

        if (clickedButton) {

            clickedButton.classList.add(
                "correct"
            );

        }

        playSound("correct");


        if (correctMessage) {

            correctMessage.textContent =
                "✓ Correct Answer!";

        }


        if (wrongMessage) {

            wrongMessage.textContent =
                "";

        }


        // ----------------------------------------------------
        // Learning Mode Feedback
        // ----------------------------------------------------

        if (selectedMode === "learning") {

            if (feedbackElement) {

                feedbackElement.style.display =
                    "block";

            }

            if (exampleText) {

                exampleText.innerHTML = `

                    <strong>
                        Example:
                    </strong>

                    ${q.example}

                    <br><br>

                    <strong>
                        Explanation:
                    </strong>

                    ${q.explanation}

                `;

            }

        }

    }


    // ========================================================
    // WRONG ANSWER
    // ========================================================

    else {

        if (clickedButton) {

            clickedButton.classList.add(
                "wrong"
            );

        }


        // ----------------------------------------------------
        // Highlight Correct Answer
        // ----------------------------------------------------

        if (buttons[q.answer]) {

            buttons[q.answer].classList.add(
                "correct"
            );

        }


        playSound("wrong");


        if (wrongMessage) {

            wrongMessage.textContent =
                "✗ Wrong Answer!";

        }


        if (correctMessage) {

            correctMessage.innerHTML = `

                Correct Answer:
                <strong>
                    ${q.options[q.answer]}
                </strong>

            `;

        }


        // ----------------------------------------------------
        // Show Explanation
        // ----------------------------------------------------

        if (feedbackElement) {

            feedbackElement.style.display =
                "block";

        }


        if (exampleText) {

            exampleText.innerHTML = `

                <strong>
                    Example:
                </strong>

                ${q.example}

                <br><br>

                <strong>
                    Explanation:
                </strong>

                ${q.explanation}

            `;

        }

    }


    // --------------------------------------------------------
    // Show Next Button
    // --------------------------------------------------------

    showNextButton();

}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q =
        quizData[currentQuestion];

    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // --------------------------------------------------------
    // Highlight Correct Answer
    // --------------------------------------------------------

    if (buttons[q.answer]) {

        buttons[q.answer].classList.add(
            "correct"
        );

    }


    playSound("tryAgain");


    if (wrongMessage) {

        wrongMessage.textContent =
            "⏰ Time's Up!";

    }


    if (correctMessage) {

        correctMessage.innerHTML = `

            Correct Answer:
            <strong>
                ${q.options[q.answer]}
            </strong>

        `;

    }


    if (feedbackElement) {

        feedbackElement.style.display =
            "block";

    }


    if (exampleText) {

        exampleText.innerHTML = `

            <strong>
                Example:
            </strong>

            ${q.example}

            <br><br>

            <strong>
                Explanation:
            </strong>

            ${q.explanation}

        `;

    }


    showNextButton();

}


// ============================================================
// SHOW NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {

    const oldButton =
        document.getElementById(
            "next-question-btn"
        );

    if (oldButton) {
        oldButton.remove();
    }


    const nextButton =
        document.createElement("button");

    nextButton.id =
        "next-question-btn";

    nextButton.className =
        "next-btn";

    nextButton.type =
        "button";


    // --------------------------------------------------------
    // More Questions
    // --------------------------------------------------------

    if (
        currentQuestion <
        quizData.length - 1
    ) {

        nextButton.textContent =
            "Next Question →";

        nextButton.addEventListener(
            "click",
            nextQuestion
        );

    }


    // --------------------------------------------------------
    // Last Question
    // --------------------------------------------------------

    else {

        nextButton.textContent =
            "Show Result 🎉";

        nextButton.addEventListener(
            "click",
            showResult
        );

    }


    // --------------------------------------------------------
    // Add Button to Quiz Container
    // --------------------------------------------------------

    const quizContainer =
        quizScreen
            ? quizScreen.querySelector(
                ".quiz-container"
            )
            : null;


    if (quizContainer) {

        quizContainer.appendChild(
            nextButton
        );

    }

    else if (quizScreen) {

        quizScreen.appendChild(
            nextButton
        );

    }

}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {

    clearInterval(timer);

    currentQuestion++;

    if (
        currentQuestion <
        quizData.length
    ) {

        showQuestion();

    }

    else {

        showResult();

    }

}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {

    clearInterval(timer);


    // --------------------------------------------------------
    // Hide Quiz Screen
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Result Screen
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Remove Next Button
    // --------------------------------------------------------

    const nextButton =
        document.getElementById(
            "next-question-btn"
        );

    if (nextButton) {
        nextButton.remove();
    }


    // --------------------------------------------------------
    // Calculate Percentage
    // --------------------------------------------------------

    const percentage =
        Math.round(
            (score /
            quizData.length) * 100
        );


    // --------------------------------------------------------
    // Score
    // --------------------------------------------------------

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${quizData.length}`;

    }


    // --------------------------------------------------------
    // Percentage
    // --------------------------------------------------------

    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    // ========================================================
    // RESULT MESSAGE + SOUND
    // ========================================================

    if (resultMessage) {

        if (percentage >= 90) {

            resultMessage.textContent =
                "🏆 Excellent! Outstanding performance!";

            playSound("victory");

        }

        else if (percentage >= 75) {

            resultMessage.textContent =
                "🌟 Very Good! Keep improving your Grammar.";

            playSound("success");

        }

        else if (percentage >= 50) {

            resultMessage.textContent =
                "👍 Good Try! Keep practicing regularly.";

            playSound("complete");

        }

        else {

            resultMessage.textContent =
                "📚 Keep Learning! Try Again and improve your score.";

            playSound("tryAgain");

        }

    }


    // ========================================================
    // SOCIAL MESSAGE
    // ========================================================

    let socialBox =
        document.getElementById(
            "social-message"
        );


    // --------------------------------------------------------
    // Create Social Message if Missing
    // --------------------------------------------------------

    if (!socialBox && resultScreen) {

        const resultCard =
            resultScreen.querySelector(
                ".result-card"
            );

        if (resultCard) {

            socialBox =
                document.createElement(
                    "div"
                );

            socialBox.id =
                "social-message";

            socialBox.className =
                "social-message";

            resultCard.appendChild(
                socialBox
            );

        }

    }


    // --------------------------------------------------------
    // Social Message Content
    // --------------------------------------------------------

    if (socialBox) {

        socialBox.innerHTML = `

            ❤️
            <strong>
                Did you enjoy the quiz?
            </strong>

            <br><br>

            👍 Like our Facebook Post

            <br>

            💬 Comment your score

            <br>

            🔄 Share the quiz with your friends

            <br>

            ❤️ Follow our page for more quizzes!

        `;

        socialBox.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Make sure Facebook button works
    // --------------------------------------------------------

    setupFacebookButton();

}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {

    const facebookURL =
        FACEBOOK_POST_URL;


    if (!facebookURL) {

        alert(
            "Facebook post link is not available."
        );

        return;
    }


    // --------------------------------------------------------
    // Redirect directly to Facebook post
    // --------------------------------------------------------

    window.location.assign(
        facebookURL
    );

}


// ============================================================
// FACEBOOK BUTTON SETUP
// ============================================================

function setupFacebookButton() {

    const facebookButton =
        document.getElementById(
            "facebook-btn"
        );


    if (!facebookButton) return;


    // --------------------------------------------------------
    // Keep HTML onclick working
    // --------------------------------------------------------

    facebookButton.onclick =
        function () {

            returnToFacebook();

        };

}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {

    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";


    playSound("start");


    // --------------------------------------------------------
    // Hide Result
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Hide Quiz
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Start Screen
    // --------------------------------------------------------

    if (startScreen) {

        startScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Reset Status
    // --------------------------------------------------------

    if (statusElement) {

        statusElement.textContent =
            "";

    }


    // --------------------------------------------------------
    // Reset Timer
    // --------------------------------------------------------

    if (timerElement) {

        timerElement.textContent =
            "15";

        timerElement.classList.remove(
            "timer-danger"
        );

    }


    // --------------------------------------------------------
    // Reset Progress
    // --------------------------------------------------------

    if (progressBar) {

        progressBar.style.width =
            "0%";

    }

}


// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {

    const distribution =
        [0, 0, 0, 0];


    quizData.forEach(
        q => {

            if (
                Number.isInteger(q.answer) &&
                q.answer >= 0 &&
                q.answer <= 3
            ) {

                distribution[q.answer]++;

            }

        }
    );


    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );


})();


// ============================================================
// END OF SCRIPT
// ============================================================