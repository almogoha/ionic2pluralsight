import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
@Injectable()
export class EliteApi {

    private baseUrl = 'https://elite-schedule-app-i2-90842.firebaseio.com';
    currentTourney: any = {};

    constructor(private http: Http) { }

    getTournaments(){
      return new Promise(reslove => {
         this.http.get(`${this.baseUrl}/tournaments.json`)
         .subscribe(res => reslove(res.json()));
      });
    }
    
    getTournamentData(tourneyId) : Observable<any>{
      return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map((response: Response) => {
        this.currentTourney = response.json();
        return this.currentTourney;
      });
    }

    getCurrentTourney(){
      return this.currentTourney;
    }
}