import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
