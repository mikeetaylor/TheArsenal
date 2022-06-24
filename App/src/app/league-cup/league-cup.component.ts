import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LeagueCupInterface } from '../models/league-cup-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'league-cup',
  templateUrl: './league-cup.component.html',
  styleUrls: ['./league-cup.component.scss']
})
export class LeagueCupComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'League Cup';
  dataSource = new MatTableDataSource<LeagueCupInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
