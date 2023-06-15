function distinct(a) {
  console.log(a)
  let res = []
  a.forEach((el) => {
    if(!res.includes(el)){
       res.push(el)
       }
  })
  return res
}
