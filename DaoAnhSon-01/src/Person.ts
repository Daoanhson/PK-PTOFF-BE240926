export class Person {
    private _id:number;
    private _name:string;
    private _email:string;
    private _phone:string;

    constructor(id: number, name:string,email:string,phone:string) {
        this._id=id;
        this._name=name;
        this._email=email;
        this._phone=phone;
     }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
     getDetails():string{
      return `ID: ${this._id}, Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}`;
     }


}