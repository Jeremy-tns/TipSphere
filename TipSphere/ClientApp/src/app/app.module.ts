
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProfilComponent } from './modules/users/profil/profil.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavRightComponent } from './core/sidenav-right/sidenav-right.component';
import { SidenavLeftComponent } from './core/sidenav-left/sidenav-left.component';
import { FilComponent } from './modules/fil/fil.component';
import { TipstersComponent } from './modules/tipsters/tipsters.component';
import { BookmakersComponent } from './modules/bookmakers/bookmakers.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SidenavLeftComponent,
    ProfilComponent,
    SidenavRightComponent,
    FilComponent,
    TipstersComponent,
    BookmakersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
