import { Injectable } from "@angular/core";
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

      getList(countryRate, start: Date, end: Date){
        console.log("List contents: ", this.auditList);
        if(this.auditList.length <= 0){
            alert("No data to show for query");
        }

        let returnList : ConversionAudit []= [];
        for(var conAudit of this.auditList ){
            console.log("conAudit: ", conAudit);
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

      loadData(){
          var today = new Date();
          var pastDate = new Date(today);
          this.auditList.push(new ConversionAudit("AUD", 1.7623, new Date(pastDate.setDate(today.getDate() - 1))));
          this.auditList.push(new ConversionAudit("AUD", 1.7793, new Date(pastDate.setDate(today.getDate() - 2))));
          this.auditList.push(new ConversionAudit("AUD", 1.7912, new Date(pastDate.setDate(today.getDate() - 3))));
          this.auditList.push(new ConversionAudit("AUD", 1.7773, new Date(pastDate.setDate(today.getDate() - 4))));
          this.auditList.push(new ConversionAudit("AUD", 1.7563, new Date(pastDate.setDate(today.getDate() - 5))));
          this.auditList.push(new ConversionAudit("AUD", 1.8112, new Date(pastDate.setDate(today.getDate() - 6))));
          this.auditList.push(new ConversionAudit("EUR", 1.2133, new Date(pastDate.setDate(today.getDate() - 1))));
          this.auditList.push(new ConversionAudit("EUR", 1.3534, new Date(pastDate.setDate(today.getDate() - 2))));
          this.auditList.push(new ConversionAudit("EUR", 1.2987, new Date(pastDate.setDate(today.getDate() - 3))));
          this.auditList.push(new ConversionAudit("EUR", 1.2878, new Date(pastDate.setDate(today.getDate() - 4))));
          this.auditList.push(new ConversionAudit("EUR", 1.3489, new Date(pastDate.setDate(today.getDate() - 5))));
          this.auditList.push(new ConversionAudit("EUR", 1.3445, new Date(pastDate.setDate(today.getDate() - 6))));
          this.auditList.push(new ConversionAudit("USD", 1.3778, new Date(pastDate.setDate(today.getDate() - 1))));
          this.auditList.push(new ConversionAudit("USD", 1.3534, new Date(pastDate.setDate(today.getDate() - 2))));
          this.auditList.push(new ConversionAudit("USD", 1.3999, new Date(pastDate.setDate(today.getDate() - 3))));
          this.auditList.push(new ConversionAudit("USD", 1.3879, new Date(pastDate.setDate(today.getDate() - 4))));
          this.auditList.push(new ConversionAudit("USD", 1.3489, new Date(pastDate.setDate(today.getDate() - 5))));
          this.auditList.push(new ConversionAudit("USD", 1.3445, new Date(pastDate.setDate(today.getDate() - 6))));
      }
    }