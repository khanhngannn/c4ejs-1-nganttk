let items = ['Jean', 'T-shirt', 'Socks'];
while(true){
let taskCode = prompt('Hi there, welcome to shop admin panel, what do you want (c, r, u, d)?');
    if (taskCode == 'r') {
        console.log('The current items are:');
        let n = 1;
        for (let i = 0; i < items.length; i++) {
            console.log(n + '. ' + items[i]);
            n++;
        }
    }
    else if (taskCode == 'c') {
        let addItem = prompt('Enter the name of the new item');
        items.push(addItem);
        alert('Done');
    }else if(taskCode == 'u'){
        let updateItem = Number(prompt('Enter the position you want to update'));
        let newItem = prompt('Enter the new name');
        items[updateItem-1] = newItem;
    }else if(taskCode == 'd'){
        let delItem = Number(prompt('Enter the position you want to delete'));
        items.splice(delItem-1, 1);
        alert('Done');
    }else{
        alert('This command is not supported');
        break;
    }
}
    

    
