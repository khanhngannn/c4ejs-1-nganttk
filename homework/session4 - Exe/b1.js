const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
let count = 0;
for (let x in product) {//x is property
    console.log(`${x}: ${Object.values(product)[count]}`);
    count++;
} 



