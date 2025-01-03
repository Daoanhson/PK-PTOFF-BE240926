"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(bookingId, totalCost, customer, room, nights) {
        this._bookingId = bookingId;
        this._totalCost = totalCost;
        this._customer = customer;
        this._room = room;
        this._nights = nights;
    }
    get customer() {
        return this._customer;
    }
    set customer(customer) {
        this._customer = customer;
    }
    get totalCost() {
        return this._totalCost;
    }
    set totalCost(totalCost) {
        this._totalCost = totalCost;
    }
    getDetails() {
        return `Booking ID: ${this._bookingId},
        Customer: ${this._customer.getDetails}, Type: ${this._room.type}, Nights: ${this._nights}, Total Cost: ${this._totalCost}`;
    }
}
exports.Booking = Booking;
