import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { AlertaService } from './../services/alerta/alerta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private validacao_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm: FormGroup;
  email: FormControl;
  senha: FormControl;
  
  constructor(
    private autenticacaoService: AutenticacaoService,
    private alertaService: AlertaService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.validarCamposDoFormulario();
    this.iniciarFormulario();
  }

  validarCamposDoFormulario() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(this.validacao_email),
    ]);
    this.senha = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  iniciarFormulario() {
    this.loginForm = new FormGroup({
      email: this.email,
      senha: this.senha,
    });
  }

  enviarFormulario() {
    if (!this.loginForm.valid) {
      return this.router.navigate(['/login']);
    }
    
    return this.autenticacaoService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(
      data => {
        console.log("CHeguei");
        console.log(data);
      },
      error => {
        this.alertaService.errors(error);
      });
  }

}
