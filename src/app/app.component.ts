import {Component,Input} from '@angular/core';
import {DataService,Channel,TvShows} from './shared/index';
import {} from '';
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

    doSort(value){ 

      if(value==1){
        this.channels.sort(function(a,b){
        return a.id-b.id;
      });
    }  
    if(value==2) {
        this.channels.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
         return 0;});
      }   
    } 
}
