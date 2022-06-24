import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EPLInterface } from '../models/epl-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'epl',
  templateUrl: './epl.component.html',
  styleUrls: ['./epl.component.scss']
})
export class EPLComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'Premier League';
  dataSource = new MatTableDataSource<EPLInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
