function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  var f = 0;
    while ( f < facts.length){
      facts[f] = `${facts[f]}!!!`
      f++;
  }
  return facts;
}
