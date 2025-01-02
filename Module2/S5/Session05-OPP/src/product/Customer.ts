import { Person } from "./Person";

export class Customer extends Person{
    private _email:string;
    private _phone:string;

    constructor(id: number, name:string,email:string, phone:string) {
        super(id,name)
        this._email=email;
        this._phone=phone;
     }

    public getContactDetails(): string{
        return `Infor ${this.name}: ${this.id}, ${this._email}, ${this._phone}`

     }


}