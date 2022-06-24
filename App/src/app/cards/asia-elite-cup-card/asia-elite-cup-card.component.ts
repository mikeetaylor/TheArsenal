import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AsiaEliteCupService } from 'src/app/services/asia-elite-cup.service';
import { AsiaEliteCupInterface } from 'src/app/models/asia-elite-cup-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'asia-elite-cup-card',
  templateUrl: './asia-elite-cup-card.component.html',
  styleUrls: ['./asia-elite-cup-card.component.scss']
})
export class AsiaEliteCupCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'Asia Elite Cup';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._AsiaEliteCupService.formData.PlayerID;
  position = this._AsiaEliteCupService.formData.Position;
  firstName = this._AsiaEliteCupService.formData.FirstName;
  lastName = this._AsiaEliteCupService.formData.LastName;
  appearances = this._AsiaEliteCupService.formData.Appearances;
  goals = this._AsiaEliteCupService.formData.Goals;
  assists = this._AsiaEliteCupService.formData.Assists;
  cleanSheets = this._AsiaEliteCupService.formData.CleanSheets;
  country = this._AsiaEliteCupService.formData.Country.toLowerCase();
  imageName = this._AsiaEliteCupService.formData.ImageName;
  totalPlayers = this._AsiaEliteCupService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<AsiaEliteCupInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<AsiaEliteCupService>,
    public _AsiaEliteCupService: AsiaEliteCupService,
    public _YearService:YearService) {
      this._AsiaEliteCupService.listen().subscribe();
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
    this._AsiaEliteCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._AsiaEliteCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
