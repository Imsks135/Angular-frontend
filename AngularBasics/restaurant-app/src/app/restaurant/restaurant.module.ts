import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantDataService } from './restaurant-data.service';



@NgModule({
  declarations: [
    MenuComponent,
    OrderComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MenuComponent,
  OrderComponent,ReservationComponent],
  providers:[RestaurantDataService]
})
export class RestaurantModule { }
