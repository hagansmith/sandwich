var Sandwich = (function(oldSandwich){
  const veggies = {"Lettuce": .25, "Cucumber": .50, "Pickle": .75, "Onion": .35, "Avacoado": 300.00, "None(As in no veggies)": 0};
  oldSandwich.getVeggies = function(){
    return veggies;
  };

  // oldSolarSystem.setPlanet = function(newPlanet){
  //   planets.push(newPlanet);
  // };

  return oldSandwich;
})(Sandwich || {});