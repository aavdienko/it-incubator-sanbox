function findAverage(array) {
  console.log(array)
  if (array.length < 1) {
    return 0
  }
  let res = 0
  for (i = 0; i<array.length; i++){
    res += array[i] / array.length
  }
  return res
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

