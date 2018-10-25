import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Manager } from '../../model/manager';
import { Multiplexes } from '../../model/multiplexes';

@Component({
  selector: 'app-multiplex-form',
  templateUrl: './multiplex-form.component.html',
  styleUrls: ['./multiplex-form.component.css']
})
export class MultiplexFormComponent implements OnInit {

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
    
    ///this.dateToday= new Date().toDateString();
  

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
      this.contactService.addMultiplex(this.multiplexes).subscribe(
        (data)=>{
          this.router.navigateByUrl("/success1");
        }
      );
    }

}
