import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},

  //{ path: '**', redirectTo: '/home', pathMatch: 'full' },
  {path:'search/:searchTerm', component:HomeComponent},
  //{path:'login' , component: LoginComponent}
  {path:'login' , component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
