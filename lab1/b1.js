// let randomNumber = Math.random().toFixed(2);
// console.log(randomNumber);

// let arr = [2,3,5,8,0];
// let item = arr[Math.floor((Math.random()*arr.length))]
// console.log(item);

let quizzes = [
    {
        question: 'Which fictional detective lived at 221b Baker Street?',
        choices: ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Homes'],
        rightAns: 'Sherlock Homes',
    },
    {
        question: 'What street food made by bees using nectar from flowers?',
        choices: ['Bread', 'Honey', 'Sugar', 'Potent'],
        rightAns: 'Honey',
    },
    {
        question: 'How many legs do an optopus has?',
        choices: ['4 legs', 'no legs', '8 legs', '2 legs'],
        rightAns: '8 legs',
    }
]
//let item = quizzes[Math.floor((Math.random() * quizzes.length))];
//console.log(item);
// count = 0
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
let point = 0;
for(let i = 0; i < quizzes.length; i++){
    let question = quizzes[i]['question']
    let string = "";
    shuffle(quizzes[i]['choices']);
    for(let j = 0; j < 4; j++){
       let choice = quizzes[i]['choices'][j];
       string = string + (j+1) + ". " + choice + "\n"
    }
    asw = prompt(`${question}\n${string}`)
    if(quizzes[i].choices[asw-1] == quizzes[i].rightAns){
        alert('Bravo!!!');
        point+=1;
    } else {
        alert('Good luck next time');
    }
}
alert('We are out of question :(');
alert(`You answered correctly ${point} out of ${quizzes.length} questions`);
