// function takeUmbrella(weather, chance) {
//   console.log(weather, chance)
//   //code here 
//   if(weather === 'sunny' && chance <= 0.5){
//     return false
//   } if (weather === 'cloudy' && chance <= 0.2){
//     return false
//   } 
//     return true
// }

const takeUmbrella = (weather, chance) => {
  return weather === 'sunny' && chance <= 0.5 
          ? false
          : weather === 'cloudy' && chance <= 0.2
          ? false
          : true
}
