import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage, MyTeamsPage,TeamDetailPage,TeamsPage,TournamentsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage
  ],
  providers: []
})
export class AppModule {}
