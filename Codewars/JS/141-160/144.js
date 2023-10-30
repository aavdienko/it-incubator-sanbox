function mergeArrays(a, b) {
  const arr = a.concat(b).sort((a,b) => a-b)
  const res = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[i-1]){
      res.push(arr[i])
    }
  }
  return res
}
