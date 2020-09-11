import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleviewComponent } from './peopleview/peopleview.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { FilmViewComponent } from './film-view/film-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleviewComponent,
    PersonViewComponent,
    FilmViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
