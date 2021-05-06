const quizData =[ {
    question: 'Which year was Cristiano Ronaldo born?',
    a: '1980',
    b: '1983',
    c: '1985',
    d: '1989',
    correct: 'c'

},

{
   question: 'Who won the best actor award at the 88th Academy Awards?',
   a: 'Leonardo DiCaprio',
   b: 'Daniel Day-Lewis',
   c: 'Joaquin Phoenix',
   d: 'Johnny Depp',
   correct: 'a'



},

{
  question: 'Who was the president of USA in 2016?',
  a: 'Barack Obama',
  b: 'Joe Biden',
  c: 'George Bush',
  d: 'Donald Trump',
  correct: 'd'

},

{
  question: 'Which famous Renaissance artist painted the ceiling of Sistine Chapel?',
  a: 'Leonardo da Vinci',
  b: 'Michelangelo',
  c: 'Rafael',
  d: 'Donatello',
  correct: 'b'


},

{
    question: 'Which one is the starting year of French Revolution?',
    a: '1760',
    b: '1881',
    c: '1789',
    d: '1774',
    correct : 'c'

}



]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});