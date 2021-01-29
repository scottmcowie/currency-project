import { FormControl } from "@angular/forms";

export class ConversionAudit{
    country: string;
    rate: number;
    timestamp: Date;

    constructor(country:string, rate:number, timestamp:Date){
        this.country = country;
        this.rate = rate;
        this.timestamp = timestamp;
    }

}