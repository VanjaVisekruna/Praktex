export class Prakt{

  //falls optional, dann ? statt !
  id!:number;
  description!:string;
  praktName!:string;
  tags?:string[];
  favorite:boolean = false;
}
