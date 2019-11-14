import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentTemperature: number = 27;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition( (resp) => {
      console.log(resp.coords.latitude, resp.coords.longitude);
    }, err => {
      console.error(err)
    });
  }

}
