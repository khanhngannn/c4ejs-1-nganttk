
const arr = [3,4,5,-9,10,-88,2];
let num = Number(prompt('Enter a number'));
var check = false;
for(let i = 0; i<arr.length; i++){
    if(num == arr[i]){
        check = true;
        alert(`${num} is FOUND in my array at index ${i}`);
    }
}
if(check==false){
    alert(`${num} is NOT found in my array`);
}