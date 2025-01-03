export abstract class Room {
    private _roomId: number
    private _type:string
    private _pricePerNight: number
    private _isAvailable: boolean

    constructor(roomId: number, type: string,pricePerNight: number,isAvailable: boolean ){
        this._roomId=roomId
        this._type= type
        this._pricePerNight=pricePerNight
        this._isAvailable=isAvailable

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
        return this._pricePerNight
    }

    set pricePerNight(pricePerNight) {
        this._pricePerNight = pricePerNight
    }
    get isAvailable() {
        return this._isAvailable
    }

    set isAvailable(isAvailable) {
        this._isAvailable = isAvailable
    }

    bookRoom(): boolean {
        return this._isAvailable = false;
    }

    releaseRoom(): boolean {
        return this._isAvailable = true;
    }


    abstract calculateCost(nights: number): number;
    abstract getAdditionalServices(): string[];
    abstract applyDiscount(discountRate: number): number;
    abstract getCancellationPolicy(): string;


}