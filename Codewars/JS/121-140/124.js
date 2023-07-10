function mergeArrays(arr1, arr2) {
  let mergedArr = arr1.concat(arr2) // combine both arrays
  console.log(mergedArr)
  mergedArr = new Set (mergedArr) // left unique values only
  mergedArr = Array.from(mergedArr) // create an array from Set of unique values
  return mergedArr.sort((a, b) => a - b)
}
