let n = prompt('n = ');
let x = prompt('x = ');
if(0 < x && x < n/2){
    alert(`${x} is in lower half of ${n}`)
}else if(x < n){
    alert(`${x} is in higher half of ${n}`)    
}