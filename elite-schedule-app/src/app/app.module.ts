import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage,TeamDetailPage,TeamsPage,TournamentsPage, StandingsPage,TeamHomePage} from '../pages/pages';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage
  ],
  providers: []
})
export class AppModule {}
