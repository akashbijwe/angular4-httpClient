import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  getUsersdata(){
    return this.http.get(this.url)
    .map((response: Response)=> response.json())
    .catch(this._errorhandler);
  }

  getUserdata(id){
    return this.http.get(this.url + '/'+ id)
    .map((response: Response) => response.json())
    .catch(this._errorhandler);
  }

  _errorhandler(error: Response){
    console.log(error);
    return Observable.throw(error || 'server Error');
  }

}
