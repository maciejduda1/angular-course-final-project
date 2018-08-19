import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDN-heOGSVkYp-89tq-Rfcsjfc32O-uUdo',
      authDomain: 'recipe-book-b9519.firebaseapp.com',
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
