import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MultiplexListComponent } from './component/multiplex-list/multiplex-list.component';
import { MultiplexDetailsComponent } from './component/multiplex-details/multiplex-details.component';
import { ManagerFormComponent } from './component/manager-form/manager-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AdjustLengthPipe } from './pipe/adjust-length.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SuccesspageComponent } from './component/successpage/successpage.component';
import { ManagerListComponent } from './component/manager-list/manager-list.component';
import { DeleteManagerComponent } from './component/delete-manager/delete-manager.component';
import { ManagerDetailsComponent } from './component/manager-details/manager-details.component';
import { MultiplexFormComponent } from './component/multiplex-form/multiplex-form.component';


const paths : Routes =[
  {path:'',component:MultiplexListComponent},
  {path:'listMultiplexes',component:MultiplexListComponent},
  {path:'addMultiplex',component:MultiplexFormComponent},
  {path:'viewMultiplex/:id',component:MultiplexDetailsComponent},
  {path:'listManagers',component:ManagerListComponent},
  {path:'addManager/:id',component:ManagerFormComponent},
  {path:'viewManager/:id',component:ManagerDetailsComponent},  
  {path:'delManager/:id' , component:DeleteManagerComponent}, 
  {path:'success/:id',component:SuccesspageComponent},
  {path:'success1',component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MultiplexListComponent,
    MultiplexDetailsComponent,
    ManagerFormComponent,
    DashboardComponent,
    AdjustLengthPipe,
    SuccesspageComponent,
    ManagerListComponent,
    DeleteManagerComponent,
    ManagerDetailsComponent,
    MultiplexFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
