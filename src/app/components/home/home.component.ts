import { list, infoList } from './../../core/list';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {} from '@here/maps-api-for-javascript';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list:infoList[];
  constructor() {
    this.list = list;
   }
   private map?: H.Map;
   @ViewChild('map') mapDiv?: ElementRef;
    ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      const platform = new H.service.Platform({
        apikey: 'V8xsWTHaHxQGM1Oy2yl0wA'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2,
        },
      );
      this.map = map;
    }
  }


  leftClick():any {
    const btn = document.getElementById('btn')!.style.left='0';
    const mapList = document.getElementById('map-list');
    const list = document.getElementById('wrapper');
    list!.classList.add('none')
    mapList!.classList.add('wrapper')
    mapList!.classList.remove('none');

  }
  rightClick():any {
    const btn = document.getElementById('btn')!.style.left='80px';
    const display = document.getElementById('map-list');
    const list = document.getElementById('wrapper');
    list!.classList.remove('none')
    display!.classList.remove('wrapper')
    display!.classList.add('none');
  }
}
