import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AutenticacaoService {

  public token: string;
  private api_login_url = 'http://10.46.8.115/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log('Autenticacao SERVICE');
     return this.http.post<any>(this.api_login_url, { email: email, password: password }).map(
      user => {
        console.log('ACESSAR USER');

        if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
