import { Component, OnInit } from '@angular/core';
import { PraktService} from "../services/prakt/prakt.service";
import {Prakt} from "../shared/models/prakt";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  prakts:Prakt[] = [];
  searchTerm = '';

  constructor(private praktService:PraktService, private route:ActivatedRoute)   {
  }

  //fehler mit searchTerm
  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.prakts = this.praktService.getAll().filter(prakt =>
          prakt.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
        this.prakts = this.praktService.getAll();
    })
  }
}
