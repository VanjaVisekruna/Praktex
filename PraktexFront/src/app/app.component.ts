import { Component } from '@angular/core';
import {UserDataServiceService} from "./user-data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PraktexFront';
  users:any;
  constructor(private userData: UserDataServiceService) {
  this.userData.users().subscribe((data) =>{
    this.users = data;
  });
  }




}
