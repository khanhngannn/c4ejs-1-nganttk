let stNum = prompt('Enter a squence of Number, separated by commas (,)');
let splNum = stNum.split(",").map(Number);
let min = Math.min(...splNum);
alert(`The smallest number is ${min}`);