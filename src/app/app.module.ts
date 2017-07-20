import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {FilterComponent,ChannelListComponent} from './index';
import {DataService} from './shared/index';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ChannelListComponent
    
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
