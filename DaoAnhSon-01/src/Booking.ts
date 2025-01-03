import { Person } from "./Person"
import { Room } from "./Room"

export class Booking {
    private _bookingId: number
    private _totalCost: number
    private _customer: Person
    private _room: Room
    private _nights: number

    constructor(bookingId: number,totalCost: number,
        customer: Person, room: Room,nights: number) {
            this._bookingId=bookingId
            this._totalCost=totalCost
            this._customer=customer
            this._room = room
            this._nights = nights
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


    getDetails(): string {
        return `Booking ID: ${this._bookingId},
        Customer: ${this._customer.getDetails}, Type: ${this._room.type}, Nights: ${this._nights}, Total Cost: ${this._totalCost}`;
    }



}