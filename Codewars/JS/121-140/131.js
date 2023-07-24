function catMouse(x){
  console.log(x)
  const arr = x.split('')
  console.log(arr)
  return arr.length < 6 ? 'Caught!' : 'Escaped!'
}


