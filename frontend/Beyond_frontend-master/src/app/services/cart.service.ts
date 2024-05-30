import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart : product[] =[

  ]

adding(b:any){

  
  this.cart.push(b)
 
}

getall(){

  return of(this.cart)
}

}
