import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommunityShieldService } from 'src/app/services/community-shield.service';
import { CommunityShieldInterface } from 'src/app/models/community-shield-interface';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'community-shield-card',
  templateUrl: './community-shield-card.component.html',
  styleUrls: ['./community-shield-card.component.scss']
})
export class CommunityShieldCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'Community Shield';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._CommunityShieldService.formData.PlayerID;
  position = this._CommunityShieldService.formData.Position;
  firstName = this._CommunityShieldService.formData.FirstName;
  lastName = this._CommunityShieldService.formData.LastName;
  appearances = this._CommunityShieldService.formData.Appearances;
  goals = this._CommunityShieldService.formData.Goals;
  assists = this._CommunityShieldService.formData.Assists;
  cleanSheets = this._CommunityShieldService.formData.CleanSheets;
  country = this._CommunityShieldService.formData.Country.toLowerCase();
  imageName = this._CommunityShieldService.formData.ImageName;
  totalPlayers = this._CommunityShieldService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<CommunityShieldInterface>();
  nextButtonIsDisabled!: boolean;
  prevButtonIsDisabled!: boolean;

  constructor(public dialogBox: MatDialogRef<CommunityShieldService>,
    public _CommunityShieldService: CommunityShieldService,
    public _YearService:YearService) {
      this._CommunityShieldService.listen().subscribe();
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
    this._CommunityShieldService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    this._CommunityShieldService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
