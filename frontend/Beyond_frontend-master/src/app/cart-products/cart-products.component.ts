import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent {

  constructor(private cart:CartService){}

  products:any;

  ngOnInit(){
  
    this.cart.getall().subscribe(

      (res)=>{this.products=res}
    )

    console.table(this.products)

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
