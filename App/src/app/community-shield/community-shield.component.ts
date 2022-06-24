import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommunityShieldInterface } from '../models/community-shield-interface';
import { YearService } from '../services/year.service';

@Component({
  selector: 'community-shield',
  templateUrl: './community-shield.component.html',
  styleUrls: ['./community-shield.component.scss']
})
export class CommunityShieldComponent implements OnInit {

  teamYear: string = this._YearService.teamYear;
  competitionName = 'Community Shield';
  dataSource = new MatTableDataSource<CommunityShieldInterface>();

  constructor(public _YearService: YearService) { }

  ngOnInit(): void {
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this._YearService.setTeamYear(value);
  }
}
