import { Room } from "./Room";
import { Booking } from "./Booking";
import { Person } from "./Person";
import { StandardRoom } from "./StandardRoom";
import { DeluxeRoom } from "./DeluxeRoom";
import { SuiteRoom } from "./SuiteRoom";


export class HotelManager{
    private _rooms: Room[]=[]
    private _bookings: Booking[] = [];
    private _customers: Person[] = [];

    addRoom(type: string, pricePerNight: number): void {
        let room: Room
        if (type === 'Standard') {
          room = new StandardRoom(this._rooms.length + 1, type, pricePerNight, true);

        } else if (type === 'Deluxe') {
          room = new DeluxeRoom(this._rooms.length + 1, type, pricePerNight, true);

        } else if (type === 'Suite') {
           room = new SuiteRoom(this._rooms.length + 1, type, pricePerNight, true);
        } else {
            console.log('Loại phòng không hợp lệ!');
            return;
        }

        if(room) {
            this._rooms.push(room);
            console.log(`Loai phong dat ${type} va so dem la ${pricePerNight}`)
        }

    }

    addCustomer(name: string, email: string, phone: string): Person {
        const customer = new Person(this._customers.length + 1, name, email, phone);
        this._customers.push(customer);
        console.log(`Customer: ${name}, ${email}, ${phone}`)
        return customer;
    }


    bookRoom(customerId: number, roomId: number, nights: number): Booking | null{
        const customer = this._customers.find(c => c.id === customerId);
        const room = this._rooms.find(r => r.roomId === roomId);
        if(!room?.isAvailable) {
            console.log("Phong da dat dat");
            return null;
        }
        if (customer && room) {
            // Dat phong thanh cong
            room.bookRoom();
            const totalCost = (room as any).calculateCost(nights)
            const booking = new Booking(this._bookings.length +1, totalCost, customer, room, nights);
            this._bookings.push(booking);
            return booking;
        } else {
            console.log('Id khang hang ko hop le, kiem tra lai');
            return null;

        }


    }

    releaseRoom(roomId: number): void {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            room.releaseRoom();
        }
    }

    listAvailableRooms(): void {
        const availableRooms = this._rooms.filter(r => r.isAvailable);
        console.log("Phong trong:", availableRooms);
    }

    listBookingsByCustomer(customerId: number): void {
        const customerBookings = this._bookings.filter(b => b.customer.id === customerId);
        console.log("Customer Bookings:", customerBookings);
    }

    calculateTotalRevenue(): number {
        return this._bookings.reduce((total, booking) => total + booking.totalCost, 0);
    }

    getRoomTypesCount(): void {

        // map lay tung loai phong
        const roomTypesCount = this._rooms.map(room => room.type)
        // reduce dem so luong tung loai phong
        .reduce((a,type)=>{
            a[type] = a[type]++
            return a; 
        },{} as Record<string, number>)
        
        console.log("So luong cac loai phong: ", roomTypesCount)

    }

    applyDiscountToRoom(roomId: number, discountRate: number): void {
        // Vi tri cua phong
        const roomIndex = this._rooms.findIndex(r => r.roomId === roomId);
        if (roomIndex) {
            const room = this._rooms[roomIndex];
            const discount = room.applyDiscount(discountRate);
            console.log(`Room ID: ${roomId}, Discounted Price: ${discount}`);
        }
    }

    getRoomServices(roomId: number): void {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            console.log(`Room ID: ${roomId}, Dinh vu: ${room.getAdditionalServices()}`);
        }
    }

    getCancellationPolicy(roomId: number): void {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            console.log(`Room ID: ${roomId}, Cancel Policy: ${room.getCancellationPolicy()}`);
        }
    }
}