import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Output() acessar_login = new EventEmitter();  
  @Output() acessar_logout = new EventEmitter(); 


  @Output() exbir_menu = new EventEmitter();
  @Output() nao_exbir_menu = new EventEmitter();  
  
  private is_visible_logout: boolean =  false;
  private is_visible_menu: boolean =  false;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verificarToken();
    this.exibirMenu();
  }

  verificarToken() {
    if (localStorage.getItem('currentUser').length) {
      return this.acessar_logout.emit(this.is_visible_logout = true);
    }
     return this.acessar_login.emit(this.is_visible_logout = false);
  }

  exibirMenu(){
    if (localStorage.getItem('currentUser').length) {
      return this.exbir_menu.emit(this.is_visible_menu = true);
    }
    return this.nao_exbir_menu.emit(this.is_visible_menu = false);
  }
  sair() {
    this.autenticacaoService.logout();
    this.router.navigate(['/login']);
  }

  login(){
    this.router.navigate(['/login']);
  }
}
