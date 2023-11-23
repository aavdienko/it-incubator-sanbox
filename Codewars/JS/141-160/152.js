function nbYear(p0, percent, aug, p) {

  let result = p0;
  let i = 0;

  do {
    i = i + 1;
    result = Math.floor(result + (result * (percent / 100) + aug));
     console.log(i, result)
  } while (result < p);
  return i
  }
