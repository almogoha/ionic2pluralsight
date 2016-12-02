import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.page.html'
})
export class StandingsPage {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StandingsPage Page');
  }

}
