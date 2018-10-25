import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from '../../model/manager';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-delete-manager',
  templateUrl: './delete-manager.component.html',
  styleUrls: ['./delete-manager.component.css']
})
export class DeleteManagerComponent implements OnInit {

  manager: Manager;

  constructor(private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

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

  doDelete(isConfirmed:boolean){
    if(isConfirmed){
      this.contactService.deleteManagerById(this.manager.managerid).subscribe(
        (resp) =>{
          if(resp.ok){
            this.router.navigateByUrl("/?opt=d&id="+this.manager.managerid);
          }
        }
      );
    }else{
      this.router.navigateByUrl("/listManagers");
    }
  }
}
