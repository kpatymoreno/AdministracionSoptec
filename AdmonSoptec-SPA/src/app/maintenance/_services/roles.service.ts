import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  readonly urlMtto = environment.apiUrl + 'auth/';
  constructor(private http: HttpClient) { }

  newRole(model: any) {
    return this.http.post(this.urlMtto + 'new', model);
  }

  allRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.urlMtto);
  }

  deleteRole(id: number) {
    return this.http.delete(this.urlMtto + 'del/' + id);
  }
  singleRole(id: number): Observable<Role> {
    return this.http.get<Role>(this.urlMtto + 'con/' + id);

  }
}
