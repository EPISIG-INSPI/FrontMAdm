import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { CommonModule } from '@angular/common';
import { OlvidarContraComponent } from './componentes/olvidar-contra/olvidar-contra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    OlvidarContraComponent,
    InicioComponent
  ],
  imports: [
		FormsModule,
		ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    NgChartsModule
  ],
  providers: [
    { provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
