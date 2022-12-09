import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PraktService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/Image/picture_1.jpg',
      '/assets/Image/picture_2.jpg',
      '/assets/Image/picture_3.jpg',
    ]
  }
}
