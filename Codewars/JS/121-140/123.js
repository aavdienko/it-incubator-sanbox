function sumMix(x){
  return x.toString().split(',').map(n => Number(n)).reduce((acc, n)=>{
    acc += n
    return acc
  }, 0)
}
