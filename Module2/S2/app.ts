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
arr=[3,42,2,5,6,25,53,7,70];


// Hàm đếm các số lớn hơn or = 10 
function demso(so: number[]): number{
    let count=0;
    for (let i of so) {
        if(i >=10){
            count++; 
        }
    }
    return count;
}

console.log(demso(arr))


