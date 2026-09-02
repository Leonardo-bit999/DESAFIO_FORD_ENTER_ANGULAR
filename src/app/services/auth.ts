import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3001';

  constructor(private http:HttpClient){}

  fazerLogin(dadosLogin: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, dadosLogin);
  }
}
