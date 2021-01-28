import { Injectable } from "@angular/core";
import { ConversionAudit } from "../models/conversion-audit";

@Injectable({
    providedIn: 'root',
  })
  export class AuditService {
      auditList : ConversionAudit [] = [];

      addValue(addValue: ConversionAudit){
        this.auditList.push(addValue);
      }

      getList(countryRate, dateTo, dateFrom){
          return this.auditList;
      }

      hasValues() {
          return (this.auditList.length > 0)? (true):(false);
      }
  }