import { Component } from '@angular/core';
import { LoadingController,  NavController } from 'ionic-angular';
import {TeamsPage} from "../pages";
import {EliteApi} from "../../shared/shared";
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {
  tournaments: any;
  constructor(private navCtrl: NavController, 
  private eliteApi: EliteApi,
  private loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
       content: "Getting Tournaments..."
    });
    loader.present().then(() =>{
     this.eliteApi.getTournaments().then(data => {
       this.tournaments = data;
       loader.dismiss();
     });
    });
  }

  itemTapped($event:any, tournament:any){
      this.navCtrl.push(TeamsPage, tournament);
  }
}
