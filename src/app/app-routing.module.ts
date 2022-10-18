import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home',component:HomeComponent
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
