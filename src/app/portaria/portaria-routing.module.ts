import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecepcaoComponent } from './recepcao/recepcao.component';
import { LocalidadeComponent } from './localidade/localidade.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { AuthGuard } from '../guards/auth.guard';




const portariaRoutes: Routes = [
  { path: 'portaria/recepcao', component: RecepcaoComponent, canActivate: [AuthGuard] },
  { path: 'portaria/localidade', component: LocalidadeComponent, canActivate: [AuthGuard] },
  { path: 'portaria/empresa', component: EmpresaComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(portariaRoutes),
  ],
  exports: [RouterModule]
})
export class PortariaRoutingModule { }
