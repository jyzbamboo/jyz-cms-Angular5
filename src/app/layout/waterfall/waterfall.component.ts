import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-waterfall',
    templateUrl: './waterfall.component.html',
    styleUrls: ['./waterfall.component.css'],
})

export class WaterfallComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        this.setHeight();
    }
    setHeight() {
        window.onload = function(){
            let fallWeather = document.getElementById('fall-weather');
            let rectangle = document.getElementsByName('rectangle');
            let margin = document.getElementById('first-rectangle').offsetLeft - fallWeather.offsetWidth;
            for (let i=0;i<5;i++) {
                rectangle[i].style.height = (fallWeather.offsetHeight-margin)/2 + "px";
            }
            let square = document.getElementsByName('square');
            for (let i=0;i<square.length;i++) {
                square[i].style.height = (fallWeather.offsetHeight-margin)/2 + "px";
            }
        };
    }
}
