import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-use-my-map',
  templateUrl: './use-my-map.component.html',
  styleUrls: ['./use-my-map.component.css']
})
export class UseMyMapComponent implements OnInit {
markers:Marker[];
map: google.maps.Map;


  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;
  @ViewChild('gmap') gmapElement: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.markers=[ {
      name: 'oaka',
      lat: 11.21,
      lng: -16.21,
      draggable: true
    },{
      name: 'black',
      lat: -11.21,
      lng: 15.21,
      draggable: true
    },{
      name: 'white',
      lat: 1.21,
      lng: 4.21,
      draggable: true
    },{
      name: 'blue',
      lat: 12.21,
      lng: 12.21,
      draggable: true
    }];

  }

  ngOnInit() {

  
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
   this.autocompleteCustommyLoad();
  }

 private  autocompleteCustommyLoad(){
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["establishment"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        console.log(this.zoom)

        console.log(this.longitude,this.latitude)
        this.markers.push({
          name: 'current',
          lat: this.latitude,
          lng: this.longitude,
          draggable: true
        })
      });
    }
  }

  clickedMarker(marker: Marker, i: number) {
    console.log(marker);
    console.log(marker)
    
    console.log(i);
      }
}
interface Marker {
  name?: string ;
  lat: number ;
  lng: number ;
  draggable: boolean ;
}

