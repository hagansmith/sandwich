var Sandwich = (function(oldSandwich){
  const bread = {"Focaccia": 5.00, "Whole Wheat": 3.00, "Nine Grain": 1.35, "Lettuce Wrap": 1.75, "Pita": 1.50, "None(I'm gluten intolerant)": 0};
  oldSandwich.getBreads = function(){
    return bread;
  };

  //  oldSandwich.setBread = function(breadSlices){
  //   bread.push(breadSlices);
  // };

  return oldSandwich;
})(Sandwich || {});