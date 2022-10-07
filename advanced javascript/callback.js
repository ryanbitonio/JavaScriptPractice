function soldCart(product) {
  console.log(`Thank you for your purchase! ${product}`);
}

function addToCart(product) {
  console.log(`Here's the content of your cart: ${product}`);
}

function items(cart, product) {
  cart(product);
}

items(addToCart, "totebag");
items(soldCart, "totebag and shirt");
