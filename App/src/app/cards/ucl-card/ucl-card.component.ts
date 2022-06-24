import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UCLService } from 'src/app/services/ucl.service';
import { UCLInterface } from 'src/app/models/ucl-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'ucl-card',
  templateUrl: './ucl-card.component.html',
  styleUrls: ['./ucl-card.component.scss']
})
export class UCLCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'UEFA Champions League';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._UCLService.formData.PlayerID;
  position = this._UCLService.formData.Position;
  firstName = this._UCLService.formData.FirstName;
  lastName = this._UCLService.formData.LastName;
  appearances = this._UCLService.formData.Appearances;
  goals = this._UCLService.formData.Goals;
  assists = this._UCLService.formData.Assists;
  cleanSheets = this._UCLService.formData.CleanSheets;
  country = this._UCLService.formData.Country.toLowerCase();
  imageName = this._UCLService.formData.ImageName;
  totalPlayers = this._UCLService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<UCLInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<UCLService>,
    public _UCLService: UCLService,
    public _YearService:YearService) {
      this._UCLService.listen().subscribe();
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
    this._UCLService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._UCLService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
