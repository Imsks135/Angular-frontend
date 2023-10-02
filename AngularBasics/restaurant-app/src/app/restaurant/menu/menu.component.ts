import { Component, OnInit} from '@angular/core';
import { RestaurantDataService } from '../restaurant-data.service';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private restaurantDataService: RestaurantDataService) { }

  ngOnInit(): void {
    this.menuItems = this.restaurantDataService.getMenuItems();
  }
}
