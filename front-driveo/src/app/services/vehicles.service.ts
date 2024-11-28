import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private baseUrl = 'http://localhost:3000/vehicles'; // The API URL to fetch vehicles


  constructor(private http: HttpClient) {}

  // Fetch the list of vehicles
  public getVehicles(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Fetch a vehicle by its ID
  public getVehicleById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  // Toggle the availability of a vehicle
  public toggleAvailability(id: number, available: boolean): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch(url, { available: !available });
  }
}
