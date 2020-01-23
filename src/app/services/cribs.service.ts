import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) { }

  getAllCribs() {
return this.http.get('assets/data/cribs.json').map(res => res);
  }

}
