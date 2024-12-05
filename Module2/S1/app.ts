console.log("Hello world")
// Log 3 lan 
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")


// Static typing, kieu du lieu tinh 
// let fullName: string = "Dao Son"; 
let age: number; 
let gender: boolean;

let randomValue: any; 
randomValue = 18; 
randomValue = "Hello World";
randomValue = true;

// 1. Variable - Bien 
// var, let, const
let number1: number;
number1=19;

const PI: number = 3.14; 

// 2. Cau dk re nhanh 
// if (condition) {
//  // do something
// }

// Vong lap - Loop

// 4. Function - Ham 
// function sum(number1: number, number2: number): number {
//     return number1 +number2;
// }

// Khai báo hai biến firstName và lastName 
let firstName: string = "dao"; 
let lastName: string = "son"; 

// Hàm viết hoa chữ cái đầu 
function vietHoa(name:string): string {
    return name.charAt(0).toLocaleUpperCase() + name.slice(1); 
}

// Viet hoa chu cai dau 
firstName = vietHoa(firstName)
lastName = vietHoa(lastName)

// Ghep 2 chuoi lai voi nhau co dau cach o giau 
let fullName: string = `${firstName} ${lastName}`; 
console.log(fullName);

// ham loc ky tu trung lap
let chuoi: string = "hello world";

// Ham su ly trung lap 
function removeKt(kt:string):string{
    return Array.from(new Set(kt)).join("");
}

// LOC KY TU TRUNG LAP TRONG CHUOI
console.log(removeKt(chuoi)); 


// XAY DUNG HAM THUC HIEN PHEP TINH + - * /

// Ham kiem tra xem co phai la so hay la string
function changeNumber(i: number| string) :number{
    const num = Number(i); 
    if (isNaN(num)) {
        throw new Error("Giá trị ko hợp lệ")
    }
    return num
}


// Ham cong 
function cong(a: number | string, b:number | string): number{
    return changeNumber(a) + changeNumber(b);
}

function tru(a: number | string, b:number | string): number{
    return changeNumber(a) - changeNumber(b);
}

function nhan(a: number | string, b:number | string): number{
    return changeNumber(a)*changeNumber(b);
}

function chia(a: number | string, b:number | string): number{
    const numB = changeNumber(b);
    if(numB === 0){
        throw new Error("Loi ko the chia cho ko")

    } else {
        return changeNumber(a)/changeNumber(b);
    }
}

// TINH BANG CUU CHUONG
function BangCuuChuong(): void {

    for (let i = 1; i <= 10; i++) {
        let row: string = '';
        for (let j = 1; j <= 10; j++) {
            row += `${i} x ${j} = ${i * j}\t`; 
        }
        console.log(row); 
    }
}

// Gọi hàm để in bảng cửu chương
BangCuuChuong();


// GAME ĐOÁN SỐ
function GuestNumber(): void {

    // Gán giá trị ngẫu nhiên từ 1 đến 10 
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 đến 10
    let luotDoan = 3; 

    while (luotDoan > 0) {
     
        const InputNumber = prompt("Nhập số dự đoán từ 1 đến 10:");
        const Guess = Number(InputNumber);

        // Validate số chỉ trong khoảng từ 1-10
        if (isNaN(Guess) || Guess < 1 || Guess > 10) {
            alert("Vui lòng nhập một số hợp lệ từ 1 đến 10.");
            continue; // Yêu cầu nhập lại
        }

        // So sánh với số ngẫu nhiên
        if (Guess === randomNumber) {
            alert("Đúng rồi");
            return; 
        } else {
            alert("Số bạn đoán lớn hơn số ngẫu nhiên.");
        }

        luotDoan--; 
        alert(`Bạn còn ${luotDoan} lượt đoán.`);
    }

    alert(`Bạn đã thua! Số ngẫu nhiên là: ${randomNumber}.`);
}
