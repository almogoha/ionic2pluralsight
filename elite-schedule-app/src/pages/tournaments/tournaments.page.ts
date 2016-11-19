import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyTeamsPage, TeamsPage} from "../pages";
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    console.log('Hello TournamentsPage Page');
  }
  itemTapped(){
      this.navCtrl.push(TeamsPage);
  }
}
