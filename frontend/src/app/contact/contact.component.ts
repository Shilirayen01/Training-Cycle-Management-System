import { Component, AfterViewInit } from '@angular/core';

declare const google: any; // Add this line to resolve the "google" reference

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const location = { lat: 48.864716, lng: 2.349014 }; // Latitude and Longitude
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 14,
      center: location,
    });
    new google.maps.Marker({
      position: location,
      map: map,
    });
  }
}
