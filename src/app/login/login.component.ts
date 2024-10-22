import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpRequestsService } from '../http-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[HttpRequestsService]
})
export class LoginComponent {
  loginForm!:FormGroup
  constructor(private fb:FormBuilder,private httpService:HttpRequestsService,private router:Router){}
  ngOnInit(){
     this.loginForm=this.fb.group({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      rememberMe:[false]
     })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.httpService.login(this.loginForm.value).subscribe((res:any)=>{
          console.log(res)
          if(this.loginForm.value.rememberMe){
              localStorage.setItem('token',res['access_token'])
          }else{
            sessionStorage.setItem('token',res['access_token'])
          }
          this.router.navigate(['/products'])
      })
    }
  }
}
