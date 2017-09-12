let finalPrice = 0;
let footer = document.getElementById('footer');
let selectedTopping = 0;
let allToppings = [];

// Get a reference to the <select> element that has options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggies");
var condimentChooser = document.getElementById("condiments");

const price = (topping, selectedTopping) => {
	footer.innerHTML = `<h3 class="text-center"><p>${allToppings}</p></h3><h3 class="text-center">${selectedTopping}</h3>`
}

breadChooser.addEventListener("change", function(event){
	if (event.target.checked === true) {
	let topping = event.target.value;
	Sandwich.selectedBreadAdder(topping);
	} else if (event.target.checked === false){
	topping = event.target.value;
	Sandwich.selectedBreadRemover(topping);
	}
});

meatChooser.addEventListener("change", function(event){
	if (event.target.checked === true) {
	let topping = event.target.value;
	Sandwich.selectedMeatAdder(topping);
	} else if (event.target.checked === false){
	topping = event.target.value;
	Sandwich.selectedMeatRemover(topping);
	}
});

cheeseChooser.addEventListener("change", function(event){
	if (event.target.checked === true) {
	let topping = event.target.value;
	Sandwich.selectedCheeseAdder(topping);
	} else if (event.target.checked === false){
	topping = event.target.value;
	Sandwich.selectedCheeseRemover(topping);
	}
});

veggieChooser.addEventListener("change", function(event){
	if (event.target.checked === true) {
	let topping = event.target.value;
	Sandwich.selectedVeggieAdder(topping);
	} else if (event.target.checked === false){
	topping = event.target.value;
	Sandwich.selectedVeggieRemover(topping);
	}
});

condimentChooser.addEventListener("change", function(event){
	if (event.target.checked === true) {
	let topping = event.target.value;
	Sandwich.selectedCondimentAdder(topping);
	} else if (event.target.checked === false){
	topping = event.target.value;
	Sandwich.selectedCondimentRemover(topping);
	}
});







