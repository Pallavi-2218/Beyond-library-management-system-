import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';
import { product } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service:ProductsService,private cart:CartService,private route:Router){}

products:any;
price:any;
username="";
email="";
phone="";
horror_books:any;
user:any;
admin=false;
ngOnInit(){

this.user=localStorage.getItem('user')
this.user=JSON.parse(this.user)
this.username=this.user.username
if(this.username=="admin"){
this.admin=true
}
this.service.getall().subscribe(

  (res)=>{this.products=res}
)


}

addtocart(b:any){

  this.cart.adding(b);
  this.route.navigateByUrl('/addtocart');

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
 



buy(b:any){
  
this.price=b.pprice;
}

_id:any;
delete(pobj:any){

  this._id=pobj._id;
    this.service.delete(this._id).subscribe(
      (r:any)=>{if(r=="-1")
            {alert("error occured")}
            else{
              alert("deleted successful")

              setTimeout(()=>{window.location.reload(),'3000'})
            }
    })


}

ed=false

edit(pobj:any){

this.ed=true;

}


update(pobj:any){

  this.service.update(pobj).subscribe(
    (r)=>{if(r=="-1"){

      alert("error occured")
    }
    else{
      alert("Updated successfully")
      this.ed=false
    }
  }
  )
}

filtervalue=""
f=false;
filteredproducts:any =[];
l:any;
filter(){

  this.f=true;
  console.log("f="+this.f)
  this.service.getall().subscribe(
    
    (res)=>{this.products=res}
    )

    console.log("all products ="+this.products)

    this.filteredproducts=this.products.filter((item:any)=>{
      return item.pgenre.toLowerCase().includes(this.filtervalue.toLowerCase()) ||

      item.pname.toLowerCase().includes(this.filtervalue.toLowerCase()) ||

      item.pauthor.toLowerCase().includes(this.filtervalue.toLowerCase()) ||

      item.pprice.toLowerCase().includes(this.filtervalue.toLowerCase()) 


    })
    
    this.l=this.filteredproducts.length
    
    console.log("filtered products ="+this.filteredproducts)
}

}