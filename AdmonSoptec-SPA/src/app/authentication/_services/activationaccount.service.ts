import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivationaccountService {
   readonly urlMtto = environment.apiUrl + 'auth/';

constructor(private http: HttpClient) { }

ConfirmationEmail(token: string, email: string): Observable<any> {
  return this.http.get<any>(this.urlMtto + 'con/' + token +'/'+email);

}

}
