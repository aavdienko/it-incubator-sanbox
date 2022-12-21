// Your task is to sum the differences between consecutive pairs in the array in descending order.


function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0
  const sorted = arr.sort((a,b) => b - a)
  let sum = 0
  for(let i = 1; i < sorted.length; i++){
    sum += sorted[i-1] - sorted[i]
  }
  return sum
}
