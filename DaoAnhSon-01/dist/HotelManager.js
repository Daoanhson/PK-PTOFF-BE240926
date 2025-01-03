"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
const Booking_1 = require("./Booking");
const Person_1 = require("./Person");
const StandardRoom_1 = require("./StandardRoom");
const DeluxeRoom_1 = require("./DeluxeRoom");
const SuiteRoom_1 = require("./SuiteRoom");
class HotelManager {
    constructor() {
        this._rooms = [];
        this._bookings = [];
        this._customers = [];
    }
    addRoom(type, pricePerNight) {
        let room;
        if (type === 'Standard') {
            room = new StandardRoom_1.StandardRoom(this._rooms.length + 1, type, pricePerNight, true);
        }
        else if (type === 'Deluxe') {
            room = new DeluxeRoom_1.DeluxeRoom(this._rooms.length + 1, type, pricePerNight, true);
        }
        else if (type === 'Suite') {
            room = new SuiteRoom_1.SuiteRoom(this._rooms.length + 1, type, pricePerNight, true);
        }
        else {
            console.log('Loại phòng không hợp lệ!');
            return;
        }
        if (room) {
            this._rooms.push(room);
            console.log(`Loai phong dat ${type} va so dem la ${pricePerNight}`);
        }
    }
    addCustomer(name, email, phone) {
        const customer = new Person_1.Person(this._customers.length + 1, name, email, phone);
        this._customers.push(customer);
        console.log(`Customer: ${name}, ${email}, ${phone}`);
        return customer;
    }
    bookRoom(customerId, roomId, nights) {
        const customer = this._customers.find(c => c.id === customerId);
        const room = this._rooms.find(r => r.roomId === roomId);
        if (!(room === null || room === void 0 ? void 0 : room.isAvailable)) {
            console.log("Phong da dat dat");
            return null;
        }
        if (customer && room) {
            room.bookRoom();
            const totalCost = room.calculateCost(nights);
            const booking = new Booking_1.Booking(this._bookings.length + 1, totalCost, customer, room, nights);
            this._bookings.push(booking);
            return booking;
        }
        else {
            console.log('Id khang hang ko hop le, kiem tra lai');
            return null;
        }
    }
    releaseRoom(roomId) {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            room.releaseRoom();
        }
    }
    listAvailableRooms() {
        const availableRooms = this._rooms.filter(r => r.isAvailable);
        console.log("Phong trong:", availableRooms);
    }
    listBookingsByCustomer(customerId) {
        const customerBookings = this._bookings.filter(b => b.customer.id === customerId);
        console.log("Customer Bookings:", customerBookings);
    }
    calculateTotalRevenue() {
        return this._bookings.reduce((total, booking) => total + booking.totalCost, 0);
    }
    getRoomTypesCount() {
        const roomTypesCount = this._rooms.map(room => room.type)
            .reduce((a, type) => {
            a[type] = a[type]++;
            return a;
        }, {});
        console.log("So luong cac loai phong: ", roomTypesCount);
    }
    applyDiscountToRoom(roomId, discountRate) {
        const roomIndex = this._rooms.findIndex(r => r.roomId === roomId);
        if (roomIndex) {
            const room = this._rooms[roomIndex];
            const discount = room.applyDiscount(discountRate);
            console.log(`Room ID: ${roomId}, Discounted Price: ${discount}`);
        }
    }
    getRoomServices(roomId) {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            console.log(`Room ID: ${roomId}, Dinh vu: ${room.getAdditionalServices()}`);
        }
    }
    getCancellationPolicy(roomId) {
        const room = this._rooms.find(r => r.roomId === roomId);
        if (room) {
            console.log(`Room ID: ${roomId}, Cancel Policy: ${room.getCancellationPolicy()}`);
        }
    }
}
exports.HotelManager = HotelManager;
