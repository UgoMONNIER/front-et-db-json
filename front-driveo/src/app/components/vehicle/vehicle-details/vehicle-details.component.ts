import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../../../services/vehicles.service'; 
import { signal } from '@angular/core';
import { CommonModule, CurrencyPipe, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, CommonModule ],
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: any;   // Véhicule à afficher
  filledImageUrl: string = 'star-filled.png';   // Image d'étoile remplie
  emptyImageUrl: string = 'star-empty.png';    // Image d'étoile vide
  numberStars = signal(0);  // Évaluation en étoiles
  indexes = [1, 2, 3, 4, 5];  // Indices pour les étoiles

  constructor(
    private route: ActivatedRoute,  
    private serviceVehicles: VehiclesService 
  ) { }

  ngOnInit(): void {

  }

  // Récupérer un véhicule par son ID
  getVehicle(id: number): void {
    this.serviceVehicles.getVehicleById(id).subscribe(data => {
      this.vehicle = data;  
      console.log(this.vehicle);
      
    });
  }




}
