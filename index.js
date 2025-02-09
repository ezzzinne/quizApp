const questions = [
    { test: "How many continents are there in the world?", options: ["5", "6", "7"], answer: "7"},
    { test: "What animal is known as the 'King of the Jungle?'", options: ["Tiger", "Lion", "Elephant"], answer: "Lion"},
    { test: "How many sides does a heptagon have?", options: ["6", "7", "8"], answer: "7"},
    { test: "Which is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kilimanjoro"], answer: "Mount Everest"},
    { test: "Which gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Carbon Dioxide"}
];

let current = 0, mark = 0;
const question = document.getElementById("question");
const attempt = document.getElementById("attempt");
const option = document.getElementById("option");
const nextBtn = document.getElementById("nextBtn");
const score = document.getElementById("score");

function loadQuestion() {
    let test = questions[current];
    question.textContent = questions[current].test;
    option.innerHTML = questions[current].options.map(opt => `<button onclick="chooseAnswer('${opt}')">${opt}</button>`).join('');
    attempt.textContent = `Question ${current + 1} of ${questions.length}`;
    nextBtn.disabled = true;
}

function chooseAnswer(chosenAnswer) {
    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === chosenAnswer) {
            if (chosenAnswer === questions[current].answer) {
                btn.classList.add("correct");
            }
            else {
                btn.classList.add("wrong");
            }
        }
    });
    
    nextBtn.disabled = false;
    nextBtn.onclick = () => nextQuestion(chosenAnswer);
}

function nextQuestion(chosenAnswer) {
    if (chosenAnswer === questions[current].answer) {
        mark++;
    }
    current++;

    if (current < questions.length) {
        loadQuestion();
    }
    else {
        showResults();
    }
}

function showResults() {
    question.style.display = attempt.style.display = option.style.display = nextBtn.style.display = h1.style.display = "none";
    score.textContent = `You scored ${mark} / ${questions.length}`;
    score.style.display = "block";
    score.style.fontWeight = "bold";
    score.style.padding = "10px";
}

loadQuestion();
