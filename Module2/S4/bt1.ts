// Ham xử lý login
class Calculator {
    constructor(){}

    add(a: number, b: number): number{
        return a+b;
    }

    subtract(a: number, b: number): number{
        return a-b;
    }

    multiply(a: number, b: number): number{
        return a*b;
    }

    divide(a: number, b: number): number{
        if(b === 0){
            console.log("Số bị chia phải khác 0")
            return 0;
        }else{
            return a/b;
        }
    }
}

class Main{
    public calculator: Calculator
    constructor(){
        this.calculator = new Calculator;
    }

    boostrap(): void{
        let check: boolean = true;
        console.log("======= Lựa chọn =======");
        console.log("1.Cộng hai số");
        console.log("2.Trừ hai số");
        console.log("3.Nhân hai số");
        console.log("4.Chia hai số");
        console.log("5.Dừng chương trình");

        while (check){
    const choice = prompt("Nhập lựa chọn của bạn:");
    if (choice === "5") {
        break;
    }


    let input: string = String(prompt("Nhập từ 1-5 để bắt đầu chương trình"));
    if (input === "5") {
    break;
    }
    const a = parseFloat(prompt("Nhập số thứ nhất:"));
    const b = parseFloat(prompt("Nhập số thứ hai:"));
            switch (input){
                case "1":
                    //
                    console.log(`tổng: ${ this.calculator.add(a,b)}`);
                    break;
                case "2":
                    console.log(`Hiệu: ${this.calculator.subtract(a,b)}`);
                    break;
                case "3":

                    console.log(`Tích: ${this.calculator.multiply(a,b)}`);
                    break;
                case "4":
                    //
                    console.log(`Thương: ${this.calculator.divide(a,b)}`);
                    break;
                case "5":
                    //
                    check = false;
                    console.log("Cảm ơn bạn đã sử dụng máy tính cầm tay!");
                    break;
            }
        }
    }
}

let main: Main = new Main;
main.boostrap();
