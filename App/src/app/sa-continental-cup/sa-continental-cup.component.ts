import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SAContinentalCupInterface } from '../models/sa-continental-cup-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'sa-continental-cup',
  templateUrl: './sa-continental-cup.component.html',
  styleUrls: ['./sa-continental-cup.component.scss']
})
export class SAContinentalCupComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'South American Continental Cup';
  dataSource = new MatTableDataSource<SAContinentalCupInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
