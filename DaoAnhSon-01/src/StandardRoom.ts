import { Room } from "./Room";

export class StandardRoom extends Room {
    constructor(roomId: number, type: string,pricePerNight: number,isAvailable: boolean ){
        super(roomId ,type, pricePerNight, isAvailable)


    }
    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return [];
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoan 100% neu tra truoc 1 ngay";
    }
}