function greeting(store_name) {
  console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`) ;
}
function app() {
  for (let i = 0; i < 5; i++)
  greeting("Hello Kitty's Shop");
}
app();