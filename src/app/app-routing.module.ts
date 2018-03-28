import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';


const autenticacaoRoutes: Routes = [
  {path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(autenticacaoRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
