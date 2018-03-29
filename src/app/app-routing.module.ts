import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PortariaComponent } from './portaria/portaria.component';
import { AuthGuard } from './guards/auth.guard';

const autenticacaoRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portaria', component: PortariaComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(autenticacaoRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
