import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouterRoutingModule } from './home-router-routing.module';
import { PersonalComponent } from '../personal/personal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    HomeRouterRoutingModule,
		FormsModule,
		ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class HomeRouterModule { }
