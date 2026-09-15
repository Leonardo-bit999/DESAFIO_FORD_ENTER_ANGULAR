import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Veiculo, VeiculosAPI } from '../models/veiculo.model';
import { Telemetria } from '../models/telemetria.model';

@Injectable({
  providedIn: 'root',
})
export class Vehicle {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Veiculo[]> {
    return this.http
      .get<VeiculosAPI>(`${this.apiUrl}/vehicles`)
      .pipe(map((resposta) => resposta.vehicles));
  }

  getVehicleData(vin: string): Observable<Telemetria> {
    return this.http.post<Telemetria>(`${this.apiUrl}/vehicleData`, { vin });
  }
}
