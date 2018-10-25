import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Multiplexes } from '../../model/multiplexes';

@Component({
  selector: 'app-muliplex-list',
  templateUrl: './multiplex-list.component.html',
  styleUrls: ['./multiplex-list.component.css']
})
export class MultiplexListComponent implements OnInit {

  multiplexes:Multiplexes[];
  
  mulLogo:string;

  constructor(
    private contactService:ContactService,
    private activatedRoute : ActivatedRoute  
  ) {
    this.mulLogo="/assets/Images/multiplex.png";
   }

  ngOnInit() {
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
  

