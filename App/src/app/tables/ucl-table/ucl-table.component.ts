import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UCLService } from 'src/app/services/ucl.service';
import { UCLInterface } from 'src/app/models/ucl-interface';
import { UCLCardComponent } from 'src/app/cards/ucl-card/ucl-card.component';

@Component({
  selector: 'ucl-table',
  templateUrl: './ucl-table.component.html',
  styleUrls: ['./ucl-table.component.scss']
})
export class UCLTableComponent implements OnInit {
  @Input() PlayerYear!: string;

  private subs = new Subscription();

  displayedColumns: string[] = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
  dataSource = new MatTableDataSource<UCLInterface>();
  searchField!:string;
  resultLength!: number;
  displayNoRecords! : boolean;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private _UCLService:UCLService,
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
      result = this._UCLService.getUCLList(this.PlayerYear);
      result.subscribe((report: any)=>this.dataSource.data=report as any as UCLInterface[]);
  }

  onClickPlayer(player: UCLInterface){
    const dialogConfig = new MatDialogConfig();
    this._UCLService.formData = player;
    this.resultLength = this.dataSource.data.length;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = "594px";
    dialogConfig.width = "821px";
    this._dialog.open(UCLCardComponent, dialogConfig);
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
    this.dataSource.filterPredicate = (data: UCLInterface, filter: string): boolean => {
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
