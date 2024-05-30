import { Component } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private service:ComplaintService,private route:Router){}

  username="";
  phone="";
  email="";
  msg="";
  msg_obj:any;

  complaint(){
    
    this.msg_obj={"username":this.username,"phone":this.phone,"email":this.email,"msg":this.msg}

    this.service.complaint(this.msg_obj).subscribe(

      (res)=>{
        
        if(res=="-1"){
        Swal.fire({
          icon: 'error',
          title: 'oops...',
          text: 'Error occured',
          
        })
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Yeah...',
          text: 'Message sent successfully!',
          
        })
      }}
    )

    this.route.navigateByUrl('/complaint')

  }

}
