import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';

import { MaterialModule } from './material';
import { BarRatingModule } from "ngx-bar-rating";

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginRegisterComponent,
    ModalWindowComponent,
    TopNavbarComponent,
    HomepageComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ModalWindowComponent,
    NgxSpinnerModule,
    LoaderComponent,
    TopNavbarComponent,
    BarRatingModule
  ]
})
export class AppModule { }
