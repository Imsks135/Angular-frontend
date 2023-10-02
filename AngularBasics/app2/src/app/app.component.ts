import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   
  cars:Car[]=[];
  constructor(private carService:CarService){

      }

    ngOnInit():void{
        this.getCars();
    }

    getCars(){
      this.carService.getCars().subscribe(
        data=>{
          this.cars=data;
        },
        error=>{
          console.log(error);
        }
      )
    }

}
