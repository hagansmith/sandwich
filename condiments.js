var Sandwich = (function(oldSandwich){
  const condiments = {"Mayo": 0.25, "Catsup": 0.25, "Mustard": 0.25, "Relish": 0.50, "Spicy Mustard": 1.50, "None (Flavorless)": 0.00};
  oldSandwich.squirtCondiments = function(){
    return condiments;
  };

	oldSandwich.selectedCondimentAdder = function(selection){
  	selectedTopping += (condiments[selection]);
  	allToppings.push(selection);
  	price(selection, selectedTopping);
 	};

 	oldSandwich.selectedCondimentRemover = function(selection){
  	selectedTopping -= (condiments[selection]);
  	allToppings.pop(selection);
  	price(selection, selectedTopping);
 	};

  return oldSandwich;
})(Sandwich || {});