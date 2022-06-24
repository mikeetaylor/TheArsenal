import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LeagueCupService } from 'src/app/services/league-cup.service';
import { LeagueCupInterface } from 'src/app/models/league-cup-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'league-cup-card',
  templateUrl: './league-cup-card.component.html',
  styleUrls: ['./league-cup-card.component.scss']
})
export class LeagueCupCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'English League Cup';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._LeagueCupService.formData.PlayerID;
  position = this._LeagueCupService.formData.Position;
  firstName = this._LeagueCupService.formData.FirstName;
  lastName = this._LeagueCupService.formData.LastName;
  appearances = this._LeagueCupService.formData.Appearances;
  goals = this._LeagueCupService.formData.Goals;
  assists = this._LeagueCupService.formData.Assists;
  cleanSheets = this._LeagueCupService.formData.CleanSheets;
  country = this._LeagueCupService.formData.Country.toLowerCase();
  imageName = this._LeagueCupService.formData.ImageName;
  totalPlayers = this._LeagueCupService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<LeagueCupInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<LeagueCupService>,
    public _LeagueCupService: LeagueCupService,
    public _YearService:YearService) {
      this._LeagueCupService.listen().subscribe();
  }

  ngOnInit() {
    if (this.playerID == 1) {
      this.prevButtonIsDisabled = true;
    }
    
    if (this.playerID == this.totalPlayers) {
      this.nextButtonIsDisabled = true;
    }
  }

  prevPlayerOnRoster(){
    this.nextButtonIsDisabled = false;
    this._LeagueCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
        let value = this.playerID - 2;
          if (result.hasOwnProperty(value)) {
            this.position = result[value].Position;
            this.playerID = result[value].PlayerID;
            this.firstName = result[value].FirstName;
            this.lastName = result[value].LastName;
            this.goals = result[value].Goals;
            this.assists = result[value].Assists;
            this.cleanSheets = result[value].CleanSheets;
            this.appearances = result[value].Appearances;
            this.country = result[value].Country.toLowerCase();
            this.imageName = result[value].ImageName;
          }
          if (this.playerID == 1) {
            this.prevButtonIsDisabled = true;
          }
            else {
              this.prevButtonIsDisabled = false;
          }
    });
  }

  nextPlayerOnRoster(){
    this.prevButtonIsDisabled = false;
    this._LeagueCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
        let value = this.playerID;
          if (result.hasOwnProperty(value)) {
            this.position = result[value].Position;
            this.playerID = result[value].PlayerID;
            this.firstName = result[value].FirstName;
            this.lastName = result[value].LastName;
            this.goals = result[value].Goals;
            this.assists = result[value].Assists;
            this.cleanSheets = result[value].CleanSheets;
            this.appearances = result[value].Appearances;
            this.country = result[value].Country.toLowerCase();
            this.imageName = result[value].ImageName;
          }
          if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
          }
    })
  }

  onClose() {
    this.dialogBox.close();
  }
}
