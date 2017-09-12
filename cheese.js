var Sandwich = (function(oldSandwich){
  const cheese = {"Cheddar": 0.50, "Pimento": 2.00, "Gouda": 1.00, "Parmesan": 1.75, "Today's Funky Rare": 6.00, "None (Cheese gives me the tummy ache.)": 0.00};
  oldSandwich.getCheezes = function(){
    return cheese;
  };

  oldSandwich.selectedCheeseAdder = function(selection){
  	selectedTopping += (cheese[selection]);
  	allToppings.push(selection);
  	price(selection, selectedTopping);
 	};

 	oldSandwich.selectedCheeseRemover = function(selection){
  	selectedTopping -= (cheese[selection]);
  	allToppings.pop(selection);
  	price(selection, selectedTopping);
 	};

  return oldSandwich;
})(Sandwich || {});