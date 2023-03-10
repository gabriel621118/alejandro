import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://localhost:7000/api';
  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(`${this.api}/employees/login`, {
      information: data,
    });
  }
}
