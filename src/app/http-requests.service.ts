import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http:HttpClient) { }

  login(body:any){
    const {email,password}=body
    return this.http.post(
      'https://api.escuelajs.co/api/v1/auth/login',{
         'email':email,
         'password':password
      }
    )
  }
}
