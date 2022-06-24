import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerInterface } from '../models/player-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'first-team',
  templateUrl: './first-team.component.html',
  styleUrls: ['./first-team.component.scss']
})
export class FirstTeamComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'Team Roster';
  dataSource = new MatTableDataSource<PlayerInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
