<<<<<<< HEAD
function dwarfRollCall (dwarves) {
  var rollCallArr = [];
=======
function dwarfRollCall(dwarves) {
  var rollCallArr = ``;
>>>>>>> 9422ba5940651111f3f8daf1943e20e1158ee81b
  
  for (var i = 0; i < dwarves.length; i += 1) {
    var dwarf = i + 1 + `. ` + dwarves[i] + ` `;
    
    rollCallArr.push(dwarf);
  }
  
  return rollCallArr.join('');
}



<<<<<<< HEAD
function summonCaptainPlanet (planeteerCalls){
  var cappedAndExp = [];
  
  for (var i = 0; i < planeteerCalls.length; i += 1) {
    var planeteerCall = planeteerCalls[i].toUpperCase();
    
    cappedAndExp.push(planeteerCall + `!`);
  }
  
  return cappedAndExp;
=======
function summonCaptainPlanet(planeteerCalls){
>>>>>>> 9422ba5940651111f3f8daf1943e20e1158ee81b
}



function longPlaneteerCalls (words) {
  var count = 0;
  
  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    
    if (word.length > 4) {
      count += 1;
    }
  }
  
  return count > 0;
}



function findTheCheese (foods) {
  var cheeses = [`cheddar`, `gouda`, `camembert`];
  
  for (var i = 0; i < foods.length; i += 1) {
    var food = foods[i];
    
    if (cheeses.indexOf(food) > -1) {
      return food;
    }
  }
  
  return 'no cheese!';
}
