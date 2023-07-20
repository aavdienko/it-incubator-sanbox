function whoIsPaying(name){
  //your code here
  console.log(name)
  const arr = [name]
  if (!name.length) return ['']
  
  if (name.length <= 2) {
    return arr
  }
  
  return [...arr, name.slice(0,2)]
}
