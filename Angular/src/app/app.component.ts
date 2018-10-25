import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  logoUrl: string;
  field:string="emailId";
  srchValue:string="";
  tllogo:string;
  constructor(
    private router:Router
  ){
    this.title="Multiplex Managment System";
    this.logoUrl="/assets/Images/adbLogo.png";

  }

  doSearch(){
    this.router.navigate(["/listMultiplexes"],{queryParams:{field:this.field,srchValue:this.srchValue}});
  }

  doChangeField(field,ele){
    this.field=field;
    this.srchValue="";
    switch(field){
      case 'contactno': ele.placeholder="Mobile";ele.type="string"; break;
      case 'location': ele.placeholder="Location"; ele.type="string";break;
      case 'mulname': ele.placeholder="Multiplex"; ele.type="string";break;
    }
  }
}
