// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

function isNice(arr){
  if(!arr.length) return false
  const dic = {}
  arr.forEach(n => dic[n] = 1)
  return arr.every(n => dic[n - 1] || dic[n + 1] )
}

