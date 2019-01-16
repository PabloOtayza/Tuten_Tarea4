import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[HttpClient,LoginService]
})
export class LoginPage {
  inputEmail='';
  inputPassword='';
  mensajeError='';
  constructor(public navCtrl: NavController, private loginService: LoginService) {
   
  }
  ngOnInit() {
    
  }
  logIn(){
    let username=this.inputEmail;
    let password=this.inputPassword;
    this.loginService.login(username,password).subscribe(
      res => {
        localStorage.setItem("jsonLogin",JSON.stringify(res));
        // this.mensajeError ="Bienvenido "+res["firstName"]+" "+res["lastName"]+"!!!";
        this.inputEmail='';
        this.inputPassword='';
        this.navCtrl.push(ListPage);
      }
      ,
      error => {
        alert('Error al iniciar sesión');
      }
    )
    ;
  }

}