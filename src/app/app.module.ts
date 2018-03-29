import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AlertaComponent } from './diretives/alerta/alerta.component';
import { PortariaComponent } from './portaria/portaria.component';

import { AutenticacaoService } from './services/autenticacao/autenticacao.service';
import { AlertaService } from './services/alerta/alerta.service';

import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    AlertaComponent,
    PortariaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AutenticacaoService,
    AlertaService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
