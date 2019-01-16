import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListService } from './list.service';
import { isNumber } from 'ionic-angular/umd/util/util';
import 'rxjs/add/operator/map';

let resLogin: string = localStorage.getItem("jsonLogin");

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ListService]
})
export class ListPage {
  public data: any;
  public dataAux: any;
  filterBookingID = '0';
  filterBookingPrice = '0';
  constructor(public navCtrl: NavController, public navParams: NavParams, private listService: ListService) {
    // If we navigated to this page, we will have an item available as a nav param
    
  }

  ngOnInit() {
    this.obtenerBooking();
  }

  obtenerBooking() {
    let email: string = 'contacto@tuten.cl';
    let adminEmail: string = JSON.parse(resLogin)["email"];
    let token: string = JSON.parse(resLogin)["sessionTokenBck"];
    this.listService.booking(adminEmail, email, token).subscribe(
      res => {
        this.data = res;
        this.data.forEach(element => {
          element.bookingFields=JSON.parse(element.bookingFields);
          element.bookingTime= new Date(element.bookingTime).toLocaleString();
        });
        localStorage.setItem("jsonBooks",JSON.stringify(res));
        this.dataAux = this.data
        
        
        //document.getElementById("parrafoRES").innerText = JSON.stringify(res);
        
      }

    );
  
  }
  filterBookings(){
    if(this.filterBookingID==''){
      this.filterBookingID = '0';
    }
    if(this.filterBookingPrice==''){
      this.filterBookingPrice = '0';
    }
    this.data = this.dataAux.filter(x => x.bookingId >= parseInt(this.filterBookingID));
    this.data = this.data.filter(x => x.bookingPrice >= parseInt(this.filterBookingPrice));
    
  }
}
