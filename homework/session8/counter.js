const btn_add = document.getElementById('add');
const btn_sub = document.getElementById('sub');
let count = 0;
btn_add.addEventListener('click', e => {
    count++;
    document.getElementById('num').innerHTML = count;
})
btn_sub.addEventListener('click', e => {
    count--;
    document.getElementById('num').innerHTML = count;
})
