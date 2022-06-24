import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SAContinentalCupService } from 'src/app/services/sa-continental-cup.service';
import { SAContinentalCupInterface } from 'src/app/models/sa-continental-cup-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'sa-continental-cup-card',
  templateUrl: './sa-continental-cup-card.component.html',
  styleUrls: ['./sa-continental-cup-card.component.scss']
})
export class SAContinentalCupCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'South American Continental Cup';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._SAContinentalCupService.formData.PlayerID;
  position = this._SAContinentalCupService.formData.Position;
  firstName = this._SAContinentalCupService.formData.FirstName;
  lastName = this._SAContinentalCupService.formData.LastName;
  appearances = this._SAContinentalCupService.formData.Appearances;
  goals = this._SAContinentalCupService.formData.Goals;
  assists = this._SAContinentalCupService.formData.Assists;
  cleanSheets = this._SAContinentalCupService.formData.CleanSheets;
  country = this._SAContinentalCupService.formData.Country.toLowerCase();
  imageName = this._SAContinentalCupService.formData.ImageName;
  totalPlayers = this._SAContinentalCupService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<SAContinentalCupInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<SAContinentalCupService>,
    public _SAContinentalCupService: SAContinentalCupService,
    public _YearService:YearService) {
      this._SAContinentalCupService.listen().subscribe();
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
    this._SAContinentalCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._SAContinentalCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
