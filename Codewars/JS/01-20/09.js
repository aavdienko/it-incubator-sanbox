// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

// Winter is coming, you must prepare your ski holidays. 
// The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
  const items = {}
  for(let i = 0; i < gloves.length; i++){
    if(!items[gloves[i]]) items[gloves[i]] = 1;
    else items[gloves[i]]++
  } 
  let pairs = 0
  Object.keys(items).forEach(el => pairs += Math.floor(items[el] / 2))
  
  return pairs
}

