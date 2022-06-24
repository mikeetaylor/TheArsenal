import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { PlayerInterface } from '../models/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  formData!: PlayerInterface;

readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();
//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getRosterList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/Roster' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Roster' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Roster' + year + '/PlayerID=' + val);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/{year}/Roster',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/{year}/Roster',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/{year}/Roster',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/{year}/Roster/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
