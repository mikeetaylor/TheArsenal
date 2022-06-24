import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommunityShieldService } from 'src/app/services/community-shield.service';
import { CommunityShieldInterface } from 'src/app/models/community-shield-interface';
import { CommunityShieldCardComponent } from 'src/app/cards/community-shield-card/community-shield-card.component';

@Component({
  selector: 'community-shield-table',
  templateUrl: './community-shield-table.component.html',
  styleUrls: ['./community-shield-table.component.scss']
})
export class CommunityShieldTableComponent implements OnInit {
  @Input() PlayerYear!: string;

  private subs = new Subscription();

  displayedColumns: string[] = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
  dataSource = new MatTableDataSource<CommunityShieldInterface>();
  searchField!:string;
  resultLength!: number;
  displayNoRecords! : boolean;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private _CommunityShieldService:CommunityShieldService,
    public _dialog:MatDialog) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getThisRoster(this.PlayerYear);
    this.displayNoRecords = false;
    this.filterTable();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getThisRoster(result:any){
      result = this._CommunityShieldService.getCommunityShieldList(this.PlayerYear);
      result.subscribe((report: any)=>this.dataSource.data=report as any as CommunityShieldInterface[]);
  }

  onClickPlayer(player: CommunityShieldInterface){
    const dialogConfig = new MatDialogConfig();
    this._CommunityShieldService.formData = player;
    this.resultLength = this.dataSource.data.length;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = "594px";
    dialogConfig.width = "821px";
    this._dialog.open(CommunityShieldCardComponent, dialogConfig);
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filteredData.length == 0 ? this.displayNoRecords = true : this.displayNoRecords = false;
  }
  
  filterTable() {
    this.dataSource.filterPredicate = (data: CommunityShieldInterface, filter: string): boolean => {
      return (
        data.Position.toLocaleLowerCase().includes(filter) || data.LastName.toLocaleLowerCase().includes(filter)
        || data.FirstName.toLocaleLowerCase().includes(filter) || data.ImageName.toLocaleLowerCase().includes(filter)
      )
    }
  } 

  clearSearchField(): void {
    this.searchField = '';
    this.dataSource.filter = '';
    this.displayNoRecords = false;
  }
}
