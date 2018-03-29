import { AlertaService } from './../../services/alerta/alerta.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnDestroy {

  mensagem_de_alerta: any;
  subscription: Subscription;

  constructor(private alertaService: AlertaService) {
    this.subscription = this.alertaService.buscarMensagem().subscribe(message => { this.mensagem_de_alerta = message; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
