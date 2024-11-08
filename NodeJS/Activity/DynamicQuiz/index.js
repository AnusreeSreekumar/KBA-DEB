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
        right_answer: 3
    },

    {
        question: '2. Which element is represented by the chemical symbol "O"?',
        answers: ['a) Oxygen', 'b) Osmium', 'c) Ozone', 'd) Olivine'],
        right_answer: 1
    },

    {
        question: '3. Which planet is known as the "Red Planet"?',
        answers: ['a) Venus', 'b) Mars', 'c) Jupiter', 'd) Mercury'],
        right_answer: 2
    },

    {
        question: '4. Who wrote the play "Romeo and Juliet"?',
        answers: ['a) Charles Dickens', 'b) Mark Twain', 'c) William Shakespeare', 'd) Jane Austen'],
        right_answer: 3
    },

    {
        question: '5. What is the largest ocean on Earth?',
        answers: ['a) Atlantic Ocean', 'b) Indian Ocean', 'c) Southern Ocean', 'd) Pacific Ocean'],
        right_answer: 4
    },

];

let crntQnIndex = 0
let userAnswers = [];

function loadQuestion() {

    const currentQuestion = quizData[crntQnIndex];
    document.getElementById('questn').textContent = currentQuestion.question;
    const answersContainer = document.getElementById('mcq');
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const answerItem = document.createElement('li');
        answerItem.innerHTML = `<input type="radio" name="answer" value="${index}" /> ${answer}`;
        answersContainer.appendChild(answerItem);
    });

    // startTimer();
}

function nextQuestion() {

    const selectedAns = document.querySelector('input[name="answer"]:checked') 
    if(selectedAns){
        // const answers =  selectedAns.value 
        // console.log(answers);
        userAnswers[crntQnIndex] = parseInt(selectedAns.value);
        console.log(userAnswers);
    }
    crntQnIndex = crntQnIndex + 1;
    if (crntQnIndex >= quizData.length) {

        quizEnd();
    }
    else {
        loadQuestion();
    }

}

function prevQuestion() {

    if (crntQnIndex >= 0) {
        crntQnIndex = crntQnIndex - 1;
        loadQuestion();
    }
}

window.onload = function () {

};