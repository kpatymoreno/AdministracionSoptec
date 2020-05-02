import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordresetService {
  readonly urlMtto = environment.apiUrl + 'auth/';
constructor(private http: HttpClient) { }

ResetearPassword(model: any): Observable<any> {
  return this.http.post<any>(this.urlMtto + 'reset' ,model);

}
CorreoResetearPassword(model: any): Observable<any> {
  return this.http.post<any>(this.urlMtto + 'forgot' ,model);

}
}
