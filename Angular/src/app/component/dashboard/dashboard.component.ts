import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Multiplexes } from '../../model/multiplexes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string;
  multiplexes: Multiplexes[];
  msg : string;
  constructor(private contactService:ContactService,
    private activatedRoute:ActivatedRoute) {
    this.title = "Multiplex Managment System";
  }

  ngOnInit() {
    // this.contactService.getAllMultiplexes().subscribe(
    //   (data) => this.multiplexes = data
    // );
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        let mulname=params['id'];
        let operation=params['opt'];
        // if(mulname && operation){
        //   this.msg = "Multiplex# "+mulname + " is successfully "+
        //   (operation=='d'?'Deleted':(operation=='a'?'added':'updated'));
          
        // }
        if(mulname){
          this.msg = "Multiplex# "+mulname + " is successfully "+
          "added";
          
        }else{
          this.msg=undefined;
        }
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];

        console.log(field +":"+srchValue);

        if(field && srchValue){
          this.contactService.searchMultiplex(field,srchValue).subscribe(
            (data) => this.multiplexes=data,
            (err)=>this.multiplexes=undefined
          );
        }
        else{
          this.contactService.getAllMultiplexes().subscribe(
            (data) => this.multiplexes=data,
            (err)=>this.multiplexes=undefined
          );
        }
      }
    );
  }

}
