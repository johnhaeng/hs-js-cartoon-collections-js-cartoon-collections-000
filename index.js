
function dwarfRollCall (dwarves) {
  var rollCallArr = [];

  for (var i = 0; i < dwarves.length; i += 1) {
    var dwarf = i + 1 + `. ` + dwarves[i] + ` `;
    
    rollCallArr.push(dwarf);
  }
  
  return rollCallArr.join('');
}



function summonCaptainPlanet (planeteerCalls){
  var cappedAndExpressionMark = [];
  
  for (var i = 0; i < planeteerCalls.length; i += 1) {
    var planeteerCall = planeteerCalls[i].toUpperCase();
    
    cappedAndExpressionMark.push(planeteerCall + `!`);
  }
  
  return cappedAndExpressionMark;
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
