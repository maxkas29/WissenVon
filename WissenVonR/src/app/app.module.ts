import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent,DatabaseViewComponent]
})
export class AppModule { }
