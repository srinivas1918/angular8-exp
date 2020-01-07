import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


const routes: Routes = [
{ path: 'heroes', component: HeroListComponent },
{ path: '**', component: PageNotFoundComponent },
{
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
