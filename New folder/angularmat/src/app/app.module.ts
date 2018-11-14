import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demo1} from './Demo1/demo1.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { Demo2Component } from './demo2/demo2.component';
@NgModule({
  declarations: [
    AppComponent,
    demo1,
    Demo2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    
    MatFormFieldModule,
    MatInputModule
    

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormField
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
