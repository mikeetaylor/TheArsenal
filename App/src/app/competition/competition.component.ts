import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  @Input() CompetitionYear! : string;
  @Input() CompetitionName! : string;
  hyphen: string = '-';
  campaignYear!: string;

  constructor() { }

  ngOnInit(): void {
    
  this.campaignYear = [this.CompetitionYear.slice(0, 4), this.hyphen, this.CompetitionYear.slice(4)].join('');
  }

}
