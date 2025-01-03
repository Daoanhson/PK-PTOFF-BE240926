"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRoom = void 0;
const Room_1 = require("./Room");
class StandardRoom extends Room_1.Room {
    constructor(roomId, type, pricePerNight, isAvailable) {
        super(roomId, type, pricePerNight, isAvailable);
    }
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return [];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoan 100% neu tra truoc 1 ngay";
    }
}
exports.StandardRoom = StandardRoom;
