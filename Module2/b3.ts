let arr: number[];
arr=[3,42,2,5,6];
function daonguoc(array: number[]): number[] {
  const daonguoc: number[]
  for (let i = array.length - 1; i >=0, i--) {
    daonguoc.push(array[i])
  }
  return daonguoc
}

console.log(daonguoc(arr));
