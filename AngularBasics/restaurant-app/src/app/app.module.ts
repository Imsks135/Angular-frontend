import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantDataService } from './restaurant/restaurant-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RestaurantModule,
    AppRoutingModule
  ],
  providers: [RestaurantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
