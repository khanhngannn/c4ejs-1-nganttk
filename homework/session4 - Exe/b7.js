const products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'white',
        category: 'charge',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'black',
        category: 'phone',
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'gray',
        category: 'phone',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'blue',
        category: 'phone',
    },
];
//9.
// let ipCat = prompt('Enter your category?');
// for (let i = 0; i < products.length; i++) {
//     if (ipCat === products[i].category) {
//         console.log('-----------');
//         console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
//     }
// }

//10.
// let count = 0;
// for (let i = 0; i < products.length; i++) {
//     count++;
//     console.log('-----------');
//     console.log(`#${count}. Name: ${products[i].name}\nPrice: ${products[i].price}`);
// }
// let pos = prompt('Enter product position:');
// console.log(`Name: ${products[pos-1].name}\nBrand: ${products[pos-1].brand}\nPrice: ${products[pos-1].price}\nColor: ${products[pos-1].color}\nCategory: ${products[pos-1].category}`);

//11
products[0].providers = [
    'Phukienaero',
    'Dientuccc',
]
products[1].providers = [
    'tgdd',
    'ddghn',
    'vhstore',
]
products[2].providers = [
    'tgdd',
]
products[3].providers = [
    'tgdd',
]
console.log(products);
let prov = prompt('Enter provider');
let i;
let result = []
for (i = 0; i < products.length; i++) {
  position = products[i].providers.indexOf(prov);
  if (position>=0){
      result.push(products[i])
  }
 }
console.log(result);
for(let i = 0; i < result.length; i++){
    console.log(`Name: ${result[i].name}\nBrand: ${result[i].brand}\nPrice: ${result[i].price}\nColor: ${result[i].color}\nCategory: ${result[i].category}\nProvides: ${result[i].providers}`);
}





