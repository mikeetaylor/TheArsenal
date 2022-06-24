import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  // declarations: [RosterTableComponent],
  imports: [
    AppRoutingModule,
    RouterModule.forChild([]),
  ]
})
export class LayoutModule { }
