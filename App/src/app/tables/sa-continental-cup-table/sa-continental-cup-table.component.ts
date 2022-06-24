import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SAContinentalCupService } from 'src/app/services/sa-continental-cup.service';
import { SAContinentalCupInterface } from 'src/app/models/sa-continental-cup-interface';
import { SAContinentalCupCardComponent } from 'src/app/cards/sa-continental-card/sa-continental-cup-card.component';

@Component({
  selector: 'sa-continental-cup-table',
  templateUrl: './sa-continental-cup-table.component.html',
  styleUrls: ['./sa-continental-cup-table.component.scss']
})
export class SAContinentalCupTableComponent implements OnInit {
  @Input() PlayerYear!: string;

  private subs = new Subscription();

  displayedColumns: string[] = ['Position', 'FirstName', 'LastName', 'Appearances', 'Goals', 'Assists', 'CleanSheets'];
  dataSource = new MatTableDataSource<SAContinentalCupInterface>();
  searchField!:string;
  resultLength!: number;
  displayNoRecords! : boolean;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private _SAContinentalCupService:SAContinentalCupService,
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
      result = this._SAContinentalCupService.getSAContinentalCupList(this.PlayerYear);
      result.subscribe((report: any)=>this.dataSource.data=report as any as SAContinentalCupInterface[]);
  }

  onClickPlayer(player: SAContinentalCupInterface){
    const dialogConfig = new MatDialogConfig();
    this._SAContinentalCupService.formData = player;
    this.resultLength = this.dataSource.data.length;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = "594px";
    dialogConfig.width = "821px";
    this._dialog.open(SAContinentalCupCardComponent, dialogConfig);
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
    this.dataSource.filterPredicate = (data: SAContinentalCupInterface, filter: string): boolean => {
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
