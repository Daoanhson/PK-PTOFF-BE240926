"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, name, email, phone) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    getDetails() {
        return `ID: ${this._id}, Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`;
    }
}
exports.Person = Person;
