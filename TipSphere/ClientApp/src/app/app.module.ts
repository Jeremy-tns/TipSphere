
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
import { FaqComponent } from './core/footerpage/faq/faq.component';
import { AproposComponent } from './core/footerpage/apropos/apropos.component';
import { PresseComponent } from './core/footerpage/presse/presse.component';
import { ContactComponent } from './core/footerpage/contact/contact.component';
import { CguComponent } from './core/footerpage/cgu/cgu.component';
import { CgvComponent } from './core/footerpage/cgv/cgv.component';
import { MentionslegalesComponent } from './core/footerpage/mentionslegales/mentionslegales.component';
import { ProfilTipstersComponent } from './modules/users/profil-tipsters/profil-tipsters.component';

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
    BookmakersComponent,
    FaqComponent,
    AproposComponent,
    PresseComponent,
    ContactComponent,
    CguComponent,
    CgvComponent,
    MentionslegalesComponent,
    ProfilTipstersComponent
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
