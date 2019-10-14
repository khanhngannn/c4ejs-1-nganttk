let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let count = [];
let str = '';
for(let i = 0; i < list.length; i++){
    if(count[list[i]]){
        count[list[i]]+=1;
    }else{
        count[list[i]]= 1;
    }
}
for(i in count){
    str += `${i}: ${count[i]}\n`;
}
console.log(str);


