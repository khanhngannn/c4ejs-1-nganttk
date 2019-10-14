const inventoryByBrand = {
    dell: [
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
    ],
    hp: [
        {
            name: 'HP Envy 13qa',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'HP Pavilion',
            price: 14000,
            brand: 'HP',
            quantity: 7,
        },
    ],
    asus: [
        {
            name: 'Asus Zenbook',
            price: 20000,
            brand: 'Asus',
            quantity: 4,
        }
    ]
}
let brand = prompt('Which brand');
let keys = Object.keys(inventoryByBrand);
let count = 0;
let result = "";
let detail = 0;
for (let i = 0; i < keys.length; i++) {

    //console.log(inventoryByBrand[Object.keys(inventoryByBrand)[i]]);
    if(keys[i] == brand){
        result = `There are  ${inventoryByBrand[brand].length} generations of '${keys[i].toUpperCase()}' in inventory`;
        for (let j = 0; j < inventoryByBrand[brand].length; j++) {
            result += "\n " +  inventoryByBrand[brand][j].name
            detail += inventoryByBrand[brand][j].price * inventoryByBrand[brand][j].quantity
        }
        detail = detail * 1000;
        var nf = new Intl.NumberFormat();
        detail = nf.format(detail);
        alert(result + '\n' +  'With total value:  ' + detail + 'VND');
    }
}





