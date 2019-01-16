import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
       
  }
  
  login(username:string, password:string) {
      let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'password': password,
          'app': "APP_BCK"
      });
      let options = {
          headers: httpHeaders
      };   
      return this.http.put('https://dev.tuten.cl:443/TutenREST/rest/user/'+username, {
          // app: "APP_BCK",
          email: username,
          // password: password,     
      }, options);     
  }
}