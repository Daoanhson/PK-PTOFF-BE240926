"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteRoom = void 0;
const Room_1 = require("./Room");
class SuiteRoom extends Room_1.Room {
    calculateCost(nights) {
        return this.pricePerNight * nights;
    }
    getAdditionalServices() {
        return ['Spa', 'Minibar'];
    }
    applyDiscount(discountRate) {
        return this.pricePerNight * (1 - discountRate);
    }
    getCancellationPolicy() {
        return "Khong hoan lai tien neu huy";
    }
}
exports.SuiteRoom = SuiteRoom;
