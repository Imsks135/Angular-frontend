import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  private menuItems = [
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 6.99 },
    { id: 3, name: 'Salad', price: 8.99 },
    
  ];
  private orderItems = [
    { id: 1, name: 'Pizza', quantity: 2, price: 10.99 },
    { id: 2, name: 'Burger', quantity: 1, price: 6.99 },
    { id: 3, name: 'Salad', quantity: 3, price: 8.99 },

  ];

  private reservations = [
    { id: 1, name: 'John', date: '2023-08-15', guests: 4 },
    { id: 2, name: 'Alice', date: '2023-09-01', guests: 2 },
    { id: 3, name: 'Bob', date: '2023-09-10', guests: 6 },
  
  ];

  getMenuItems() {
    return this.menuItems;
  }
  getOrderItems() {
    return this.orderItems;
  }
  getReservations() {
    return this.reservations;
  }
}
