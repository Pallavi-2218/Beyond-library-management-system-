import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(user:any){

    console.log(user)
    return this.http.post('http://localhost:3500/user',user)

  }

  login(user:any){

    return this.http.post('http://localhost:3500/login',user);

  }

  addproduct(product:any){

    return this.http.post("http://localhost:3500/book",product)
  }

  delete(product:any){
    
  }

  getAllUsers(){
    return this.http.get('http://localhost:3500/users/getUsers')
  }
}
