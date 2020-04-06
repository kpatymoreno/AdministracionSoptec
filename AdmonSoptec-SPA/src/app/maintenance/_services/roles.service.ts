import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  readonly urlMtto = environment.apiUrl + 'mrole/';
  constructor(private http: HttpClient) { }

  newRole(model: any) {
    return this.http.post(this.urlMtto + 'new', model);
  }
  allRoles() {
    return this.http.get(this.urlMtto);
  }
  deleteRole(id: number) {
    return this.http.get(this.urlMtto + 'del' + id);
  }
}
