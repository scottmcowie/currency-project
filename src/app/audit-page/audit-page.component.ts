import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ConversionAudit } from '../models/conversion-audit';
import { AuditService } from '../services/audit-service.service';

interface CountryRate {
  value: string;
}

@Component({
  selector: 'app-audit-page',
  templateUrl: './audit-page.component.html',
  styleUrls: ['./audit-page.component.scss']
})
export class AuditPageComponent implements OnInit {

  constructor(public auditService: AuditService) { }

  countryCurrencies:CountryRate[] = [
    {value: 'USD'},
    {value: 'AUD'},
    {value: 'EUR'}
  ];
  
  countryChoice: string;
  queriedCurrency: string;
  results:ConversionAudit[];
  displayResults : boolean = false;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit(): void {
  }

  getAudit(){
    if(this.countryChoice && this.range.value.start && this.range.value.end) {
      
      console.log("range : ",this.range);
      this.results = this.auditService.getList(
      this.countryChoice,this.range.value.start, this.range.value.end);
      if(this.results.length > 0){
        this.displayResults = true;
        this.queriedCurrency = this.countryChoice;
      }
    }
    else{
      alert("Please choose a country currency and date range.");
    }
  }

  loadTestData(){
    this.auditService.loadData();
  }
}
