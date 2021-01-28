import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  url= "https://api.exchangeratesapi.io/latest?base=GBP";
  
  async getCurrentRates(){
    return await this.http.get(this.url);
  }

  async convert() {
    return (await this.getCurrentRates()).toPromise();
  }
}