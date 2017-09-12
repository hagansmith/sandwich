var Sandwich = (function(oldSandwich){
  const veggies = {"Lettuce": 0.25, "Cucumber": 0.50, "Pickle": 0.75, "Onion": 0.35, "Avacoado": 3.00, "None (As in no veggies)": 0.00};
  oldSandwich.getVeggies = function(){
    return veggies;
  };

  oldSandwich.selectedVeggieAdder = function(selection){
  	selectedTopping += (veggies[selection]);
  	allToppings.push(selection);
  	price(selection, selectedTopping);
 	};

 	oldSandwich.selectedVeggieRemover = function(selection){
  	selectedTopping -= (veggies[selection]);
  	allToppings.pop(selection);
  	price(selection, selectedTopping);
 	};

  return oldSandwich;
})(Sandwich || {});