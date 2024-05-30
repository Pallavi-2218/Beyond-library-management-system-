import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  forms:any;formLength:any;response:any;responseLength=0;users=[];
  userlength:any;
  constructor(private service:ProductsService,private userService:LoginService){}
  calc(){
    this.formLength=this.forms.length;
    
    for(let a of this.forms){
      
      this.responseLength+=a.submissions.length;
    }
    this.userlength=this.users.length;
    console.log("users"+this.users);
  }
  ngOnInit(){
    this.service.getall().subscribe((res:any)=>{
      console.log(res);
      this.users=Object.values(res);
    })
    this.userService. getAllUsers().subscribe((res:any)=>{
      console.log(res);
      this.forms=res;
      this.response=res.submissions;
      this.calc();
      console.log(this.response);
    });
    
}

}
