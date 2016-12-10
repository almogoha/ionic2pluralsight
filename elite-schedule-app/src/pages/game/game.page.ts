import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.page.html'
})
export class GamePage {
  game:any;
  constructor(private navCtrl: NavController, 
  private navParams: NavParams) {
    this.game = this.navParams.data;
  }

  ionViewDidLoad() {
  }

}
