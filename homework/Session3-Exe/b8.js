let arr = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is Ngan and here is my sheep size:');
let flock = "";
for (let i = 0; i < arr.length; i++) {
    flock += arr[i] + ' ';
}
console.log(flock);
console.log('\n');
//8.2
let max = Math.max(...arr);
console.log(`Now my biggest sheep has size ${max}, let's shave it`);
console.log('\n');
//8.3
let indexOfMax = arr.indexOf(max);
arr[indexOfMax] = 8;
console.log('After shearing, here is my flock');
flock = "";
for (let i = 0; i < arr.length; i++) {
    flock += arr[i] + ' ';
}
console.log(flock);
console.log('\n');
//8.4
// let mon = "month ";
// console.log(mon.toUpperCase() + 1);
// console.log('One month has passed, my sheeps have grown, here are their sizes');
// for (i = 0; i < arr.length; i++) {
//     arr[i] += 50;
// }
// flock = "";
// for (let i = 0; i < arr.length; i++) {
//     flock += arr[i] + ' ';
// }
// console.log(flock);
// max = Math.max(...arr);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// indexOfMax = arr.indexOf(max);
// arr[indexOfMax] = 8;
// console.log('After shearing, here is my flock');
// flock = "";
// for (let i = 0; i < arr.length; i++) {
//     flock += arr[i] + ' ';
// }
// console.log(flock);
// console.log('\n');
//8.5
let mon = "month ";
for (let t = 1; t <= 3; t++) {
    if(t < 3){
    console.log(mon.toUpperCase() + t);
    console.log('One month has passed, my sheeps have grown, here are their sizes');
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 50;
    }
    flock = "";
    for (let i = 0; i < arr.length; i++) {
        flock += arr[i] + ' ';
    }
    console.log(flock);
    max = Math.max(...arr);
    console.log(`Now my biggest sheep has size ${max}, let's shave it`);
    indexOfMax = arr.indexOf(max);
    arr[indexOfMax] = 8;
    console.log('After shearing, here is my flock');
    flock = "";
    for (let i = 0; i < arr.length; i++) {
        flock += arr[i] + ' ';
    }
    console.log(flock);
    console.log('\n');
    }else if(t == 3){
        console.log(mon.toUpperCase() + t);
    console.log('One month has passed, my sheeps have grown, here are their sizes');
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 50;
    }
    flock = "";
    for (let i = 0; i < arr.length; i++) {
        flock += arr[i] + ' ';
    }
    console.log(flock);
    } 
}
console.log('\n');

//8.6
let total = 0;
for(let i = 0; i < arr.length; i++){
    total += arr[i];
}
console.log(`My flock has size in total: ${total}`);
let cost = total * 2;
console.log(`I would get ${total} * 2$ = ${cost}`);





