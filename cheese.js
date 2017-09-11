var Sandwich = (function(oldSandwich){
  const cheese = {"Cheddar": .50, "Pimento": 2.00, "Gouda": 1.00, "Parmesan": 1.75, "Today's Funky Rare": 6.00, "None (Cheese gives me the tummy ache.)": 0};
  oldSandwich.getCheezes = function(){
    return cheese;
  };

  // oldSolarSystem.setPlanet = function(newPlanet){
  //   planets.push(newPlanet);
  // };

  return oldSandwich;
})(Sandwich || {});