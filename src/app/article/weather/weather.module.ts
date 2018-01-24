import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';


@NgModule({
    imports: [
        CommonModule,
        WeatherRoutingModule,
    ],
    declarations: [WeatherComponent]
})
export class WeatherModule {}
