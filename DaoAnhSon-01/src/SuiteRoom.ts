import { Room } from "./Room";

export class SuiteRoom extends Room {
    calculateCost(nights: number): number {
        return this.pricePerNight * nights;
    }

    getAdditionalServices(): string[] {
        return ['Spa','Minibar'];
    }

    applyDiscount(discountRate: number): number {
        return this.pricePerNight * (1 - discountRate);
    }

    getCancellationPolicy(): string {
        return "Khong hoan lai tien neu huy";
    }
}