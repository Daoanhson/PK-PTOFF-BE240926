class GeometryCalculator{
    constructor(){}

    circleArea(radius: number): number {
        return (radius**2)*3.14;
    }
    circlePerimeter(radius: number): number{
        return radius*2*3.14;
    }
    triangleArea(base: number, height: number): number {

        return (base*height)/2;
    }
    trianglePerimeter(a: number, b: number, c: number): number {

        return a+b+c;

    }
    rectangleArea(width: number, height: number): number {

        return width*height;

    }
    rectanglePerimeter(width: number, height: number): number {

        return 2*(width+height);

    }
    parallelogramArea(base: number, height: number): number {

        return base*height;

    }
    parallelogramPerimeter(a: number, b: number): number{

        return (a+b)*2;

    }
    rhombusArea(d1: number, d2: number): number{

        return (d1*d2)/2;

    }
    rhombusPerimeter(side: number): number{
        return side*4;
        
    }

}

class Main{
    geometryCalculator: GeometryCalculator;

    constructor(){
        this.geometryCalculator = new GeometryCalculator;
    }

    bootstrap(){
        console.log("========== Menu chức năng ==========");
        console.log("1.Tính diện tích và chu vi hình tròn");
        console.log("2.Tính diện tích và chu vi hình tam giác");
        console.log("3.Tính diện tích và chu vi hình chữ nhật");
        console.log("4.Tính diện tích và chu vi hình bình hành");
        console.log("5.Tính diện tích và chu vi hình thoi");
        console.log("6.Dừng chương trình");
        let check: boolean = true;
        while(check){
       const choice = prompt("Nhập lựa chọn của bạn:");

        if (choice === "6") {
           break;
         }

            switch (input){
                case "1":
                     let radius: number = parseFloat(prompt("Bán Kính: "));
                     console.log("Diện tích hình tròn:", calculator.circleArea(radius));
                     break;
                case "2":
                    let h: number = Number(prompt("Chiều cao:"));
                    let d: number = Number(prompt("Chiều dài đánh"));
                    console.log(`Diện tích hình tam giác: ${this.geometryCalculator.triangleArea(h,d)}`);
                   // 2 cạnh còn lại 
                    let b: number = Number(prompt("Cạnh 1"));
                    let c: number = Number(prompt("Cạnh 2"));
                    console.log(`Chu vi hinh tam gia: ${this.geometryCalculator.trianglePerimeter(d,b,c)}`);
                    break;
                case "3":
                    //
                    let width: number = Number(prompt("Chiều rộng hình chữ nhật"));
                    let heigh: number = Number(prompt("Chiều dài hình chữ nhật"));
                    console.log(`Diện tích hình chữ nhật: ${this.geometryCalculator.rectangleArea(width,heigh)}`);
                    console.log(`Chu vi hình chữ nhật: ${this.geometryCalculator.rectanglePerimeter(width,height)}`);
                    break;
                case "4":
                    //
                    let canhday: number = Number(prompt("Hãy nhập vào cạnh đáy hình bình hành"));
                    let chieucao: number = Number(prompt("Hãy nhập vào chiều cao hình bình hành"));
                    console.log(`Diện tích hình bình hành: ${this.geometryCalculator.parallelogramArea(canhday,chieucao)}`);
                    let canhday2: number = Number(prompt("Hãy nhập vào chiều dài cạnh 1 hình bình hành"));
                    console.log(`Chu vi hình bình hành: ${this.geometryCalculator.parallelogramPerimeter(canhday,canhday2)}`);
                    break;
                case "5":
                    //
                    let d1: number = Number(prompt("Hãy nhập vào đường chéo 1 của hình thoi"));
                    let d2: number = Number(prompt("Hãy nhập vào đường chéo 2 của hình thoi"));
                    console.log(`Diện tích hình thoi: ${this.geometryCalculator.rhombusArea(d1,d2)}`);
                    let side: number = Number(prompt("Hãy nhập vào cạnh của hình thoi"));
                    console.log(`Chu vi hình thoi: ${this.geometryCalculator.rhombusPerimeter(side)}`);
                    break;
                case "6":
                
                    check = false;
                    console.log("Cảm ơn bạn!");
                    break;
            }
        }
    }
}

let main: Main = new Main;
main.bootstrap();
