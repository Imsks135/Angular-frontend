import { Component, OnInit } from '@angular/core';
import { RestaurantDataService } from '../restaurant-data.service';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  orderItems: OrderItem[] = [];

  constructor(private restaurantDataService: RestaurantDataService) { }

  ngOnInit(): void {
    this.orderItems = this.restaurantDataService.getOrderItems();
  }
}
