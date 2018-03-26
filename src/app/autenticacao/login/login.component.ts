import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, EmailValidator } from '@angular/forms';

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

  ) { }

  ngOnInit() {
    this.validarCamposDoFormulario();
    this.iniciarFormulario();
  }

  validarCamposDoFormulario() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
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

  enviarFormulario(){
    console.log(this.loginForm.valid);
  }
}
