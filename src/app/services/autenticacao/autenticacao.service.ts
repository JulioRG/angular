import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AutenticacaoService {

  public token: string;
  // private api_login_url = 'http://10.46.8.115/api/login';
  private api_login_url = 'http://sgi.dev1.slu.gdfnet.df/api/login';
  
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, password: string) {
     return this.http.post<any>(this.api_login_url, { email: email, password: password }).map(
       usuario => {
          if (usuario && usuario.data.token) {
            localStorage.setItem('currentUser', JSON.stringify(usuario.data.token));
            this.router.navigate(['/portaria/recepcao']);  
        }
        return usuario;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
