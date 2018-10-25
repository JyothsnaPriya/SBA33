import { Component, OnInit } from '@angular/core';
import { Manager } from '../../model/manager';
import { ContactService } from '../../service/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  manager: Manager;
  ladyLogo: string;
  gentLogo: string;
  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute
  ) {
    this.ladyLogo = "/assets/Images/lady.png";
    this.gentLogo = "/assets/Images/gent.png";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let managerid = params['id'];
        if (managerid) {
          this.contactService.getManagerById(managerid).subscribe(
            (data) => this.manager = data
          );
        }
      }
    );
  }

}
