import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertaService {

  private subject = new Subject<any>();

  enviarAlerta(message: string) {
      this.subject.next({ text: message });
  }

  limparAlerta() {
      this.subject.next();
  }

  buscarMensagem(): Observable<any> {
      return this.subject.asObservable();
  }

}
