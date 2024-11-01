/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

// *** 1 ***

// Using .filter() to filter and extract products with a value of less than 200.
const cheapProducts = products.filter((e) => e.price < 200);

console.log(cheapProducts);

// *** 2 ***

// Using .map() to extract the value of name from all objects
const productNames = products.map((e) => e.name);

console.log(productNames);

// *** 3 ***

// Using .filter() to first filter out all products of a certain category, then using .map() to extract the names from the filtered products
const catName = products
  .filter((e) => e.category === "electronics")
  .map((e) => e.name);

console.log(catName);

// *** 4 ***

// Using .some() to to check if any of the products have a price value higher than 1000
const kProducts = products.some((e) => e.price > 1000);

console.log(kProducts);

// *** 5 ***

// Using .reduce() to sum up the total value of all products. a is the accumulated value, and 0 is the starting value of a.
const totalPrice = products.reduce((a, e) => (a += e.price), 0);

console.log(totalPrice);
