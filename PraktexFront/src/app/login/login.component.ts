import { Component } from '@angular/core';
import * as Console from "console";
import {UserDataServiceService} from "../user-data-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UsrName:string='';
  Password:string='';

  Output:string='';
  users:any;

  constructor(private userData: UserDataServiceService) {
    this.users = userData;
  }

  getUserName(value: string){
    console.warn(value)
    this.UsrName = value;
    this.Output += value;
  }
  getPassword(value: string){
    console.warn(value)
    this.Password = value;
    this.Output += value;
  }
  getUser(data:any){
    console.warn(data)
  }

  getUserFromData(data:any){
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>
      console.warn(result)
    )
  }

}
