let arr: number[]; 
arr = [3,6,9,4];

function sort(array: number[]) :number[]{
  const sortarray=[]; 
  for (let i=0; i < array.length; i++) {
    for(let j =0; j< array.length - 1 - i;j++){
      if(array[j]<array[i]) {
        const phantu = sortarray[j];
        array[j] = array[j + 1];
        array[j + 1] = phantu;
      
      
    }
  }
}
return sortarray=[]
}

