import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService {

  constructor(private router:Router) { }
  canActivate(){
    const token=localStorage.getItem('token') || sessionStorage.getItem('token')
    if(token){
       this.router.navigate(['/products'])
       return false;
    }else{
      return true;
    }
  }
}
