import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';


import { application } from './application';


@Injectable()
export class AppService {



private headers = new Headers({'Content-Type': 'application/json'});
  private appUrl = 'http://localhost:8000/getapps';  // URL to web api



constructor(private http: Http) { }
 
  getApps(): Promise<application[]> {
    return this.http.get(this.appUrl)
               .toPromise()
               .then(response => response.json().data as application[])
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}