import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  {path: 'home', component: HeaderComponent},
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
