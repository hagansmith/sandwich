var Sandwich = (function(oldSandwich){
  const condiments = {"Mayo": .25, "Catsup": .25, "Mustard": .25, "Relish": .50, "Spicy Mustard": 1.50, "None(Flavorless)": 0};
  oldSandwich.squirtCondiments = function(){
    return condiments;
  };

  // oldSolarSystem.setPlanet = function(newPlanet){
  //   planets.push(newPlanet);
  // };

  return oldSandwich;
})(Sandwich || {});