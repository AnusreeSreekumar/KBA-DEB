function addQuiz() {

    document.getElementById('heading').style.display = 'none';
    document.getElementById('qzcontainer').style.display = 'block';
    console.log("Start Quiz");
    loadQuestion();

    // const maincontain = document.createElement('div');
    // maincontain.
}

const quizData = [
    {
        question: '1. What is the capital of France?',
        answers: ['a) Berlin', 'b) Madrid', 'c) Paris', 'd) Rome'],
        right_answer: 2
    },

    {
        question: '2. Which element is represented by the chemical symbol "O"?',
        answers: ['a) Oxygen', 'b) Osmium', 'c) Ozone', 'd) Olivine'],
        right_answer: 0
    },

    {
        question: '3. Which planet is known as the "Red Planet"?',
        answers: ['a) Venus', 'b) Mars', 'c) Jupiter', 'd) Mercury'],
        right_answer: 1
    },

    {
        question: '4. Who wrote the play "Romeo and Juliet"?',
        answers: ['a) Charles Dickens', 'b) Mark Twain', 'c) William Shakespeare', 'd) Jane Austen'],
        right_answer: 2
    },

    {
        question: '5. What is the largest ocean on Earth?',
        answers: ['a) Atlantic Ocean', 'b) Indian Ocean', 'c) Southern Ocean', 'd) Pacific Ocean'],
        right_answer: 3
    },

];

let crntQnIndex = 0
let userAnswers = [];
let score = 0;
let timer;
let timeLimit = 20;

function loadQuestion() {

    clearTimeout(timer);
    const currentQuestion = quizData[crntQnIndex];
    document.getElementById('questn').textContent = currentQuestion.question;
    const answersContainer = document.getElementById('mcq');
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const answerItem = document.createElement('li');
        answerItem.innerHTML = `<input type="radio" name="answer" value="${index}" /> ${answer}`;
        answersContainer.appendChild(answerItem);
    });
    startTimer();
}

function startTimer(){
    let timeLeft=timeLimit;
    let timeElement=document.getElementById('timer');
    timeElement.textContent=`Time left: ${timeLeft}s`;
    timer=setInterval(()=>{
        timeLeft--;
        timeElement.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
    }
    },1000);

}

function nextQuestion() {

    const selectedAns = document.querySelector('input[name="answer"]:checked')
    if (selectedAns) {
        // const answers =  selectedAns.value 
        // console.log(answers);
        userAnswers[crntQnIndex] = parseInt(selectedAns.value);
        console.log(userAnswers);
    }
    crntQnIndex = crntQnIndex + 1;
    if (crntQnIndex >= quizData.length) {

        QuizEnd();
    }
    else {
        loadQuestion();
    }
    console.log(userAnswers);
}

function prevQuestion() {

    if (crntQnIndex >= 0) {
        crntQnIndex = crntQnIndex - 1;
        loadQuestion();
    }
}

function QuizEnd(){
    document.getElementById('quiz').style.display='none';
    document.getElementById('startQuiz').style.display='none';
    document.getElementById('dispscr').style.display='block';
    calculateScore();
}

function calculateScore(){
    userAnswers.forEach((answer,index)=>{
        if(answer==quizData[index].correct){
            score++;
        }
    });
    document.getElementById('score').textContent = `${score} out of ${quizData.length}`;
}

window.onload = function () {

};