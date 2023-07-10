const digitize = (n) => {
  //code here
  const arr = n = 0
  ? 0
  : n.toString().split('').reverse()
  
  return arr.map(nString => Number(nString))
}
