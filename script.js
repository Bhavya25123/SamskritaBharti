// Quiz Questions
const questions = [
    {
        question: "कः वेदः प्रथमः?",
        options: ["ऋग्वेदः", "यजुर्वेदः", "सामवेदः", "अथर्ववेदः"],
        answer: 0
    },
    {
        question: "रामायणस्य रचनाकारः कः?",
        options: ["वाल्मीकिः", "व्यासः", "कालिदासः", "भासः"],
        answer: 0
    },
    {
        question: "गीता कतिविंशः अध्यायः अस्ति?",
        options: ["१८", "१६", "२०", "१२"],
        answer: 0
    },
    {
        question: "कः भारतस्य जननायकः कथ्यते?",
        options: ["महात्मा गांधी", "नेहरू", "सुभाषचन्द्रः", "टिळकः"],
        answer: 0
    }
];


// State Variables
let currentQuestionIndex = 0;
let score = 0;

// Show Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = question.question;
    optionsElement.innerHTML = ""; // Clear old options

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(index, button);
        optionsElement.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const buttons = document.querySelectorAll(".option-button");

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    // Disable all buttons after selection
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // Move to the next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// Show Result
function showResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = `🎉 Quiz Over! Your score: ${score} / ${questions.length}`;
    optionsElement.innerHTML = ""; // Clear old options

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.classList.add("option-button");
    restartButton.onclick = restartQuiz;
    optionsElement.appendChild(restartButton);
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Initialize Quiz
document.addEventListener("DOMContentLoaded", showQuestion);
