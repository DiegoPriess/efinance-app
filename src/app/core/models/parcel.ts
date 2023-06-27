import { ISimulation } from "./simulation";

export interface IParcel { 
    id: number,
    financing: ISimulation,
    parcelNumber: number,
    type: number,
    amortization: number,
    interest: number,
    installment: number,
    outstandingBalance: number,
}