const quizData = [
  {
    question: "How old is Goofball?",
    a: "100",
    b: "170",
    c: "19",
    d: "2",
    correct: "c",
  },
  {
    question: "What is Goofball's favourite chocolate?",
    a: "Milkybar",
    b: "Dairy Milk",
    c: "Munch",
    d: "5 Star",
    correct: "a",
  },
  {
    question: "Who is the President of USA?",
    a: "Florin Pop",
    b: "Trump",
    c: "Elon Musk",
    d: "Mikhail",
    correct: "b",
  },
  {
    question: "What does HTML stands for?",
    a: "HyperText Markup Language",
    b: "Cascading Style Sheets",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

const quiz=document.getElementById("contain")
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbitBtn = document.getElementById("sumbit");
const quizcon = document.getElementById("contain");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked=false;
  });
}

sumbitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>`
    }
  }
});
