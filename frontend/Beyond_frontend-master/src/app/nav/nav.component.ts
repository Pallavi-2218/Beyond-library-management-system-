import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

constructor(private route:Router){}

user:any;
username:any;
userpwd:any;
admin=false;
   ngOnInit(){

     if(localStorage.getItem('user')==null){
         this.route.navigateByUrl('/')
     }  
     else{
      this.user=localStorage.getItem('user')
      this.user=JSON.parse(this.user)
     this.username=this.user.username
     this.userpwd=this.user.userpwd;
     
    if(this.username=="admin" && this.userpwd=="12345"){

      this.admin=true;
     }
     }


  
   }

 logout(){

 
  localStorage.removeItem('user')
  Swal.fire({
    icon: 'success',
    title: 'Yeah...',
    text: 'Logout successful!',
    
  })
  this.route.navigateByUrl('/')
 }

 home(){

  alert("Logout to go to home page")
 }
}
