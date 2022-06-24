import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FACupInterface } from '../models/fa-cup-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'fa-cup',
  templateUrl: './fa-cup.component.html',
  styleUrls: ['./fa-cup.component.scss']
})
export class FACupComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'FA Cup';
  dataSource = new MatTableDataSource<FACupInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
