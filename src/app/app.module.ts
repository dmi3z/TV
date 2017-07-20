import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {FilterComponent} from './index';
import {DataService} from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
