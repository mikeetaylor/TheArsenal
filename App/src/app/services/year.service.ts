import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  public teamYear: string = '20242025';

  public setTeamYear(value: string) {
    this.teamYear = value;
  }
}
