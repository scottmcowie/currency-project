import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConversionAudit } from '../models/conversion-audit';
import { AuditService } from '../services/audit-service.service';
import { ExchangeRateService } from '../services/exchange-rate.service';

interface CountryRate {
  value: string;
}

@Component({
  selector: 'app-conversion-page',
  templateUrl: './conversion-page.component.html',
  styleUrls: ['./conversion-page.component.scss']
})
export class ConversionPageComponent implements OnInit {

  constructor(private exchangeRateService: ExchangeRateService,
    public auditService: AuditService,
    private cp: CurrencyPipe) { }

  ngOnInit(): void {
  }

  countryCurrencies:CountryRate[] = [
    {value: 'USD'},
    {value: 'AUD'},
    {value: 'EUR'}
  ];

  countryChoice: string;
  amount: number;
  result;

  convert(){

    if(this.validInputs()){
      console.log("valid input")
      this.exchangeRateService.convert().then(data => {
          console.log("data: ", data);
          let rate = data['rates'][this.countryChoice];
          this.result = this.cp.transform(
            (this.amount*rate),
            this.countryChoice,'symbol','1.2-2'
          );

          let conversionAudit: ConversionAudit;
          conversionAudit.rate = rate;
          conversionAudit.timestamp = Date.now();
          this.auditService.addValue(conversionAudit);

        });
    }else {
      alert("Please provide an amount and choose a country.");
    }
  }

  validInputs(){
    console.log("amount: ", this.amount);
    console.log("countryChoice: ", this.countryChoice);
    if(!this.amount || (!this.countryChoice && this.countryChoice != "")){
      console.log("invalid input");
      return false;
    }

    return true;
  }

  //preferably use a directive but for time do simple check
  numbersOnly(event):boolean {
    const charKeyCode = (event.which) ? event.which : event.keyCode;
    if (charKeyCode > 31 && (charKeyCode < 48 || charKeyCode > 57)) {
      return false;
    }
    return true;
  }
}
