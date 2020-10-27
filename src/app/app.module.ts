import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';

import { MaterialModule } from './material';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginRegisterComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ModalWindowComponent
  ]
})
export class AppModule { }
