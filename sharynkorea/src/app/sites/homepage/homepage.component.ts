import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,  
    
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      
      480:{
        items: 2
      },
     
      1080:{
        items: 7
      },
     
      
    
      
    },
    nav: true
  }

  ngOnInit(): void {
  }



}
