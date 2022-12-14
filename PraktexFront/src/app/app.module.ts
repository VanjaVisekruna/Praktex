import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";

//import {RatingModule} from "ng-starrating";
import { SearchComponent } from './search/search.component';

import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";

import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent
  ],
    // imports: [
    //     BrowserModule,
    //     BrowserAnimationsModule,
    //     MatToolbarModule,
    //     MatButtonModule,
    //     MatIconModule,
    //     AppRoutingModule,
    //     MatCardModule,
    //   RatingModule,
    //   FormsModule
    // ],
    //
    // LoginComponent,
    //

  //],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
