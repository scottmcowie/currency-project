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
  results:ConversionAudit[];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  ngOnInit(): void {
  }

  getAudit(){
    console.log("range : ",this.range);


    this.results = this.auditService.getList(
      this.countryChoice,this.range.value.start, this.range.value.end);

    console.log("Results: ", this.results);
  }
}
