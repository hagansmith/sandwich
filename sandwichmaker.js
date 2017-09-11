let finalPrice = 0;
let footer = document.getElementById('footer');
let selectedTopping = [];


// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggies");
var condimentChooser = document.getElementById("condiments");

const selected = (event) => {
	console.log(event.target.value);
}

breadChooser.addEventListener("change", selected)
meatChooser.addEventListener("change", selected)
cheeseChooser.addEventListener("change", selected)
veggieChooser.addEventListener("change", selected)
condimentChooser.addEventListener("change", selected)



// meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
//});







footer.innerHTML = `<h3 class="text-center">${finalPrice}</h3>`