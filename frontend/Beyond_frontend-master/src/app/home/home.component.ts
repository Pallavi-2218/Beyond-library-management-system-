import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route :Router,private service:LoginService){}

username=""
password=""
userid:any
user:any;

signup(){

  this.user={"userid":this.userid,"username":this.username,"userpwd":this.password}
  console.log(this.user)
  localStorage.setItem("user",JSON.stringify(this.user))
  this.service.signin(this.user).subscribe(
    (res)=>{
      if(res=="1")
      {
        Swal.fire({
          icon: 'success',
          title: 'Yeah...',
          text: 'Registration successful!',
          
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'oops!',
          text: 'Registration unsuccessful',
          
        })
      }
    }
  )
}

login(){

  this.user={
    "username":this.username,
    "userpwd":this.password}
  console.log(this.user)
  this.service.login(this.user).subscribe(
    (res)=>{
      console.log(res)
      if(res=="-1"){
        Swal.fire({
          icon: 'error',
          title: 'oops!',
          text: 'Invalid credentials',
          
        })
      }
      else if(res=="0"){
        Swal.fire({
          icon: 'error',
          title: 'oops!',
          text: 'Account not found',
          
        })
      }
      else{

        localStorage.setItem('user',JSON.stringify(this.user))
        Swal.fire({
          icon: 'success',
          title: 'Yeah...',
          text: 'Login successful!',
          
        })
        this.route.navigateByUrl('/products')
      }
    }
  )
  
}


ngOnInit(){

  Swal.fire({
    text: 'Hey there! Want a ride with book ? What are you waiting for ? Just sign up. Start your reading journey with us and let your imagination drive you BEYOND',
    
  })
}
}
