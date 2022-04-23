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
    question: "What is Goofy's facvourite subject?",
    a: "Maths",
    b: "She hates all subjects",
    c: "Chemistry",
    d: "Physics",
    correct: "b",
  },
  {
    question: "From which disease is Goofy suffering?",
    a: "All of them",
    b: "Lack of sleep",
    c: "Hypertension",
    d: "Sakshipopporia",
    correct: "a",
  },
  {
    question: "What is the most famous identity of Nikhil Toppo?",
    a: "Chotu",
    b: "Self declared genius",
    c: "Walking Talking Dictionary",
    d: "Ms.Soumika's secretary",
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
