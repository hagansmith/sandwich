var Sandwich = (function(oldSandwich){
  const meat = {"Turkey": 2.00, "Ham": 2.00, "Pepperoni": 1.35, "Roast Beast": 1.75, "Speck": 1.50, "None(Don't even know why I am having a sandwich)": 0};
  oldSandwich.getMeats = function(){
    return meat;
  };

  // oldSolarSystem.setPlanet = function(newPlanet){
  //   planets.push(newPlanet);
  // };

  return oldSandwich;
})(Sandwich || {});