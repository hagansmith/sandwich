var Sandwich = (function(oldSandwich){
  const meat = {"Turkey": 2.00, "Ham": 2.00, "Pepperoni": 1.35, "Roast Beast": 1.75, "Speck": 1.50, "None (Don't even know why I am having a sandwich)": 0.00};
  oldSandwich.getMeats = function(){
    return meat;
  };

  oldSandwich.selectedMeatAdder = function(selection){
  	selectedTopping += (meat[selection]);
  	allToppings.push(selection);
  	price(selection, selectedTopping);
 	};

 	oldSandwich.selectedMeatRemover = function(selection){
  	selectedTopping -= (meat[selection]);
  	allToppings.pop(selection);
  	price(selection, selectedTopping);
 	};
  return oldSandwich;
})(Sandwich || {});