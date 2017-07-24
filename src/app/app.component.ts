import {Component} from '@angular/core';
import {DataService,Channel,TvShows} from './shared/index';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})

export class AppComponent  {
   
   
    ch_temp:Channel[];
    tvshows_temp:TvShows[];
    channels:Channel[]=[];
    tvshows:TvShows[]=[];
    

    constructor(private dataService:DataService){}

    ngOnInit(){
        
       this.dataService.getChannelsList().subscribe(
         data=>this.ch_temp=data,
         error=>error,
         ()=>this.channels=this.ch_temp); 

        this.dataService.getTvShowsList().subscribe(
         data=>this.tvshows_temp=data,
         error=>error,
         ()=>this.tvshows=this.tvshows_temp); 
                     
    }
 
  
}
