import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeamDetailPage} from '../pages'
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    console.log('Hello TeamsPage Page');
  }
   itemTapped(){
     this.navCtrl.push(TeamDetailPage);
  }
}
