import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule }from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AsiaEliteCupService } from './services/asia-elite-cup.service';
import { CommunityShieldService } from './services/community-shield.service';
import { EPLService } from './services/epl.service';
import { FACupService } from './services/fa-cup.service';
import { LeagueCupService } from './services/league-cup.service';
import { PlayerService } from './services/player.service';
import { SAContinentalCupService } from './services/sa-continental-cup.service';
import { SuperCupService } from './services/super-cup.service';
import { UCLService } from './services/ucl.service';
import { YearService } from './services/year.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderFreeLayoutComponent } from './layout/header-free-layout/header-free-layout.component';
import { RosterLayoutComponent } from './layout/roster-layout/roster-layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsMenuComponent as _2024_2025CompetitionsMenuComponent } from './competition-menus/2024-2025/competitions-menu.component';
import { CompetitionsMenuComponent as _2023_2024CompetitionsMenuComponent } from './competition-menus/2023-2024/competitions-menu.component';
import { CompetitionsMenuComponent as _2022_2023CompetitionsMenuComponent } from './competition-menus/2022-2023/competitions-menu.component';
import { CompetitionsMenuComponent as _2021_2022CompetitionsMenuComponent } from './competition-menus/2021-2022/competitions-menu.component';

import { FirstTeamComponent } from './first-team/first-team.component';
import { AsiaEliteCupComponent } from './asia-elite-cup/asia-elite-cup.component';
import { CommunityShieldComponent } from './community-shield/community-shield.component';
import { EPLComponent } from './epl/epl.component';
import { FACupComponent } from './fa-cup/fa-cup.component';
import { LeagueCupComponent } from './league-cup/league-cup.component';
import { SAContinentalCupComponent } from './sa-continental-cup/sa-continental-cup.component';
import { SuperCupComponent } from './super-cup/super-cup.component';
import { UCLComponent } from './ucl/ucl.component';

import { PlayerTableComponent } from './tables/player-table/player-table.component';
import { AsiaEliteCupTableComponent } from './tables/asia-elite-cup-table/asia-elite-cup-table.component';
import { CommunityShieldTableComponent } from './tables/community-shield-table/community-shield-table.component';
import { EPLTableComponent } from './tables/epl-table/epl-table.component';
import { FACupTableComponent } from './tables/fa-cup-table/fa-cup-table.component';
import { LeagueCupTableComponent } from './tables/league-cup-table/league-cup-table.component';
import { SAContinentalCupTableComponent } from './tables/sa-continental-cup-table/sa-continental-cup-table.component';
import { SuperCupTableComponent } from './tables/super-cup-table/super-cup-table.component';
import { UCLTableComponent } from './tables/ucl-table/ucl-table.component';

import { PlayerCardComponent } from './cards/player-card/player-card.component';
import { AsiaEliteCupCardComponent } from './cards/asia-elite-cup-card/asia-elite-cup-card.component';
import { CommunityShieldCardComponent } from './cards/community-shield-card/community-shield-card.component';
import { EPLCardComponent } from './cards/epl-card/epl-card.component';
import { FACupCardComponent } from './cards/fa-cup-card/fa-cup-card.component';
import { LeagueCupCardComponent } from './cards/league-cup-card/league-cup-card.component';
import { SAContinentalCupCardComponent } from './cards/sa-continental-card/sa-continental-cup-card.component';
import { SuperCupCardComponent } from './cards/super-cup-card/super-cup-card.component';
import { UCLCardComponent } from './cards/ucl-card/ucl-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderFreeLayoutComponent,
    RosterLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,

    FirstTeamComponent,
    AsiaEliteCupComponent,
    CommunityShieldComponent,
    EPLComponent,
    FACupComponent,
    LeagueCupComponent,
    SAContinentalCupComponent,
    SuperCupComponent,
    UCLComponent,

    PlayerTableComponent,
    AsiaEliteCupTableComponent,
    CommunityShieldTableComponent,
    EPLTableComponent,
    FACupTableComponent,
    LeagueCupTableComponent,
    SAContinentalCupTableComponent,
    SuperCupTableComponent,
    UCLTableComponent,

    PlayerCardComponent,
    AsiaEliteCupCardComponent,
    CommunityShieldCardComponent,
    EPLCardComponent,
    FACupCardComponent,
    LeagueCupCardComponent,
    SAContinentalCupCardComponent,
    SuperCupCardComponent,
    UCLCardComponent,

    CompetitionComponent,
    _2024_2025CompetitionsMenuComponent,
    _2023_2024CompetitionsMenuComponent,
    _2022_2023CompetitionsMenuComponent,
    _2021_2022CompetitionsMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    AsiaEliteCupService, CommunityShieldService, EPLService, 
    FACupService, PlayerService, LeagueCupService, SAContinentalCupService, 
    SuperCupService, UCLService, YearService,

    FirstTeamComponent, AsiaEliteCupComponent, CommunityShieldComponent, EPLComponent, 
    FACupComponent, LeagueCupComponent, SAContinentalCupComponent, SuperCupComponent,
    UCLComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
