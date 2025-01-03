import { Room } from "./Room";
export class DeluxeRoom extends Room {
    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return ['An sang'];
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Hoan 50% neu hoan trc 2 ngay .";
    }
}