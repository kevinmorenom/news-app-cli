import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitularesComponent } from './pages/titulares/titulares.component';
import { NewsComponent } from './pages/news/news.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './globals/guards/auth.guard';
import { UnauthGuard } from './globals/guards/unauth.guard';
const routes: Routes = [
  {path: '', redirectTo: 'titulares', pathMatch: 'full'},
  {path: 'titulares', component: TitularesComponent, canActivate:[AuthGuard]},
  {path: 'noticias', component: NewsComponent,canActivate:[AuthGuard]},
  {path: 'signup', component: SignupComponent,canActivate:[UnauthGuard]},
  {path: 'login', component: LoginComponent,canActivate:[UnauthGuard]},
  {path: '**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
