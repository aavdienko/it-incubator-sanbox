const filterString = (value) => {
  let matches = value.replace(/[^0-9]/g,"")
  return +matches
}
