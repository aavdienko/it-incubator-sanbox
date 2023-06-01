function array(string) {
  // TODO

  const arrStr = string.split(',')
  if (arrStr.length <= 2){
    return null
  } else {
    return arrStr.slice(1, arrStr.length - 1).join(' ')
  }
}
