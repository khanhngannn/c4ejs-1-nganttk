const items = [];
let ipItem = document.getElementById('item');
let btnAdd = document.getElementById('btn_add');
let list = document.getElementById('list');
btnAdd.addEventListener('click', ()=>{
    items.push(ipItem.value);
    console.log(items);
    updateView();
})
function updateView(){
    for(let i = 0; i < items.length; i++){
        list.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`)
    }
}

