import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UCLInterface } from '../models/ucl-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'ucl',
  templateUrl: './ucl.component.html',
  styleUrls: ['./ucl.component.scss']
})
export class UCLComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'UEFA Champions League';
  dataSource = new MatTableDataSource<UCLInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
