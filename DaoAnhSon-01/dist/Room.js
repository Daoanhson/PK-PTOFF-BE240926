"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(roomId, type, pricePerNight, isAvailable) {
        this._roomId = roomId;
        this._type = type;
        this._pricePerNight = pricePerNight;
        this._isAvailable = isAvailable;
    }
    get roomId() {
        return this._roomId;
    }
    set roomId(id) {
        this._roomId = id;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get pricePerNight() {
        return this._pricePerNight;
    }
    set pricePerNight(pricePerNight) {
        this._pricePerNight = pricePerNight;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    set isAvailable(isAvailable) {
        this._isAvailable = isAvailable;
    }
    bookRoom() {
        return this._isAvailable = false;
    }
    releaseRoom() {
        return this._isAvailable = true;
    }
}
exports.Room = Room;
