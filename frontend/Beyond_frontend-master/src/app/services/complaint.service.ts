import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  complaint(obj:any){

   return  this.http.post(`http://localhost:3500/complaint`,obj)

  }
}
