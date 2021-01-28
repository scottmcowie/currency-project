import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  dateTo: Date;
  dateFrom: Date;
  results:ConversionAudit[];

  ngOnInit(): void {
  }

  getAudit(){
    this.results = this.auditService.getList(this.countryChoice,this.dateTo,this.dateFrom)
  }

}
