import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.autenticacaoService.logout();
    this.router.navigate(['/login']);
  }
}
