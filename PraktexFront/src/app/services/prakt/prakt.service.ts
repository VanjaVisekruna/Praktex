import { Injectable } from '@angular/core';
import {Prakt} from "../../shared/models/prakt";

@Injectable({
  providedIn: 'root'
})
export class PraktService {

  constructor() { }

  getAll():Prakt[]{
    return [
      {
        id: 1,
        name: 'Dynatrace',
        cookTime: '4 weeks',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/Image/picture_1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Industrieinformatik',
        price: 20,
        cookTime: '8 weeks',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/Image/picture_2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Metalex',
        price: 5,
        cookTime: '4 weeks',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/Image/picture_3.jpg',
        tags: ['FastFood', 'Hamburger'],
      }
    ]
  }
}
