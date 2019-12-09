export class TransactionModel {
    id: number;
    type: string;
    amount: number;
    date: Date;

    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}
