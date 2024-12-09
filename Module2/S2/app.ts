// Hàm khởi tạo số nguyên 

// function inputNumber(): number[]{
//     const arr: number[]=[]; 

//     for(let i=0; i<10;i++){
//         const so = parseInt(prompt("Nhap so ")!);
//         if(!isNaN(so)){
//             arr.push(so);
//         } else {
//             console.log("Vui lòng nhập lại")
//             i--;
//         }
//     }

//     return arr;

// }

let arr: number[];
arr=[3,42,2,5,6,25,53,7,70,8];


// Tim gt lon nhat va nho nhat cung gia tri
function finnumber(array: number[]): { min: number; minIndex: number; max: number; maxIndex: number } {
    let min = array[0];
    let max = array[0];
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < 11; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }

    return { min, minIndex, max, maxIndex };
}

console.log(finnumber(arr))