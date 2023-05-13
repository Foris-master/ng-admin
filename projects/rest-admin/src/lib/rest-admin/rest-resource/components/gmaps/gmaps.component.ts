import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent {
  @Input() lat = 51.678418;
  @Input() lng = 7.809007;
  @Input() googleMapKey = '';

  @Output() latChange = new EventEmitter<number>();
  @Output() lngChange = new EventEmitter<number>();

  apiLoaded: Observable<boolean>;
  mapOptions: google.maps.MapOptions;
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log(this.googleMapKey, 'googleMapKey');
    this.apiLoaded = this.httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${this.googleMapKey}&libraries=places`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError((err) => of(false))
      );

    this.mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 8,
    };
  }

  onPositionChange(event) {
    if (event) {
      this.lat = event.latLng.lat();
      this.lng = event.latLng.lng();
      this.latChange.emit(this.lat);
      this.lngChange.emit(this.lng);
    }
  }
}
