import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard'; 
 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import {InputsModule,WavesModule,ButtonsModule,CardsModule, NavbarModule, ModalModule} from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonsModule,
    CardsModule,
    InputsModule, 
    FormsModule,
    MDBBootstrapModulesPro.forRoot(),
    ModalModule,
    NavbarModule,
    ReactiveFormsModule,
    WavesModule
  
  ],
  schemas:[ NO_ERRORS_SCHEMA],
  providers: [ 
    MDBSpinningPreloader,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
