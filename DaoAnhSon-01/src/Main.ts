import { HotelManager } from "./HotelManager";

class Main {
    private _HotelManager: HotelManager;
    constructor() {
        this._HotelManager = new HotelManager();
    }

    run(): void {


        let loop: boolean = true;

        while (loop) {
            console.log("MENU CHỨC NĂNG:");

            console.log("1.	Thêm khách hàng");
            console.log("2.	Thêm phòng");
            console.log("3.	Đặt phòng");
            console.log("4.	Trả phòng");
            console.log("5.	Hiển thị danh sách phòng còn trống");
            console.log("6.	Hiển thị danh sách đặt phòng của khách hàng");
            console.log("7.	Tính tổng doanh thu từ các đặt phòng");
            console.log("8.	Đếm số lượng từng loại phòng");
            console.log("9.	Áp dụng giảm giá cho phòng");
            console.log("10. Hiển thị các dịch vụ bổ sung của phòng");
            console.log("11. Hiển thị chính sách hủy phòng");
            console.log("12. Thoát chương trình");


            let choice = prompt("Nhập vào chức năng mà bạn muốn chọn");

            switch (choice) {
                case "1":

                    let name = prompt("Nhập vào tên khách hàng: ");
                    let phone = prompt("Nhập vào số điện thoại khách hàng:");
                    let email = prompt("Nhập vào email khách hàng:");

                    if (!name || !phone || !email) {
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._HotelManager.addCustomer(name, phone, email);
                    }

                    break;

                case "2":

                    let type = prompt("Nhập vào loại phòng (Standard, Deluxe, Suite): ')");
                    let pricePerNight = parseFloat(prompt('Nhập giá mỗi đêm: ') || '1')

                    if (!type) {
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._HotelManager.addRoom(type, pricePerNight);
                    }
                    break;

                case "3":
                    let customerId = parseFloat(prompt("Nhập vào mã khách hàng:") || "");
                    let roomId = parseFloat(prompt("Nhập vào mã phòng:") || "");
                    let nights = parseFloat(prompt("Nhập vào số đêm:") || "");

                    if (!customerId || !roomId || !nights) {
                        console.log("Nhập không hợp lệ");
                    } else {

                        this._HotelManager.bookRoom(customerId, roomId, nights);
                    }
                    break;

                case "4":
                    let roomIdReleaseRoom = parseFloat(prompt("Nhập vào mã phòng muốn trả:") || "");
                    if (!roomIdReleaseRoom) {
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._HotelManager.releaseRoom(roomIdReleaseRoom);
                    }
                    break;

                case "5":

                    this._HotelManager.listAvailableRooms();
                    break;

                case "6":

                    let customerIdList = parseFloat(prompt("Nhập vào mã khách hàng") || "");
                    if (!customerIdList) {
                        console.log("Nhập không hợp lệ");
                    } else {
                        this._HotelManager.listBookingsByCustomer(customerIdList);
                    }
                    break;

                case "7":

                    console.log(`Tổng doanh thu: ${this._HotelManager.calculateTotalRevenue()}`);

                    break;

                case "8":
                    this._HotelManager.getRoomTypesCount();

                    break;

                case "9":

                    break;

                case "10":

                    break;
                case "11":

                    break;

                case "12":;
                    console.log("Hẹn gặp lại");
                    loop = false;
                    break;

                default:
                    console.log("Nhập không hợp lệ");
                    break;
            }
        }


    }
}

let app = new Main();
app.run();