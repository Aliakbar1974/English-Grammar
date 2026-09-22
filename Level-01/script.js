// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 04
// World History
// 17 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122115273585435742&set=a.122102731923435742";


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
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 04
// Questions 1–17
// World History
// ============================================================

const quizData = [

    {
        id: "WH301",
        question: "প্রাচীন মিশরীয় সভ্যতা প্রধানত কোন নদীকে কেন্দ্র করে গড়ে উঠেছিল?",
        options: [
            "টাইগ্রিস",
            "ইউফ্রেটিস",
            "সিন্ধু",
            "নীল"
        ],
        answer: 3,
        explanation: "প্রাচীন মিশরীয় সভ্যতা নীল নদের তীরবর্তী অঞ্চলে গড়ে উঠেছিল। নীল নদ কৃষি, যোগাযোগ ও জনজীবনে গুরুত্বপূর্ণ ভূমিকা পালন করেছিল।",
        example: "Ancient Egyptian civilization flourished along the Nile River."
    },

    {
        id: "WH302",
        question: "মেসোপটেমিয়া শব্দের অর্থ কী?",
        options: [
            "দুই নদীর মধ্যবর্তী ভূমি",
            "মরুভূমির দেশ",
            "পাহাড়ি অঞ্চল",
            "উর্বর উপত্যকা"
        ],
        answer: 0,
        explanation: "মেসোপটেমিয়া শব্দটির অর্থ হলো 'দুই নদীর মধ্যবর্তী ভূমি'। এটি মূলত টাইগ্রিস ও ইউফ্রেটিস নদীর মধ্যবর্তী অঞ্চলকে বোঝায়।",
        example: "Mesopotamia means the land between two rivers."
    },

    {
        id: "WH303",
        question: "মেসোপটেমিয়ার প্রধান দুটি নদী কোনগুলো?",
        options: [
            "নীল ও সিন্ধু",
            "গঙ্গা ও যমুনা",
            "টাইগ্রিস ও ইউফ্রেটিস",
            "দানিয়ুব ও রাইন"
        ],
        answer: 2,
        explanation: "মেসোপটেমিয়ার প্রধান দুটি নদী হলো টাইগ্রিস ও ইউফ্রেটিস। এই দুই নদীর মধ্যবর্তী অঞ্চলেই প্রাচীন মেসোপটেমীয় সভ্যতার বিকাশ ঘটে।",
        example: "The Tigris and Euphrates were the major rivers of Mesopotamia."
    },

    {
        id: "WH304",
        question: "হাম্মুরাবির আইনসংহিতা কোন সভ্যতার সঙ্গে সম্পর্কিত?",
        options: [
            "রোমান",
            "গ্রিক",
            "মিশরীয়",
            "ব্যাবিলনীয়"
        ],
        answer: 3,
        explanation: "হাম্মুরাবির আইনসংহিতা প্রাচীন ব্যাবিলনীয় সভ্যতার সঙ্গে সম্পর্কিত। এটি রাজা হাম্মুরাবির শাসনামলে প্রণীত একটি বিখ্যাত প্রাচীন আইনসংহিতা।",
        example: "The Code of Hammurabi is associated with ancient Babylon."
    },

    {
        id: "WH305",
        question: "প্রাচীন গ্রিসে গণতন্ত্রের বিকাশের জন্য কোন নগররাষ্ট্র বিশেষভাবে পরিচিত?",
        options: [
            "এথেন্স",
            "স্পার্টা",
            "করিন্থ",
            "থিবস"
        ],
        answer: 0,
        explanation: "প্রাচীন গ্রিসের এথেন্স নগররাষ্ট্র গণতন্ত্রের বিকাশের জন্য বিশেষভাবে পরিচিত। এথেন্সে নাগরিকদের রাজনৈতিক অংশগ্রহণের একটি গুরুত্বপূর্ণ ব্যবস্থা গড়ে উঠেছিল।",
        example: "Athens is famous for the development of democracy in ancient Greece."
    },

    {
        id: "WH306",
        question: "স্পার্টা নগররাষ্ট্রের প্রধান বৈশিষ্ট্য কী ছিল?",
        options: [
            "বাণিজ্যনির্ভর সমাজ",
            "সামরিক সংস্কৃতি",
            "সমুদ্রভিত্তিক সাম্রাজ্য",
            "কৃষিবিরোধী অর্থনীতি"
        ],
        answer: 1,
        explanation: "স্পার্টা তার কঠোর সামরিক সংস্কৃতি ও সামরিক প্রশিক্ষণব্যবস্থার জন্য পরিচিত ছিল।",
        example: "Sparta was known for its strong military culture."
    },

    {
        id: "WH307",
        question: "আলেকজান্ডার দ্য গ্রেট কোন রাজ্যের রাজা ছিলেন?",
        options: [
            "রোম",
            "পারস্য",
            "মেসিডোনিয়া",
            "মিশর"
        ],
        answer: 2,
        explanation: "আলেকজান্ডার দ্য গ্রেট ছিলেন প্রাচীন মেসিডোনিয়ার রাজা। তিনি বিশাল সাম্রাজ্য গড়ে তুলেছিলেন এবং পারস্য সাম্রাজ্য জয় করেছিলেন।",
        example: "Alexander the Great was the king of Macedon."
    },

    {
        id: "WH308",
        question: "আলেকজান্ডারের শিক্ষক হিসেবে কে পরিচিত?",
        options: [
            "সক্রেটিস",
            "হেরোডোটাস",
            "প্লেটো",
            "এরিস্টটল"
        ],
        answer: 3,
        explanation: "প্রাচীন গ্রিক দার্শনিক এরিস্টটল আলেকজান্ডার দ্য গ্রেটের শিক্ষক হিসেবে পরিচিত।",
        example: "Aristotle was the teacher of Alexander the Great."
    },

    {
        id: "WH309",
        question: "প্রাচীন রোমের বিখ্যাত অ্যাম্ফিথিয়েটার কোনটি?",
        options: [
            "কলোসিয়াম",
            "প্যানথিয়ন",
            "পার্থেনন",
            "অ্যাক্রোপলিস"
        ],
        answer: 0,
        explanation: "কলোসিয়াম ছিল প্রাচীন রোমের বিখ্যাত অ্যাম্ফিথিয়েটার। এখানে বিভিন্ন ধরনের জনসম্মুখের প্রদর্শনী ও প্রতিযোগিতা অনুষ্ঠিত হতো।",
        example: "The Colosseum was a famous amphitheater of ancient Rome."
    },

    {
        id: "WH310",
        question: "প্রাচীন রোমানদের প্রধান প্রশাসনিক ও সাহিত্যিক ভাষা কোনটি ছিল?",
        options: [
            "বাংলা",
            "ল্যাটিন",
            "আরবি",
            "চীনা"
        ],
        answer: 1,
        explanation: "ল্যাটিন ছিল রোমান সাম্রাজ্যের অন্যতম প্রধান সরকারি ও প্রশাসনিক ভাষা, বিশেষ করে সাম্রাজ্যের পশ্চিমাঞ্চলে।",
        example: "Latin was an important language of the Roman Empire."
    },

    {
        id: "WH311",
        question: "রোমান সাম্রাজ্যের বিভাজনের পর পূর্বাঞ্চলীয় সাম্রাজ্যটি কী নামে পরিচিত হয়?",
        options: [
            "অটোমান সাম্রাজ্য",
            "কার্থেজ সাম্রাজ্য",
            "বাইজেন্টাইন সাম্রাজ্য",
            "মঙ্গোল সাম্রাজ্য"
        ],
        answer: 2,
        explanation: "রোমান সাম্রাজ্যের পূর্বাঞ্চলীয় অংশকে পরবর্তীকালে বাইজেন্টাইন সাম্রাজ্য নামে অভিহিত করা হয়। এর রাজধানী ছিল কনস্টান্টিনোপল।",
        example: "The Eastern Roman Empire became known as the Byzantine Empire."
    },

    {
        id: "WH312",
        question: "কনস্টান্টিনোপলের বর্তমান নাম কী?",
        options: [
            "এথেন্স",
            "ইস্তাম্বুল",
            "আঙ্কারা",
            "রোম"
        ],
        answer: 1,
        explanation: "কনস্টান্টিনোপলের বর্তমান নাম ইস্তাম্বুল। এটি বর্তমানে তুরস্কের একটি গুরুত্বপূর্ণ শহর।",
        example: "Constantinople is known today as Istanbul."
    },

   

    {
        id: "WH315",
        question: "মক্কা থেকে মদিনায় হিজরত কোন সালে সংঘটিত হয়?",
        options: [
            "৬১০ খ্রিস্টাব্দ",
            "৬৩০ খ্রিস্টাব্দ",
            "৬২২ খ্রিস্টাব্দ",
            "৬৩২ খ্রিস্টাব্দ"
        ],
        answer: 2,
        explanation: "মক্কা থেকে মদিনায় হিজরত ৬২২ খ্রিস্টাব্দে সংঘটিত হয়। এই ঘটনাকে ভিত্তি করে হিজরি বর্ষপঞ্জির যুগ গণনা করা হয়।",
        example: "The Hijra from Mecca to Medina took place in 622 CE."
    },

    

    {
        id: "WH317",
        question: "মঙ্গোল সাম্রাজ্যের প্রতিষ্ঠাতা কে?",
        options: [
            "কুবলাই খান",
            "তৈমুর লং",
            "হালাকু খান",
            "চেঙ্গিস খান"
        ],
        answer: 3,
        explanation: "চেঙ্গিস খান ১২০৬ সালে মঙ্গোল গোত্রগুলোকে একত্রিত করে মঙ্গোল সাম্রাজ্যের ভিত্তি স্থাপন করেন।",
        example: "Genghis Khan founded the Mongol Empire."
    },

    {
        id: "WH318",
        question: "চেঙ্গিস খানের আসল নাম কী ছিল?",
        options: [
            "তেমুজিন",
            "বাতু",
            "ওগেদাই",
            "তোগরুল"
        ],
        answer: 0,
        explanation: "চেঙ্গিস খানের জন্মনাম ছিল তেমুজিন। পরবর্তীতে তিনি চেঙ্গিস খান নামে পরিচিত হন।",
        example: "Genghis Khan was born with the name Temujin."
    },

    {
        id: "WH319",
        question: "অটোমান সাম্রাজ্যের প্রতিষ্ঠাতা হিসেবে কাকে ধরা হয়?",
        options: [
            "সুলতান সুলেমান",
            "দ্বিতীয় মেহমেদ",
            "উসমান প্রথম",
            "মুস্তাফা কামাল"
        ],
        answer: 2,
        explanation: "উসমান প্রথমকে অটোমান সাম্রাজ্যের প্রতিষ্ঠাতা হিসেবে ধরা হয়। তাঁর নাম থেকেই Ottoman নামটির উৎপত্তি।",
        example: "Osman I is regarded as the founder of the Ottoman Empire."
    },

    {
        id: "WH320",
        question: "কনস্টান্টিনোপল অটোমানদের দখলে আসে কোন সালে?",
        options: [
            "১৪১৫",
            "১৪৮৭",
            "১৫০১",
            "১৪৫৩"
        ],
        answer: 3,
        explanation: "১৪৫৩ সালে অটোমান সুলতান দ্বিতীয় মেহমেদের নেতৃত্বে কনস্টান্টিনোপল বিজিত হয়। এই ঘটনা বাইজেন্টাইন সাম্রাজ্যের অবসানের সঙ্গে যুক্ত।",
        example: "The Ottomans captured Constantinople in 1453."
    }

];


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer;
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
const socialMessage = document.querySelector(".social-message");


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

    if (questionNumber) questionNumber.textContent = currentQuestion + 1;
    if (totalQuestions) totalQuestions.textContent = quizData.length;

    if (progressBar) {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + "%";
    }

    if (questionElement) questionElement.textContent = q.question;
    if (optionsElement) optionsElement.innerHTML = "";

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.textContent = "";

    // Create answer buttons (CSS Class answer-option অনুযায়ী মেলানো হয়েছে)
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-option";
        button.type = "button";

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;

        button.addEventListener("click", function () {
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
    } else {
        if (timerElement) timerElement.textContent = "∞";
    }
}


// ============================================================
// TIMER DISPLAY
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
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;
        if (clickedButton) clickedButton.classList.add("correct");

        playSound("correct");

        if (correctMessage) correctMessage.textContent = "✓ সঠিক উত্তর!";
        if (wrongMessage) wrongMessage.textContent = "";

        if (selectedMode === "learning") {
            if (feedbackElement) feedbackElement.style.display = "block";
            if (exampleText && q.explanation) {
                exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
            }
        }
    } else {
        if (clickedButton) clickedButton.classList.add("wrong");
        if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

        playSound("wrong");

        if (wrongMessage) wrongMessage.textContent = "✗ ভুল উত্তর!";
        if (correctMessage) {
            correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
        }

        if (feedbackElement) feedbackElement.style.display = "block";
        if (exampleText && q.explanation) {
            exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
        }
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
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

    playSound("tryAgain");

    if (wrongMessage) wrongMessage.textContent = "⏰ সময় শেষ!";
    if (correctMessage) {
        correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
    }

    if (feedbackElement) feedbackElement.style.display = "block";
    if (exampleText && q.explanation) {
        exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
    }

    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-question-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "পরবর্তী প্রশ্ন →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "ফলাফল দেখুন 🎉";
        nextButton.addEventListener("click", showResult);
    }

    if (quizScreen) {
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

    if (scoreElement) scoreElement.textContent = `${score} / ${quizData.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent = "🏆 অসাধারণ! আপনার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent = "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবেন।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent = "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।";
            playSound("complete");
        } else {
            resultMessage.textContent = "📚 আরও অনুশীলন করুন। পরবর্তী কুইজে আরও ভালো করবেন।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) socialMessage.style.display = "block";
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (FACEBOOK_POST_URL && FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE") {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert("Facebook post link এখনো যোগ করা হয়নি।\n\nscript.js-এর FACEBOOK_POST_URL-এ আপনার Facebook post link বসান।");
    }
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

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";
}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3) {
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
})();