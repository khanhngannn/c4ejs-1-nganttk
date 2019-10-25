const items = [];
let ipItem = document.getElementById('item');
let btnAdd = document.getElementById('btn_add');
let list = document.getElementById('list');
var count = -1
btnAdd.addEventListener('click', ()=>{
    items.push(ipItem.value);
    count++;
    console.log(items);
    addRow();
})

function addRow() {
    const div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `<li>${items[count]}</li><input type="button" value="delete" onclick="removeRow(this)"/>`;
    document.getElementById('list').appendChild(div);
  }
  function removeRow(input) {
    document.getElementById('list').removeChild(input.parentNode);
  }

