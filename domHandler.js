	let sandwich = document.getElementById('sandwich').children;
	let components =[];
	let position = 0;

	for (let value of sandwich) {
		components.push(value.id);
	}	

const domBuilder = (input) => {
	let price = Object.values(input);
	let name = Object.keys(input);
	let finalString = "";
	
	for (var i = 0; i < name.length; i++){
		let string = "";
		string +=	 `<label class="checkbox-inline"><input type="checkbox" name="${name[i]} " value="${price[i]}">${name[i]}</label>`
		finalString += string;
	}	
	writeSandwich(finalString);
	position += 1;
};

const writeSandwich = (string) => {
	let type = document.getElementById(components[position]);
	type.innerHTML = string;
};

domBuilder(Sandwich.getBreads());
domBuilder(Sandwich.getMeats());
domBuilder(Sandwich.getCheezes());
domBuilder(Sandwich.getVeggies());
domBuilder(Sandwich.squirtCondiments());