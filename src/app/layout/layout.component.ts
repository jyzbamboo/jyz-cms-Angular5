import { Component, OnInit } from '@angular/core';
import "assets/js/jquery.SuperSlide.2.1.1.js";
declare let $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.slider();
    }

    slider(): void {
        $(".pic img").load(function(){
            $(".picScroll-top").slide( {//幻灯片插件
                // titCell:".hd ul",
                mainCell:".bd ul",
                autoPage:true,
                effect:'top',
                autoPlay:true,
                scroll:1,
                vis:1,
                easing:"swing",
                delayTime:500,
                interTime:3000,
                pnLoop:true,
                mouseOverStop:true,
                pageStateCell:false,
            });
        });
    }
}
