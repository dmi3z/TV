import {Component} from '@angular/core';
import {DataService,Channel} from './shared/index';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent  {
   
   
    channels:Channel[]=[];
    

    constructor(private dataService:DataService){}

    ngOnInit(){
        
       this.dataService.getChannels().subscribe(data=>this.channels=data);
                     
    }
 
  
}
