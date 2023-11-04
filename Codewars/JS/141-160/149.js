function filter_list(arr) {
  // Return a new array with the strings filtered out
  return arr.filter(el => typeof el === 'number')
}
