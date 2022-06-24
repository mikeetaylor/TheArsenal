import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RosterLayoutComponent } from './layout/roster-layout/roster-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FirstTeamComponent } from './first-team/first-team.component';
import { AsiaEliteCupComponent } from './asia-elite-cup/asia-elite-cup.component';
import { CommunityShieldComponent } from './community-shield/community-shield.component';
import { EPLComponent } from './epl/epl.component';
import { FACupComponent } from './fa-cup/fa-cup.component';
import { LeagueCupComponent } from './league-cup/league-cup.component';
import { SAContinentalCupComponent } from './sa-continental-cup/sa-continental-cup.component';
import { SuperCupComponent } from './super-cup/super-cup.component';
import { UCLComponent } from './ucl/ucl.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Home'},
  {path:'Home', component:HomeComponent},
  {path:'PageNotFound', component:PageNotFoundComponent},
  {path:'Team', component:RosterLayoutComponent, children: [ { path: '', component: FirstTeamComponent }]},
  {path:'Asia-Elite-Cup', component:RosterLayoutComponent, children: [ { path: '', component: AsiaEliteCupComponent }]},
  {path:'Community-Shield', component:RosterLayoutComponent, children: [ { path: '', component: CommunityShieldComponent }]},
  {path:'Epl', component:RosterLayoutComponent, children: [ { path: '', component: EPLComponent }]},
  {path:'FA-Cup', component:RosterLayoutComponent, children: [ { path: '', component: FACupComponent }]},
  {path:'League-Cup', component:RosterLayoutComponent, children: [ { path: '', component: LeagueCupComponent }]},
  {path:'SA-Continental-Cup', component:RosterLayoutComponent, children: [ { path: '', component: SAContinentalCupComponent }]},
  {path:'Super-Cup', component:RosterLayoutComponent, children: [ { path: '', component: SuperCupComponent }]},
  {path:'Champions-League', component:RosterLayoutComponent, children: [ { path: '', component: UCLComponent }]},

  {path: '**', redirectTo: '/PageNotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
