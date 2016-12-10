import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {
  teams = [];
  constructor(private navCtrl: NavController, 
  private navParams: NavParams, 
  private eliteApi: EliteApi,
  private loadingController: LoadingController) {}
  ionViewDidLoad() {
   let selectedTourney = this.navParams.data;
   let loader = this.loadingController.create({
     content: "Getting Teams..."
   });
   loader.present().then(()=>{
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
          this.teams = data.teams;
          loader.dismiss();
        });
   });
  }
   itemTapped($event, team){
     this.navCtrl.push(TeamHomePage, team);
  }
}
