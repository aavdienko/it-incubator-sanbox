function cookie(x){
  
  let name = typeof x === "string" 
    ? "Zach"
    : typeof x === "number" 
    ? "Monica"
    : "the dog"
  
  return `Who ate the last cookie? It was ${name}!`
}
