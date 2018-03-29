import { AlertaComponent } from './../diretives/alerta/alerta.component';
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup} from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao/autenticacao.service';
import { AlertaService } from './../services/alerta/alerta.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  senha: FormControl;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private alertaService: AlertaService,
    private router: Router,

    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.validarCamposDoFormulario();
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.loginForm = new FormGroup({
      email: this.email,
      senha: this.senha,
    });
  }

  validarCamposDoFormulario() {
    const validacao_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(validacao_email),
    ]);
    this.senha = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  enviarFormulario() {
    if (!this.loginForm.valid) {
      return this.router.navigate(['/login']);
    }

    return this.autenticacaoService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe( data => {
       this.verificarUsuario(data);
     });
  }

  verificarUsuario(data){
    if (data.errors) {
      this.alertaService.enviarAlerta(data.errors[0]);
    }
    return data;
  }
}
