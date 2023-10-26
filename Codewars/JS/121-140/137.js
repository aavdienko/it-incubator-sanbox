function makeNegative(num) {
  if (num === 0) return num
  return num > 0 
    ? num * -1
    : num
}
