import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertaService {

  private subject = new Subject<any>();
  private manterNavegacaoAposMudanca = false;

  constructor(private router: Router) {

    router.events.subscribe(evento => {
      if (evento instanceof NavigationStart) {
        if (this.manterNavegacaoAposMudanca) {
          this.manterNavegacaoAposMudanca = false;
        } else {
          this.subject.next();
        }
      }
    });

  }

  success(message: string, manterNavegacaoAposMudanca = false){
    this.manterNavegacaoAposMudanca = manterNavegacaoAposMudanca;
    this.subject.next({ type: 'success', text: message });
  }
  
  errors(message: string, manterNavegacaoAposMudanca = false){
    this.manterNavegacaoAposMudanca = manterNavegacaoAposMudanca;
    this.subject.next({ type: 'errors', text: message });
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();  
  }

}
