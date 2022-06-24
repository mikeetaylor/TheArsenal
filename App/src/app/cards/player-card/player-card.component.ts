import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from 'src/app/services/player.service';
import { PlayerInterface } from 'src/app/models/player-interface';
import { YearService } from 'src/app/services/year.service';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() PlayerToFirstTeam!: string;
  @Input() CompetitionName! : string;
  competitionName = 'Team Roster';
  campaign: string = this._YearService.teamYear;
  hyphen: string = '-';
  campaignYear = [this.campaign.slice(0, 4), this.hyphen, this.campaign.slice(4)].join('');
  playerID = this._playerService.formData.PlayerID;
  position = this._playerService.formData.Position;
  firstName = this._playerService.formData.FirstName;
  lastName = this._playerService.formData.LastName;
  appearances = this._playerService.formData.Appearances;
  goals = this._playerService.formData.Goals;
  assists = this._playerService.formData.Assists;
  cleanSheets = this._playerService.formData.CleanSheets;
  country? = this._playerService.formData.Country.toLowerCase();
  imageName = this._playerService.formData.ImageName;
  totalPlayers = this._playerService.formData.TotalPlayers;
  dataSource = new MatTableDataSource<PlayerInterface>();
  nextButtonIsDisabled = false;
  prevButtonIsDisabled = false;

  constructor(public dialogBox: MatDialogRef<PlayerService>,
    public _playerService: PlayerService,
    public _YearService:YearService,
    public _breakpointObserver: BreakpointObserver) {
      this._playerService.listen().subscribe();
  }

  ngOnInit() {
    this._breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 560px or greater!');
        } else {
          console.log('Viewport width is less than 560px!');
        }
      });
      
    if (this.playerID == 1) {
      this.prevButtonIsDisabled = true;
    }
    
    if (this.playerID == this.totalPlayers) {
      this.nextButtonIsDisabled = true;
    }
  }

  prevPlayerOnRoster(){
    this.nextButtonIsDisabled = false;
    this._playerService.getPrevPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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
    })
  }

  nextPlayerOnRoster(){
    this.prevButtonIsDisabled = false;
    this._playerService.getNextPlayer(this.playerID, this._YearService.teamYear).subscribe(result=>{
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

  nextCompetition(){
    this.competitionName = 'English Premier League'
  }

  onClose() {
    this.dialogBox.close();
  }
}
