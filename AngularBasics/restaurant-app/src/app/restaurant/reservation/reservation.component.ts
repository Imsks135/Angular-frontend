import { Component,OnInit } from '@angular/core';
import { RestaurantDataService } from '../restaurant-data.service';

interface Reservation {
  id: number;
  name: string;
  date: string; // You can use Date type here if needed
  guests: number;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private restaurantDataService: RestaurantDataService) { }

  ngOnInit(): void {
    this.reservations = this.restaurantDataService.getReservations();
  }
}
