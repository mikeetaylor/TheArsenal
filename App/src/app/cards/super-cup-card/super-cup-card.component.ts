import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SuperCupService } from 'src/app/services/super-cup.service';
import { SuperCupInterface } from 'src/app/models/super-cup-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'super-cup-card',
  templateUrl: './super-cup-card.component.html',
  styleUrls: ['./super-cup-card.component.scss']
})
export class SuperCupCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'UEFA Super Cup';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._SuperCupService.formData.PlayerID;
  position = this._SuperCupService.formData.Position;
  firstName = this._SuperCupService.formData.FirstName;
  lastName = this._SuperCupService.formData.LastName;
  appearances = this._SuperCupService.formData.Appearances;
  goals = this._SuperCupService.formData.Goals;
  assists = this._SuperCupService.formData.Assists;
  cleanSheets = this._SuperCupService.formData.CleanSheets;
  country = this._SuperCupService.formData.Country.toLowerCase();
  imageName = this._SuperCupService.formData.ImageName;
  totalPlayers = this._SuperCupService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<SuperCupInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<SuperCupService>,
    public _SuperCupService: SuperCupService,
    public _YearService:YearService) {
      this._SuperCupService.listen().subscribe();
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
    this._SuperCupService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._SuperCupService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
