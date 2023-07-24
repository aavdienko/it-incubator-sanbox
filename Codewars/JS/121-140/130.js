const capitals = (word) => {
	// Write your code here
  const arr = word.split('')
  console.log(arr)
  const res = []
  for (let i = 0; i < arr.length; i++){
    arr[i] === arr[i].toUpperCase() 
      ? res.push(i)
      : arr[i]
  }
    return res
};
