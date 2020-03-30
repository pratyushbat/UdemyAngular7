import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { extend } from 'webdriver-js-extender';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService {
  constructor(http:HttpClient) {
    super(http,'http://localhost:8000/user/login');
   }
}
