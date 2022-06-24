import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AsiaEliteCupService } from 'src/app/services/asia-elite-cup.service';
import { AsiaEliteCupInterface } from 'src/app/models/asia-elite-cup-interface';
import { AsiaEliteCupCardComponent } from 'src/app/cards/asia-elite-cup-card/asia-elite-cup-card.component';

@Component({
  selector: 'asia-elite-cup-table',
  templateUrl: './asia-elite-cup-table.component.html',
  styleUrls: ['./asia-elite-cup-table.component.scss']
})
export class AsiaEliteCupTableComponent implements OnInit {
  @Input() PlayerYear!: string;
  @Input() CompetitionName! : string;

  private subs = new Subscription();

  displayedColumns: string[] = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
  dataSource = new MatTableDataSource<AsiaEliteCupInterface>();
  searchField!:string;
  resultLength!: number;
  displayNoRecords! : boolean;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private _AsiaEliteCupService:AsiaEliteCupService,
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
      result = this._AsiaEliteCupService.getAsiaEliteCupList(this.PlayerYear);
      result.subscribe((report: any)=>this.dataSource.data=report as any as AsiaEliteCupInterface[]);
  }

  onClickPlayer(player: AsiaEliteCupInterface){
    const dialogConfig = new MatDialogConfig();
    this._AsiaEliteCupService.formData = player;
    this.resultLength = this.dataSource.data.length;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = "594px";
    dialogConfig.width = "821px";
    this._dialog.open(AsiaEliteCupCardComponent, dialogConfig);
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
    this.dataSource.filterPredicate = (data: AsiaEliteCupInterface, filter: string): boolean => {
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
