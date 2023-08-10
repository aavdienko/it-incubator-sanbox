const groupByCommas = (n) => {
  if(n.length <= 3){
    return n
  }
  return n.toLocaleString()
}
