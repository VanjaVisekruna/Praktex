import { Component, OnInit } from '@angular/core';
import { PraktService} from "../services/prakt/prakt.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  prakts:String[] = []

  constructor(private praktService:PraktService) {
  }

  ngOnInit(): void{
    this.prakts = this.praktService.getAll();
  }
}
