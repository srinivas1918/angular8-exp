import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const routes: Routes = [{
  path:"heros", component:HeroComponent
},{
  path:"dashboard", component:DashboardComponent
},{
  path:"heroDetails/:id",component:HeroDetailComponent
},{ path: 'crisis-center', component: CrisisListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
