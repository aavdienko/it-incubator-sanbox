// // return masked string
// function maskify(cc) {
//   if (cc.length < 4) return cc
//   const digits = cc.split('').splice(cc.length - 4, 4)
//   let arr = []
//   for (i = 0; i < cc.length - 4; i++) {
//     arr.push('#')
//   }
//   const res = arr.concat(digits).join('')
//   return res
// }


// return masked string
function maskify(cc) {
  let maskedString = "";
  for(let i = 0; i < cc.length; i++) {
    if(i < cc.length - 4) {
      maskedString = maskedString + "#";
    } else {
      maskedString = maskedString + cc.charAt(i);
    };
  }
  return maskedString;
}
