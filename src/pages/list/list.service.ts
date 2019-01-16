import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) {
       
  }
  rginit(){


  }
  booking(adminEmail:string, email:string, token:string) {
      let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'adminemail': adminEmail,
          'token': token,
          'app': 'APP_BCK'
      });
      console.log(token);
      let params = new URLSearchParams();
      params.append('email', email)
      let options = {
          headers: httpHeaders,
          search : params
      };   
      let Url = 'https://dev.tuten.cl/TutenREST/rest/user/'+email+'/bookings?current=true'
      let res:any;
      res = this.http.get(Url,options);
      return res; 
  }
}