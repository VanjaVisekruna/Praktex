export class Prakt{

  //falls optional, dann ? statt !
  id!:number;
  name!:string;
  price!:number ;
  tags?:string[];
  favorite:boolean = false;
  stars:number = 0;
  imageUrl!:string;
  origins!:string[];
  cookTime!:string;
}
