function findDup( arr ){
  
  return arr.sort((a,b)=>a-b).filter((v,i,arr)=>v===arr[i+1])*1;
}
