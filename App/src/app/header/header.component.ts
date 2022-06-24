import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Arsenal Football Club";
  founded: string = "Established 1886"

  isHeader: boolean;
  constructor(public router:Router) { 
    this.isHeader = false;
  }

  ngOnInit(): void {}

}
