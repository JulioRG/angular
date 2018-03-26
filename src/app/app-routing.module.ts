import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PortariaComponent } from './portaria/portaria.component';


const autenticacaoRoutes: Routes = [
  {path: '', component: PortariaComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(autenticacaoRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
