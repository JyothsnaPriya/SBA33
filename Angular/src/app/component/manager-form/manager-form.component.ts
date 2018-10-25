import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ContactService } from '../../service/contact.service';
import {Manager} from '../../model/manager';
import {Multiplexes} from '../../model/multiplexes';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent implements OnInit {

  manager:Manager;
  isEditing:boolean;
  multiplexes: Multiplexes;
  dateToday:string;


  constructor(
    private activatedRoute:ActivatedRoute,
    private contactService:ContactService,
    private router:Router
  ) { }

  ngOnInit() {

    this.manager=new Manager();
    this.multiplexes = new Multiplexes();
    
    this.dateToday= new Date().toDateString();
  

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

  save(){ 
      this.manager.mulname= this.multiplexes.mulname;
      this.contactService.addManager(this.manager).subscribe(
        (data)=>{
          this.router.navigateByUrl("/success/{{multiplexes.mulname}}");
        }
      );
    }
  }

