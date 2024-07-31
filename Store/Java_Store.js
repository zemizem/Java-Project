function greeting(store_name) {
  console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`) ;
}
function app() {
  for (let i = 0; i < 5; i++)
  greeting("Hello Kitty's Shop");

}
let items = ['Rings', 'Bracelets', 'Necklaces'];


function shop() {
  let store_details = {
    items: ['Shirts', 'Pants', 'Jackets'],
    sales: 0,
    add_item: function(item) {
      this.items.push(item);
  },
    bought_item: function(item) {
      let index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${item} from the array.`);
      this.sales++; 
    } else {
      console.log(`The item "${item}" does not exist in the array.`);
    }
    }
  }
 
  let newItems = ['Watch', 'Earrings', 'Hat', 'Scarf', 'Gloves'];
  
  for (let i = 0; i < newItems.length; i++) {
    add_item(items, newItems[i]);

  store_details.bought_item(items, 'Hat');
  store_details.bought_item(items, 'Shoes');
 
  console.log(`Today we had ${store_details.sales} sales!`)
}
console.log("Thank you for shopping!");
}

app();
shop();

