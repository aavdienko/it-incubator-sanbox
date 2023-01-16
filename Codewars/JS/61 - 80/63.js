


function uefaEuro2016(teams, scores){
  const text = `At match ${teams[0]} - ${teams[1]}, `
    return scores[0]>scores[1]
      ? text + `${teams[0]} won!`
      : scores[0]<scores[1] 
      ? text + `${teams[1]} won!`
      : text + 'teams played draw.'
  // your code...
}
