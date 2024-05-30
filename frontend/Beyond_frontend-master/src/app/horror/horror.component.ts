import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent {

 
  constructor(private service:ProductsService,private cart:CartService,private route:Router){}

  products:any;
  horror=false;
  genre=3;
  
  ngOnInit(){

    this.service.genre_books(this.genre).subscribe(
      (res)=>{
        this.products=res;
      }
    )
    
    }

    

addtocart(b:any){

  this.cart.adding(b)
  this.route.navigateByUrl('/addtocart')

}


price:any;
username=""
email=""
phone=""


buy(b:any){
  
this.price=b.pprice;
}

buynow(){

 if(this.username!="" && this.phone!="" && this.email!=""){
  Swal.fire({
    icon: 'success',
    title: 'Purchase Successful...',
    text: 'Your book is on the way to you',
    
  })
 }
}

}
