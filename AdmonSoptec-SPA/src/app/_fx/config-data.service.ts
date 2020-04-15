import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {

constructor(private datePipe: DatePipe) { }

getLocale() {
return 'es-SV';
}

toDate(date: any) {
  return this.datePipe.transform(date, 'yyyy-MM-dd');
}
}
