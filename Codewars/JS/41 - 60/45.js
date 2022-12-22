// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  if(!array || array.length <= 1) return 0
  let min = array[0];
  let max = array[0];
  let sum = 0;
  array.forEach(el => {
    if(el < min) min = el
    if(el > max) max = el
    sum += el;
    
  })
  return sum - max - min
}
