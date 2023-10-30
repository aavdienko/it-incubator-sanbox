function mostFrequentItemCount(arr) {
  if (!arr.length) return 0
  const frequencyMap = {};
    
  for (const item of arr) {
    if (frequencyMap[item]) {
      frequencyMap[item]++;
    } else {
      frequencyMap[item] = 1;
    }
  }
  let maxFrequency = 0;
  for (const key in frequencyMap) {
    if (frequencyMap[key] > maxFrequency) {
      maxFrequency = frequencyMap[key];
    }
  }
  return maxFrequency;
}
