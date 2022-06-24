import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SuperCupInterface } from '../models/super-cup-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'super-cup',
  templateUrl: './super-cup.component.html',
  styleUrls: ['./super-cup.component.scss']
})
export class SuperCupComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'UEFA Super Cup';
  dataSource = new MatTableDataSource<SuperCupInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
