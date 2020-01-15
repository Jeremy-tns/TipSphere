import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ProfilComponent } from './modules/users/profil/profil.component';
import { SidenavLeftComponent } from './core/sidenav-left/sidenav-left.component';
import { SidenavRightComponent } from './core/sidenav-right/sidenav-right.component';
import { FilComponent } from './modules/fil/fil.component';
import { TipstersComponent } from './modules/tipsters/tipsters.component';
import { BookmakersComponent } from './modules/bookmakers/bookmakers.component';
import { AproposComponent } from './core/footerpage/apropos/apropos.component';
import { CguComponent } from './core/footerpage/cgu/cgu.component';
import { CgvComponent } from './core/footerpage/cgv/cgv.component';
import { ContactComponent } from './core/footerpage/contact/contact.component';
import { FaqComponent } from './core/footerpage/faq/faq.component';
import { MentionslegalesComponent } from './core/footerpage/mentionslegales/mentionslegales.component';
import { PresseComponent } from './core/footerpage/presse/presse.component';


const routes: Routes = [
  { path: 'profil', component: ProfilComponent },
  { path: 'fil', component: FilComponent },
  { path: 'tipsters', component: TipstersComponent },
  { path: 'bookmakers', component: BookmakersComponent },
  { path: 'sidenav-left', component: SidenavLeftComponent},
  { path: 'sidenav-right', component: SidenavRightComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'apropos', component: AproposComponent},
  { path: 'cgu', component: CguComponent},
  { path: 'cgv', component: CgvComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'mentionslegales', component: MentionslegalesComponent},
  { path: 'presse', component: PresseComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
