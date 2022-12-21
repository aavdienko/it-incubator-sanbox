// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

function points(games) {
  let points = 0
  games.forEach(item => {
    if(item[0] > item[2]){
      points += 3
    } else if (item[0] === item[2]){
      points += 1
    }
  })
  return points
}
