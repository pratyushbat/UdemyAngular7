import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppError } from 'src/app/app.error';
import { BadInput } from 'src/app/bad-input';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  invalidLogin: boolean; 
  constructor(
    private router: Router, 
    private postService: AuthService,private http:HttpClient) { }

  signIn(credentials) {
    console.log(credentials)
    
   this.postService.create(credentials)
   .subscribe(
      response=>{
       console.log(response);
     
     },(error:AppError)=>{
     

     if(error instanceof BadInput)
      alert(error.originalError);

 else{
   throw error;
 }

    });
   
  }

  ngOnInit() {
  }

}
