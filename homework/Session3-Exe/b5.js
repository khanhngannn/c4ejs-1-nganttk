let stNum = prompt('Enter a squence of Number, separated by commas (,)');
let splNum = stNum.split(",").map(Number);
let sum = 0;
for(let i = 0; i < splNum.length; i++){
    sum+=splNum[i];
}
// console.log(sum);
alert(`The sum of them is ${sum}`)