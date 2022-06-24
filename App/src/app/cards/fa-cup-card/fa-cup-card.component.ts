import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FACupService } from 'src/app/services/fa-cup.service';
import { FACupInterface } from 'src/app/models/fa-cup-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'fa-cup-card',
  templateUrl: './fa-cup-card.component.html',
  styleUrls: ['./fa-cup-card.component.scss']
})
export class FACupCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'FA Cup';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._FACupService.formData.PlayerID;
  position = this._FACupService.formData.Position;
  firstName = this._FACupService.formData.FirstName;
  lastName = this._FACupService.formData.LastName;
  appearances = this._FACupService.formData.Appearances;
  goals = this._FACupService.formData.Goals;
  assists = this._FACupService.formData.Assists;
  cleanSheets = this._FACupService.formData.CleanSheets;
  country = this._FACupService.formData.Country.toLowerCase();
  imageName = this._FACupService.formData.ImageName;
  totalPlayers = this._FACupService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<FACupInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<FACupService>,
    public _FACupService: FACupService,
    public _YearService:YearService) {
      this._FACupService.listen().subscribe();
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
    this._FACupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._FACupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
