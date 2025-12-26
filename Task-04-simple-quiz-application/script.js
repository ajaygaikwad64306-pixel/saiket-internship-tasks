const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyperlinks Text Mark Language",
    d: "None of the above",
    correct: "a"
  },
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "CSS",
    c: "Java",
    d: "Python",
    correct: "b"
  },
  {
    question: "Which is used for web interactivity?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "c"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll("input[name='answer']");
const nextBtn = document.getElementById("nextBtn");
const errorEl = document.getElementById("error");

const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  errorEl.innerText = "";

  const currentQuiz = quizData[currentQuestion];
  questionEl.innerText = currentQuiz.question;
  aText.innerText = currentQuiz.a;
  bText.innerText = currentQuiz.b;
  cText.innerText = currentQuiz.c;
  dText.innerText = currentQuiz.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((input) => {
    input.checked = false;
  });
}

nextBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (!answer) {
    errorEl.innerText = "Please select an answer before continuing.";
    return;
  }

  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>You scored ${score} out of ${quizData.length}</h2>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
});
