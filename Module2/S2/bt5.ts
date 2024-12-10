// Mảng 2 chiều 
const arr2C: number[][] = [[2,5,5],[53,2,5],[32,25,48]];

// In ra mang 2 chiều 

function manghaichieu(array: number[][]): void {
    for (let i = 0; i < array.length; i++) {
        let row = ""; 
        for (let j = 0; j < array[i].length; j++) {
            row += array[i][j] + " "; 
        }
        console.log(row);
    }
}

console.log(manghaichieu(arr2C))
