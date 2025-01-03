"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeluxeRoom = void 0;
const Room_1 = require("./Room");
class DeluxeRoom extends Room_1.Room {
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return ['An sang'];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Hoan 50% neu hoan trc 2 ngay .";
    }
}
exports.DeluxeRoom = DeluxeRoom;
