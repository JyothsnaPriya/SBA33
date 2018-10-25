import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';
import {Multiplexes} from '../../model/multiplexes';
import {Manager} from '../../model/manager';


@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  multiplexes:Multiplexes[];
  manager:Manager[];
  
  ladyLogo:string;
  gentLogo:string;

  constructor(
    private contactService:ContactService,
    private activatedRoute : ActivatedRoute  
  ) {
    this.ladyLogo="/assets/Images/lady.png";
    this.gentLogo="/assets/Images/gent.png";
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];

        console.log(field +":"+srchValue);

        if(field && srchValue){
          this.contactService.searchManager(field,srchValue).subscribe(
            (data) => this.manager=data,
            (err)=>this.manager=undefined
          );
        }
        else{
          this.contactService.getAllManagers().subscribe(
            (data) => this.manager=data,
            (err)=>this.manager=undefined
          );
        }
      }
    );
    }

}
