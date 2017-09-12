var Sandwich = (function(oldSandwich){
  const bread = {"Focaccia": 5.00, "WholeWheat": 3.00, "NineGrain": 1.35, "LettuceWrap": 1.75, "Pita": 1.50, "None (I'm gluten intolerant)": 0.00};
  oldSandwich.getBreads = function(){
    return bread;
  };

   oldSandwich.selectedBreadAdder = function(selection){
  	selectedTopping += (bread[selection]);
  	allToppings.push(selection);
  	price(selection, selectedTopping);
 	};

 	oldSandwich.selectedBreadRemover = function(selection){
  	selectedTopping -= (bread[selection]);
  	allToppings.pop(selection);
  	price(selection, selectedTopping);
 	};

  return oldSandwich;
})(Sandwich || {});