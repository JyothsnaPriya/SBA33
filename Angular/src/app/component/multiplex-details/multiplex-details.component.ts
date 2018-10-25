import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Multiplexes } from '../../model/multiplexes';
import { Manager } from '../../model/manager';

@Component({
  selector: 'app-multiplex-details',
  templateUrl: './multiplex-details.component.html',
  styleUrls: ['./multiplex-details.component.css']
})
export class MultiplexDetailsComponent implements OnInit {

  manager: Manager;
  multiplexes:Multiplexes;
  mulLogo:string;
  ladyLogo: string;
  gentLogo: string;
  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) {
    this.mulLogo="/assets/Images/multiplex.png";
    this.ladyLogo = "/assets/Images/lady.png";
    this.gentLogo = "/assets/Images/gent.png";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let mulname = params['id'];
        if (mulname) {
          this.contactService.getMultiplexById(mulname).subscribe(
            (data) => this.multiplexes = data
          );
        }
      }
    );
  }

    
  }


