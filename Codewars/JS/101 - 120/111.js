
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
  const res = []
  for(let i = 0; i < array.length; i++){
    let el = i === 0 
      ? array[i]
      : i <= 1 
        ? array[i-1] + array[i]
        : res[i-1] + array[i]
    res.push(el)
  }
  return res
}
