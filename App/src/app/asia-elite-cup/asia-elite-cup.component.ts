import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AsiaEliteCupInterface } from '../models/asia-elite-cup-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'asia-elite-cup',
  templateUrl: './asia-elite-cup.component.html',
  styleUrls: ['./asia-elite-cup.component.scss']
})
export class AsiaEliteCupComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'Asia Elite Cup';
  dataSource = new MatTableDataSource<AsiaEliteCupInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
