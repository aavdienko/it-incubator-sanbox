function differenceInAges(ages){
  let minValue = ages[0]
  for( i = 1; i < ages.length; i++ ){
    if (ages[i] < minValue) {
        minValue = ages[i]
     }
  }
  
  let maxValue = ages[0]
  for( i = 1; i < ages.length; i++ ){
    if (ages[i] > maxValue) {
        maxValue = ages[i]
     }
  }
  
  let diff = maxValue - minValue
  return [minValue, maxValue, diff]
  
}
