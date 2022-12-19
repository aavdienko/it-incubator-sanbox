function heavyMetalUmlauts(text) {
  let res = ''
  const dictionary = {
    A: 'Ä', E: 'Ë', I: 'Ï', O: 'Ö', U: 'Ü', Y: 'Ÿ',
    a: 'ä', e: 'ë', i: 'ï', o: 'ö', u: 'ü', y: 'ÿ',
  }; 
  
  for(let i = 0; i < text.length; i++){
    if(dictionary[text[i]]) res += dictionary[text[i]]
    else res += text[i]
  }
  return res
}
