import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { FilterComponent,ChannelListComponent } from './index';
import { DataService } from './shared/index';


@NgModule({
  declarations: [
    AppComponent,    
    FilterComponent,
    ChannelListComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [DataService],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
