import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StandingsPage, TeamDetailPage} from "../pages";
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})
export class TeamHomePage {

team:any;
teamDetailTab = TeamDetailPage;
standingsTab = StandingsPage;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = navParams.data;
  }

  ionViewDidLoad() {
    console.log('Hello TeamHomePage Page');
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
