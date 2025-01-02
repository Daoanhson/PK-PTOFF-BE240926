import { Person } from './Person';

export class Employee extends Person {
    private _position: string
    constructor(id: number, name: string, position: string) {
        super(id, name);
        this._position=position;
    }

    getPosition(): string {
        return this._position;
    }
}