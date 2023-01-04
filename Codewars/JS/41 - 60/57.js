const humanYearsCatYearsDogYears = function(humanYears) {
  let y1Cat = 15
  let y2Cat = (y1Cat + 9)
  let y3Cat = (y2Cat + 4)
  
  let y1Dog = 15
  let y2Dog = (y1Cat + 9)
  let y3Dog = (y2Cat + 5)
  
  if (humanYears === 1){ 
  return [humanYears, y1Cat, y1Dog]
  } else if (humanYears === 2){
    return [humanYears, y2Cat, y2Dog]
  } else if (humanYears === 3){
    return [humanYears, y3Cat, y3Dog]
  } else {
    let multYears = humanYears - 3
    let catYears = y3Cat + (multYears * 4)
    let dogYears = y3Dog + (multYears * 5)
    return [humanYears, catYears, dogYears ]
  }
  
  
  
  
  
}
