function getLargerNumbers(a, b) {
  const newArray = []
  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] 
      ? newArray.push(a[i])
      : newArray.push(b[i])
  }
  return newArray;
}
