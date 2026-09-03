import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient){}

  getVehicles(): Observable<any>{
    return this.http.get(`${this.apiUrl}/vehicles`);
  }

  getVehicleData(vin: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/vehicleData`, {vin});
  }
}
