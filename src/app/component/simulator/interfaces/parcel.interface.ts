import { Financing } from "./financing.interface";

export interface Parcel { 
    id: number,
    financing: Financing,
    parcelNumber: number,
    type: number,
    amortization: number,
    interest: number,
    installment: number,
    outstandingBalance: number,
}