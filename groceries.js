	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		img: "broccoli.jpeg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		img: "bread.jpeg"
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
		price: 11.99,
		img: "cake.jpeg"
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		price: 3.79,
		img: "eggs.jpeg"
	},
	{
		name: "granola",
		vegetarian: true,
		glutenFree: true,
		price: 7.49,
		img: "granola.jpeg"
	},
	{
		name: "meat",
		vegetarian: false,
		glutenFree: true,
		price: 8.99,
		img: "meat.jpeg"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		price: 4.49,
		img: "milk.jpeg"
	},
	{
		name: "riceflour",
		vegetarian: true,
		glutenFree: true,
		price: 13.47,
		img: "riceflour.jpeg"
	},
	{
		name: "tofu",
		vegetarian: true,
		glutenFree: true,
		price: 5.39,
		img: "tofu.jpeg"
	},
	{
		name: "soda",
		vegetarian: true,
		glutenFree: true,
		price: 2.49,
		img: "soda.jpeg"
	}
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Gluten-free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names.reverse();
}

function sortPrice(prods){
	return prods.sort((a,b) => a.price - b.price);
}

function appearanceProds(prods){
	
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
