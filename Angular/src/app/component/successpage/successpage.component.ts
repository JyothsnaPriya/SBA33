import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../../model/manager';
import { Multiplexes } from '../../model/multiplexes';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent implements OnInit {
  successlogo:string;
  manager:Manager;
  multiplexes:Multiplexes;
  dateToday:string;
  
  constructor(private contactService:ContactService
    , private activatedRoute : ActivatedRoute ) {
    this.successlogo="/assets/Images/handshake.png"
    this.dateToday=new Date().toString();
   }

  ngOnInit() {
    this.multiplexes= new Multiplexes();
    this.activatedRoute.params.subscribe(
      (params)=>{
        let mulname = params['id'];
        if(mulname){
          this.contactService.getMultiplexById(mulname).subscribe(
            (data)=>{
              this.multiplexes=data;
              
            }
          );
        }
      }
    );
  
  }

}
