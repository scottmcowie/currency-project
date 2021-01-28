import { Injectable, ɵConsole } from "@angular/core";
import { ConversionAudit } from "../models/conversion-audit";

@Injectable({
    providedIn: 'root',
  })
  export class AuditService {
      public auditList : ConversionAudit [] = [];

      addValue(addValue: ConversionAudit){
        var isFound = false;
        for(var date of this.auditList){
            if(date.timestamp.getDay() == addValue.timestamp.getDay()){
                isFound = true;
            }
        }
        if(!isFound) {
            this.auditList.push(addValue);
            console.log("Value added");
        }else {
            console.log("Date already added, skipped.");
        }
      }

      getList(countryRate, start:Date, end:Date){
        if(this.auditList.length <= 0){
            alert("No data to show for query");
        }

        let returnList : ConversionAudit []= [];
        for(var conAudit of this.auditList ){
            if(conAudit.country == countryRate){
                console.log("Country found");
                console.log("dates: ", end, start, conAudit.timestamp)
                start.setHours(start.getHours()-1);
                end.setHours(end.getHours()+1);

                if(conAudit.timestamp >= start && conAudit.timestamp <= end){
                    console.log("Date from correct");
                    returnList.push(conAudit);                    
                }
            }
        }

        return returnList;
      }

      hasValues() {
          return (this.auditList.length > 0)? (true):(false);
      }
  }