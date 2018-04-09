import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RecepcaoComponent } from './recepcao/recepcao.component';

import { PortariaRoutingModule } from './portaria-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { LocalidadeComponent } from './localidade/localidade.component';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  imports: [
    CommonModule,
    PortariaRoutingModule,
    MatMenuModule,
  ],
  declarations: [
    MenuComponent,
    RecepcaoComponent,
    LocalidadeComponent,
    EmpresaComponent
  ]
})
export class PortariaModule { }
