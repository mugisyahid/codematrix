import { Component, OnInit} from '@angular/core';

import { application } from './application';
import { AppService } from './application.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{
  title = 'codematrix';
 apps : application[];

 constructor(private appService: AppService) { }



getApps() : void {
	 this.appService.getApps().then(apps => this.apps = apps);
}

 ngOnInit(): void {
 this.getApps();	
  }


  
  

}



