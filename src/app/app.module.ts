import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FulltableComponent } from './fulltable/fulltable.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviedashboardComponent,
    FulltableComponent
  ],
  imports: [
    BrowserModule,
	MatTableModule,
	MatButtonToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
